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
const ArrowUp3LightOutline = (props) => ((0, jsx_runtime_1.jsxs)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M11.751 11.55a.75.75 0 0 0-.75.75v8.95a.75.75 0 0 0 1.5 0V12.3a.75.75 0 0 0-.75-.75", fill: props.fillColor }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Mask, { id: "a", maskUnits: "userSpaceOnUse", x: 6, y: 3, width: 12, height: 11, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M6 13.05h11.502V3.613H6v9.437Z", fill: "#fff" }) }), (0, jsx_runtime_1.jsx)(react_native_svg_1.G, { mask: "url(#a)", children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "m8.11 11.55 3.642-5.78 3.64 5.78H8.11Zm3.642-7.937a.75.75 0 0 0-.635.35l-5.001 7.938a.748.748 0 0 0 .635 1.149h10.002a.748.748 0 0 0 .634-1.15l-5.001-7.936a.748.748 0 0 0-.634-.351Z", fill: props.fillColor }) })] }));
exports.default = ArrowUp3LightOutline;
//# sourceMappingURL=LightOutline.js.map