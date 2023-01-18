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
const GameLight = (props) => ((0, jsx_runtime_1.jsxs)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { d: "M8.848 12.314v3.745M10.76 14.187H6.937M15.366 12.428h-.107M17.18 16.003h-.107M8.072 2c0 .74.613 1.34 1.368 1.34h1.057c1.165.005 2.11.93 2.115 2.073v.675", stroke: props.fillColor, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { clipRule: "evenodd", d: "M16.428 21.963c-3.005.05-5.955.048-8.855 0C4.353 21.963 2 19.666 2 16.51v-4.65c0-3.154 2.354-5.45 5.573-5.45 2.916-.05 5.868-.05 8.855 0 3.22 0 5.572 2.297 5.572 5.45v4.65c0 3.155-2.352 5.452-5.572 5.452Z", stroke: props.fillColor, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })] }));
exports.default = GameLight;
//# sourceMappingURL=Light.js.map