# Payloadcms Lexical Equation Plugin

## What?

Ability to insert LateX Equation to Lexical Editor in payloadcms. The code for this is taken from lexical playground then copied to be supported in payload lexical editor.

**Could also be used with normal Lexical outside payload!**

## Installation

`npm i payloadcms-lexical-equation-plugin`

#### Payload

- Install dependencies

`npm i @payloadcms/richtext-lexical`

- **Generate importmap!** See Payload official docs for further information

`npm run payload generate:importmap`

---

#### Lexical

- Install dependencies

`npm i lexical @lexical/react @lexical/utils @lexical/markdown`

You can remove the `@lexical/markdown` if don't want to use the markdown transformer

## Usage

### Payload

`payload.config.ts`

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

### Lexical

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
