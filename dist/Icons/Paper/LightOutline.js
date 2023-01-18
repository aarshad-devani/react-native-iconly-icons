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
const PaperLightOutline = (props) => ((0, jsx_runtime_1.jsxs)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Mask, { id: "a", maskUnits: "userSpaceOnUse", x: 3, y: 2, width: 18, height: 20, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M3 2.012h17.053v19.853H3V2.012Z", fill: "#fff" }) }), (0, jsx_runtime_1.jsx)(react_native_svg_1.G, { mask: "url(#a)", children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M7.573 3.512a3.087 3.087 0 0 0-3.072 2.997v10.695a3.087 3.087 0 0 0 3.01 3.162h8.063c1.67-.07 2.991-1.456 2.98-3.156V8.34l-4.636-4.828H7.573Zm.012 18.354h-.109a4.585 4.585 0 0 1-4.475-4.678V6.49c.058-2.481 2.107-4.48 4.57-4.48H14.238c.204 0 .4.084.541.23l5.065 5.278a.75.75 0 0 1 .21.519v9.166a4.617 4.617 0 0 1-4.45 4.66l-8.019.002Z", fill: props.fillColor }) }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M19.298 8.984h-2.755a3.332 3.332 0 0 1-3.318-3.325V2.75a.75.75 0 0 1 1.5 0v2.91c0 1.003.817 1.821 1.82 1.824h2.753a.75.75 0 0 1 0 1.5M13.789 16.108h-5.4a.75.75 0 0 1 0-1.5h5.4a.75.75 0 0 1 0 1.5M11.744 12.356H8.388a.75.75 0 0 1 0-1.5h3.356a.75.75 0 0 1 0 1.5", fill: props.fillColor })] }));
exports.default = PaperLightOutline;
//# sourceMappingURL=LightOutline.js.map