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
const GameCurved = (props) => ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: (0, jsx_runtime_1.jsxs)(react_native_svg_1.G, { stroke: props.fillColor, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { d: "M9.255 12.063v3.575M11.08 13.85H7.43M15.477 12.171h-.102M17.208 15.583h-.102M8.514 2.216a1.293 1.293 0 0 0 1.306 1.28h1.008a2.005 2.005 0 0 1 2.02 1.978v1.007" }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { clipRule: "evenodd", d: "M21.812 13.895c0-5.56-2.387-7.414-9.547-7.414-7.162 0-9.549 1.854-9.549 7.414 0 5.561 2.387 7.414 9.549 7.414 7.16 0 9.547-1.853 9.547-7.414Z" })] }) }));
exports.default = GameCurved;
//# sourceMappingURL=Curved.js.map