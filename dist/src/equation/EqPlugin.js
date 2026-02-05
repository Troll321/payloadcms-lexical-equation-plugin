/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { useLexicalComposerContext } from "@payloadcms/richtext-lexical/lexical/react/LexicalComposerContext";
import { $wrapNodeInElement } from "@payloadcms/richtext-lexical/lexical/utils";
import { $createParagraphNode, $insertNodes, $isRootOrShadowRoot, COMMAND_PRIORITY_EDITOR, createCommand } from "@payloadcms/richtext-lexical/lexical";
import { useEffect } from "react";
import { $createEquationNode, EquationNode } from "./EqNode";
import "./EqPlugin.css";
export const INSERT_EQUATION_COMMAND = createCommand("INSERT_EQUATION_COMMAND");
export const EquationsPlugin = () => {
    const [editor] = useLexicalComposerContext();
    useEffect(() => {
        if (!editor.hasNodes([EquationNode])) {
            throw new Error("EquationsPlugins: EquationsNode not registered on editor");
        }
        return editor.registerCommand(INSERT_EQUATION_COMMAND, (payload) => {
            const { equation, inline } = payload;
            const equationNode = $createEquationNode(equation, inline);
            $insertNodes([equationNode]);
            if ($isRootOrShadowRoot(equationNode.getParentOrThrow())) {
                $wrapNodeInElement(equationNode, $createParagraphNode).selectEnd();
            }
            return true;
        }, COMMAND_PRIORITY_EDITOR);
    }, [editor]);
    return null;
};
//# sourceMappingURL=EqPlugin.js.map