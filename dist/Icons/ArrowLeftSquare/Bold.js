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
const ArrowLeftSquareBold = (props) => ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M7.92 2h8.17C19.62 2 22 4.271 22 7.66v8.67c0 3.39-2.38 5.67-5.91 5.67H7.92C4.38 22 2 19.72 2 16.33V7.66C2 4.271 4.38 2 7.92 2Zm1.81 10.75h6.35c.42 0 .75-.34.75-.75 0-.42-.33-.75-.75-.75H9.73l2.48-2.47c.14-.14.22-.34.22-.53 0-.189-.08-.38-.22-.53a.754.754 0 0 0-1.06 0l-3.77 3.75c-.28.28-.28.78 0 1.06l3.77 3.75c.29.29.77.29 1.06 0 .29-.3.29-.77 0-1.07l-2.48-2.46Z", fill: props.fillColor }) }));
exports.default = ArrowLeftSquareBold;
//# sourceMappingURL=Bold.js.map