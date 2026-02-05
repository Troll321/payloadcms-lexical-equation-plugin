# Payloadcms Lexical Equation Plugin

## What?

Ability to insert LateX Equation to Lexical Editor in payloadcms. The code for this is taken from lexical playground then copied to be supported in payload lexical editor.

## Installation

`npm i payloadcms-lexical-equation-plugin`

**Generate importmap!** See Payload official docs for further information.
`npm run payload generate:importmap`

## Usage

```ts
import { EquationFeature } from "payloadcms-lexical-equation-plugin";
export default buildConfig({
    // ...your other payload config

    editor: lexicalEditor({
        features: ({ defaultFeatures, rootFeatures }) => {
            return [
                ...defaultFeatures, // Include all default features
                EquationFeature(), // Add the EquationFeature plugin
            ];
        },
    }),
});
```

## IMPORTANT!!!

Use **PAYLOAD VERSION 3.74.0 OR ABOVE**
