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
const HideCurved = (props) => ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: (0, jsx_runtime_1.jsxs)(react_native_svg_1.G, { stroke: props.fillColor, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { d: "M6.42 17.73c-2.23-1.46-3.67-3.66-3.67-5.59 0-3.28 4.14-7.3 9.25-7.3 2.09 0 4.03.67 5.59 1.71M19.85 8.61c.89 1.13 1.41 2.38 1.41 3.53 0 3.28-4.15 7.3-9.26 7.3-.91 0-1.8-.13-2.63-.36" }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { d: "M9.766 14.367a3.12 3.12 0 0 1-.925-2.229 3.159 3.159 0 0 1 5.394-2.24M15.11 12.7a3.158 3.158 0 0 1-2.537 2.541M19.892 4.25 4.118 20.024" })] }) }));
exports.default = HideCurved;
//# sourceMappingURL=Curved.js.map