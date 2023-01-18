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
const Filter2Bold = (props) => ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M4.128 2h15.744C21.048 2 22 2.981 22 4.192v1.532c0 .587-.23 1.152-.637 1.563l-6.505 6.58a.586.586 0 0 1-.423.177l-5.446-.017a.591.591 0 0 1-.437-.195L2.575 7.257A2.23 2.23 0 0 1 2 5.757V4.194C2 2.983 2.952 2 4.128 2ZM9.28 15.824l4.855.015a.558.558 0 0 1 .547.565v2.731a.799.799 0 0 1-.453.725l-4.406 2.069a.76.76 0 0 1-.739-.055.802.802 0 0 1-.355-.67V16.39c0-.312.247-.566.551-.565Z", fill: props.fillColor }) }));
exports.default = Filter2Bold;
//# sourceMappingURL=Bold.js.map