/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import "katex/dist/katex.css";
import { type LexicalCommand } from "@payloadcms/richtext-lexical/lexical";
type CommandPayload = {
    equation: string;
    inline: boolean;
};
import "./EqPlugin.css";
import type { PluginComponent } from "@payloadcms/richtext-lexical";
export declare const INSERT_EQUATION_COMMAND: LexicalCommand<CommandPayload>;
export declare const EquationsPlugin: PluginComponent;
export {};
//# sourceMappingURL=EqPlugin.d.ts.map