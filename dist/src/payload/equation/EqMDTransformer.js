import { $createEquationNode, $isEquationNode, EquationNode } from "./EqNode";
const InlineEqTransformer = {
    type: "text-match",
    dependencies: [EquationNode],
    export: (node, exportChildren) => {
        if (!$isEquationNode(node) || node.__inline !== true) {
            return null;
        }
        return " $ ";
    },
    regExp: /(?<!\S)\$(?!\S)(.*?)(?<!\S)\$(?!\S)/,
    trigger: " ",
    replace: (textNode, match) => {
        textNode.replace($createEquationNode(match[0].slice(1, match[0].length - 1), true));
    },
};
const BlockEqTransformer = {
    type: "text-match",
    dependencies: [EquationNode],
    export: (node, exportChildren) => {
        if (!$isEquationNode(node) || node.__inline !== false) {
            return null;
        }
        return " $$ ";
    },
    trigger: " ",
    regExp: /(?<!\S)\$\$(?!\S)(.*?)(?<!\S)\$\$(?!\S)/,
    replace: (textNode, match) => {
        textNode.replace($createEquationNode(match[0].slice(2, match[0].length - 2), false));
    },
};
export const EqMDTransformer = [BlockEqTransformer, InlineEqTransformer];
//# sourceMappingURL=EqMDTransformer.js.map