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
const VolumeUpCurved = (props) => ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: (0, jsx_runtime_1.jsxs)(react_native_svg_1.G, { stroke: props.fillColor, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { d: "M19.436 5.774c2.493 3.72 2.5 8.63 0 12.358M16.989 8.217a7.74 7.74 0 0 1 0 7.472" }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { clipRule: "evenodd", d: "M2.682 11.953c-.002 1.246 0 2.708 1.03 3.582 1.03.874 1.846.513 3.178.952 1.332.439 3.199 3.146 5.26 1.923 1.115-.792 1.64-2.286 1.64-6.457 0-4.171-.501-5.65-1.64-6.457C10.09 4.274 8.223 6.98 6.89 7.419c-1.332.44-2.149.079-3.179.952-1.029.874-1.031 2.336-1.029 3.582Z" })] }) }));
exports.default = VolumeUpCurved;
//# sourceMappingURL=Curved.js.map