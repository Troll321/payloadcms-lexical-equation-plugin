import type { TextMatchTransformer } from "@payloadcms/richtext-lexical/lexical/markdown";
import { $isEquationNode, EquationNode } from "./EqNode";

const InlineEqTransformer: TextMatchTransformer = {
    type: "text-match",
    dependencies: [EquationNode],
    export: (node, exportChildren) => {
        if (!$isEquationNode(node) || (node as EquationNode).__inline !== true) {
            return null;
        }
        return " $ ";
    },
    regExp: /(?<!\S)\$(?!\S)(.*?)(?<!\S)\$(?!\S)/,
    trigger: " ",
    replace: (textNode, match) => {
        textNode.replace(new EquationNode(match[0].slice(1, match[0].length - 1), true));
    },
};

const BlockEqTransformer: TextMatchTransformer = {
    type: "text-match",
    dependencies: [EquationNode],
    export: (node, exportChildren) => {
        if (!$isEquationNode(node) || (node as EquationNode).__inline !== false) {
            return null;
        }
        return " $$ ";
    },
    trigger: " ",
    regExp: /(?<!\S)\$\$(?!\S)(.*?)(?<!\S)\$\$(?!\S)/,
    replace: (textNode, match) => {
        textNode.replace(new EquationNode(match[0].slice(2, match[0].length - 2), false));
    },
};

export const EqMDTransformer = [BlockEqTransformer, InlineEqTransformer];
