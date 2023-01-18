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
const DangerTwotone = (props) => ((0, jsx_runtime_1.jsxs)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { opacity: 0.4, d: "M11.25 16.27c0-.414.336-.756.75-.756s.75.33.75.745v.01a.75.75 0 0 1-1.5 0Z", fill: props.fillColor }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { d: "M4.796 20.418h14.482a2.08 2.08 0 0 0 1.819-2.859L13.82 4.823a2.078 2.078 0 0 0-3.64 0L2.905 17.559a2.08 2.08 0 0 0 1.819 2.859", stroke: props.fillColor, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { opacity: 0.4, d: "M11.99 13.396v-3.1", stroke: props.fillColor, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })] }));
exports.default = DangerTwotone;
//# sourceMappingURL=Twotone.js.map