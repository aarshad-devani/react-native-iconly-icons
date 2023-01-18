"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_svg_1 = __importStar(require("react-native-svg"));
const VideoLight = (props) => ((0, jsx_runtime_1.jsxs)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { clipRule: "evenodd", d: "M16.297 15.538c.08 1.832-1.398 3.382-3.302 3.46-.14.005-6.98-.008-6.98-.008-1.895.144-3.554-1.218-3.703-3.044-.012-.136-.009-7.474-.009-7.474-.084-1.834 1.393-3.387 3.299-3.468.142-.007 6.972.006 6.972.006 1.904-.142 3.568 1.23 3.716 3.064.01.132.007 7.464.007 7.464Z", stroke: props.fillColor, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { d: "m16.3 9.98 3.293-2.695c.816-.668 2.04-.086 2.039.967L21.62 15.6c-.001 1.053-1.226 1.63-2.04.962l-3.28-2.695", stroke: props.fillColor, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })] }));
exports.default = VideoLight;
//# sourceMappingURL=Light.js.map