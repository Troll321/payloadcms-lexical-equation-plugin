import { createServerFeature } from "@payloadcms/richtext-lexical";
import { EqMDTransformer } from "./equation/EqMDTransformer";
export const EquationFeature = createServerFeature({
    feature: {
        ClientFeature: "payloadcms-lexical-equation-plugin/client#EquationClientFeature",
        markdownTransformers: EqMDTransformer,
    },
    key: "Equation",
});
//# sourceMappingURL=server.feature.js.map