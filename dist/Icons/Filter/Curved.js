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
const FilterCurved = (props) => ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: (0, jsx_runtime_1.jsxs)(react_native_svg_1.G, { stroke: props.fillColor, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { d: "M11.144 17.883H4.67" }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { clipRule: "evenodd", d: "M15.205 17.884c0 2.042.681 2.722 2.722 2.722 2.04 0 2.722-.68 2.722-2.722s-.681-2.722-2.722-2.722-2.722.68-2.722 2.722Z" }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { d: "M14.177 7.394h6.471" }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { clipRule: "evenodd", d: "M10.115 7.393c0-2.041-.68-2.722-2.721-2.722-2.042 0-2.723.681-2.723 2.722 0 2.042.68 2.722 2.723 2.722 2.04 0 2.721-.68 2.721-2.722Z" })] }) }));
exports.default = FilterCurved;
//# sourceMappingURL=Curved.js.map