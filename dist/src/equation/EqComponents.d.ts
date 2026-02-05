import type { JSX } from "react";
import { type NodeKey } from "@payloadcms/richtext-lexical/lexical";
type EquationComponentProps = {
    equation: string;
    inline: boolean;
    nodeKey: NodeKey;
};
export default function EquationComponent({ equation, inline, nodeKey }: EquationComponentProps): JSX.Element;
export {};
//# sourceMappingURL=EqComponents.d.ts.map