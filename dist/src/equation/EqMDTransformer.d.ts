export declare const EqMDTransformer: Readonly<{
    dependencies: Array<import("@payloadcms/richtext-lexical/lexical").Klass<import("@payloadcms/richtext-lexical/lexical").LexicalNode>>;
    export?: (node: import("@payloadcms/richtext-lexical/lexical").LexicalNode, exportChildren: (node: import("@payloadcms/richtext-lexical/lexical").ElementNode) => string, exportFormat: (node: import("@payloadcms/richtext-lexical/lexical").TextNode, textContent: string) => string) => null | string;
    getEndIndex?: (node: import("@payloadcms/richtext-lexical/lexical").TextNode, match: RegExpMatchArray) => false | number;
    importRegExp?: RegExp;
    regExp: RegExp;
    replace?: (node: import("@payloadcms/richtext-lexical/lexical").TextNode, match: RegExpMatchArray) => import("@payloadcms/richtext-lexical/lexical").TextNode | void;
    trigger?: string;
    type: "text-match";
}>[];
//# sourceMappingURL=EqMDTransformer.d.ts.map