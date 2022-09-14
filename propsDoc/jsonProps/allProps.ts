
// File generated, DO NOT EDIT!

// Import all the props json files.
import BadgeProps from '/Users/taxdoo/dev/ui-docs-example/propsDoc/jsonProps/components/Badge.json' assert { type: 'json' }
import ButtonProps from '/Users/taxdoo/dev/ui-docs-example/propsDoc/jsonProps/components/Button.json' assert { type: 'json' }
import HeadingProps from '/Users/taxdoo/dev/ui-docs-example/propsDoc/jsonProps/components/Heading.json' assert { type: 'json' }
import InputProps from '/Users/taxdoo/dev/ui-docs-example/propsDoc/jsonProps/components/Input.json' assert { type: 'json' }
import TextProps from '/Users/taxdoo/dev/ui-docs-example/propsDoc/jsonProps/components/Text.json' assert { type: 'json' }

// Now add typing to everything.
import * as docgen from 'react-docgen-typescript'
export type ParsedPropsDoc = docgen.ComponentDoc & { jsonPath: string }

export const allProps = [BadgeProps, ButtonProps, HeadingProps, InputProps, TextProps] as unknown as ParsedPropsDoc[]
  