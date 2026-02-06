/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import "katex/dist/katex.css";
import { type LexicalCommand } from "lexical";
import { type JSX } from "react";
type CommandPayload = {
    equation: string;
    inline: boolean;
};
import "./EqPlugin.css";
export declare const INSERT_EQUATION_COMMAND: LexicalCommand<CommandPayload>;
export declare function EquationsPlugin(): JSX.Element | null;
export {};
//# sourceMappingURL=EqPlugin.d.ts.map