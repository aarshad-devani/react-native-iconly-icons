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
const SettingCurved = (props) => ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: (0, jsx_runtime_1.jsxs)(react_native_svg_1.G, { clipRule: "evenodd", stroke: props.fillColor, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { d: "M12 9.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { d: "M20.168 7.25v0a2.464 2.464 0 0 0-3.38-.911c-1.028.597-2.314-.15-2.314-1.347A2.484 2.484 0 0 0 12 2.5v0a2.484 2.484 0 0 0-2.475 2.492c0 1.196-1.285 1.944-2.313 1.347a2.465 2.465 0 0 0-3.38.911 2.502 2.502 0 0 0 .906 3.404c1.027.599 1.027 2.093 0 2.692a2.502 2.502 0 0 0-.906 3.404 2.465 2.465 0 0 0 3.379.913h.001c1.028-.6 2.313.149 2.313 1.345v0A2.484 2.484 0 0 0 12 21.5v0a2.484 2.484 0 0 0 2.474-2.492v0c0-1.196 1.286-1.944 2.314-1.345a2.465 2.465 0 0 0 3.38-.913 2.502 2.502 0 0 0-.905-3.404h-.001c-1.028-.599-1.028-2.093 0-2.692a2.501 2.501 0 0 0 .906-3.404Z" })] }) }));
exports.default = SettingCurved;
//# sourceMappingURL=Curved.js.map