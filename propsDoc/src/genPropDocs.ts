import * as fs from 'fs-extra';
import { glob } from 'glob';
import path from 'path';
import * as docgen from 'react-docgen-typescript';

const rootFolder = path.join(__dirname, '../..');
const propsJSONFolder = path.join(rootFolder, 'propsDoc/jsonProps');
const libSrcFolder = path.join(rootFolder, 'lib-src');
const tsConfigPath = path.join(rootFolder, 'tsconfig.prod.json');

const totalTime = 'Total time';
console.time(totalTime);

/**
 * These files are ignored when generating props docs.
 * See Readme for more information.
 */
const filesToIgnore = ['Icons.tsx'];

// The same type also gets written to the ts entry file.
type ParsedPropsDoc = docgen.ComponentDoc & { jsonPath: string };

/**
 * An intermediately used object to associate json files with component names.
 */
export type PropsLocator = {
  displayName: string;
  jsonPath: string;
  constName: string;
};

// Create a custom docgen parser that uses the proper tsConfig.
// https://github.com/styleguidist/react-docgen-typescript#usage
const tsConfigParser = docgen.withCustomConfig(tsConfigPath, {
  savePropValueAsString: true,
});

// Turn a components filepath into the right json path where to store the props doc json.
const jsonPathForFilepath = (filePath: string) => {
  const relativePath = filePath.replace(libSrcFolder.toString() + '/', '');
  return path.join(propsJSONFolder, relativePath).replace('.tsx', '.json');
};

/**
 * Given a filepath, create it's JSON representation.
 */
const handleFilepath = async (filePath: string) => {
  const propsObject = tsConfigParser.parse(filePath)[0] as ParsedPropsDoc;
  if (!propsObject) {
    console.log(`\n🚨 couldn't generate props for ${filePath}`);
    console.log('🚨 Did you type your component as React.FC?');
    process.exit(1);
  }
  propsObject.jsonPath = jsonPathForFilepath(propsObject.filePath);
  await fs.ensureDir(path.dirname(propsObject.jsonPath));
  await fs.writeJson(propsObject.jsonPath, propsObject);
};

export async function main() {
  console.log('Takeoff 🛫');

  // Find all .tsx files in the lib-src folder.
  const globPatter = `${libSrcFolder.toString()}/**/!(*.test).tsx`;
  console.log('✈️  Searching for components with:', globPatter);

  // Get a list of absolute file paths to process.
  const globFiles = await new Promise<string[]>((resolve, reject) => {
    glob(globPatter, {}, (err, files) => {
      if (err) reject(err);
      resolve(files);
    });
  });
  const files = globFiles.filter((file) =>
    filesToIgnore.every((ignoredFile) => !file.includes(ignoredFile)),
  );

  // parse all files into docs object
  console.log(`✈️  Parsing ${files.length} components.`);
  console.log('💺 Please take a seat!');
  console.log(`💺 Estimated time: ${Math.floor(0.6 * files.length)} seconds.`);

  // Make waiting fun.
  console.log('');
  console.log('🎪 Which Emojis are you going to get???');
  const numberOfFiles = files.length;
  let processedFiles = 0;
  const emojis = ['📦', '🥊', '🏗 ', '🧑‍💻', '🎯', '🚀', '🎉', '💥'];
  let selectedEmojis: any = {};
  emojis.forEach((emoji) => {
    selectedEmojis[emoji] = 0;
  });
  const reportOnProgress = () => {
    processedFiles += 1;
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    selectedEmojis[randomEmoji] += 1;
    console.log(`${randomEmoji} ${processedFiles}/${numberOfFiles}`);

    // This makes TypeScript happy with he initial promise resolving to null.
    return null;
  };

  // Sequentially handle each file.
  // Parallel might be a second faster but this is a much nicer user experience.
  await files.reduce(
    (promise, filePath) =>
      promise.then(() => handleFilepath(filePath).then(reportOnProgress)),
    Promise.resolve(null),
  );

  console.log('✈️  Finished parsing');

  // Create an entrypoint ts file that exports all json as typed objects.
  console.log('✈️  Creating entrypoint.');
  const fileLocators: PropsLocator[] = await Promise.all(
    files.map(async (filepath): Promise<PropsLocator> => {
      const jsonPath = jsonPathForFilepath(filepath);
      const jsonContent = (await fs.readJSON(jsonPath)) as ParsedPropsDoc;
      const displayName = jsonContent.displayName;

      return {
        jsonPath,
        displayName,
        constName: `${displayName}Props`,
      };
    }),
  );

  const jsonImports = fileLocators.map(
    ({ displayName, jsonPath, constName }) => {
      return `import ${constName} from '${jsonPath}' assert { type: 'json' }`;
    },
  );

  const TSfile = `
// File generated, DO NOT EDIT!

// Import all the props json files.
${jsonImports.join('\n')}

// Now add typing to everything.
import * as docgen from 'react-docgen-typescript'
export type ParsedPropsDoc = docgen.ComponentDoc & { jsonPath: string }

export const allProps = [${fileLocators
    .map(({ constName }) => `${constName}`)
    .join(', ')}] as unknown as ParsedPropsDoc[]
  `;

  await fs.writeFile(path.join(propsJSONFolder, 'allProps.ts'), TSfile);
  console.log('All done 🛬');

  console.log('');
  console.log('Congrats, your Emoji selection was:');
  Object.entries(selectedEmojis)
    .sort((a, b) => (b[1] as number) - (a[1] as number))
    .forEach(([emoji, count]) =>
      console.log(
        `${emoji} ${Math.floor(((count as number) / numberOfFiles) * 100)}%`,
      ),
    );

  console.log('');
  console.log(`${numberOfFiles} files were processed.`);
  console.timeEnd(totalTime);
}

if (require.main === module) {
  // run main function if called via cli
  main().catch(console.error);
}
