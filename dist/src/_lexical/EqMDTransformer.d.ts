export declare const EquationMDTransformer: Readonly<{
    dependencies: Array<import("lexical").Klass<import("lexical").LexicalNode>>;
    export?: (node: import("lexical").LexicalNode, exportChildren: (node: import("lexical").ElementNode) => string, exportFormat: (node: import("lexical").TextNode, textContent: string) => string) => string | null;
    importRegExp?: RegExp;
    regExp: RegExp;
    replace?: (node: import("lexical").TextNode, match: RegExpMatchArray) => void | import("lexical").TextNode;
    getEndIndex?: (node: import("lexical").TextNode, match: RegExpMatchArray) => number | false;
    trigger?: string;
    type: "text-match";
}>[];
//# sourceMappingURL=EqMDTransformer.d.ts.map