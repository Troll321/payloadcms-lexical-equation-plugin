"use client";
import { $isHorizontalRuleNode, createClientFeature, slashMenuBasicGroupWithItems, toolbarFormatGroupWithItems } from "@payloadcms/richtext-lexical/client";
import { $getSelection, $isNodeSelection, $isRangeSelection } from "@payloadcms/richtext-lexical/lexical";
import { EquationsPlugin, INSERT_EQUATION_COMMAND } from "./equation/EqPlugin";
import { EqIcon } from "./equation/EqIcon";
import { EquationNode } from "./equation/EqNode";
import { EqMDTransformer } from "./equation/EqMDTransformer";
export const EquationClientFeature = createClientFeature({
    nodes: [EquationNode],
    plugins: [{ Component: EquationsPlugin, position: "normal" }],
    markdownTransformers: EqMDTransformer,
    toolbarInline: {
        groups: [
            toolbarFormatGroupWithItems([
                {
                    ChildComponent: EqIcon,
                    isActive: ({ selection }) => {
                        if (!$isNodeSelection(selection) || !selection.getNodes().length) {
                            return false;
                        }
                        const firstNode = selection.getNodes()[0];
                        return $isHorizontalRuleNode(firstNode);
                    },
                    key: "Equation",
                    onSelect: ({ editor }) => {
                        const eq = editor.getEditorState().read(() => {
                            const selection = $getSelection();
                            if ($isRangeSelection(selection)) {
                                return selection.getTextContent(); // Get the selected text
                            }
                            return null;
                        });
                        editor.dispatchCommand(INSERT_EQUATION_COMMAND, { equation: eq ?? "", inline: true });
                    },
                },
            ]),
        ],
    },
    slashMenu: {
        groups: [
            slashMenuBasicGroupWithItems([
                {
                    Icon: EqIcon,
                    key: "Equation",
                    keywords: ["Equation", "Math", "Function"],
                    onSelect: ({ editor }) => {
                        editor.dispatchCommand(INSERT_EQUATION_COMMAND, {
                            equation: "x^{2}",
                            inline: false,
                        });
                    },
                },
            ]),
        ],
    },
});
//# sourceMappingURL=client.feature.js.map