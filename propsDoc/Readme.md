# Props documentation

This folder handles documentation for components props.

We use [react-docgen-typescript](https://github.com/styleguidist/react-docgen-typescript) to generate a JSON file with props definitions for each component. They are than exposed through a TypeScript file with typings. Preferably we would also do this via Contentlayer but TypeScript or Plaintext files are currently not supported.

## Usage

A npm command will run the script to generate all JSON props documents.

```bash
npm run build
```

## Excluding files

Sometimes we want to exclude files from props generation. For example:

- Files that collect and export multiple components (like Icons.tsx) because they will cause components to be compiled twice.

For these instances you can add the files name or it's path into the `filesToIgnore` array in `src/genPropDocs.ts`.
