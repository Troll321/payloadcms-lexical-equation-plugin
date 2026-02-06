# Payloadcms Lexical Equation Plugin

## What?

Ability to insert LateX Equation to Lexical Editor in payloadcms. The code for this is taken from lexical playground then copied to be supported in payload lexical editor. Could also be used outiside Payload!

## Installation

`npm i payloadcms-lexical-equation-plugin`

For Payloadcms, **Generate importmap!** See Payload official docs for further information.
`npm run payload generate:importmap`

## Usage

### Payload

```ts
import { EquationFeature } from "payloadcms-lexical-equation-plugin/payload";
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

### Non Payload (normal lexical)

```ts
import { EquationNode, EquationsPlugin } from "payloadcms-lexical-equation-plugin/lexical"

function Editor() {
  const initialConfig = {
    nodes: [EquationNode]
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
        <EquationsPlugin />
    </LexicalComposer>
  );
}
```

## IMPORTANT!!!

If payload doesn't work use **PAYLOAD VERSION 3.74.0**
