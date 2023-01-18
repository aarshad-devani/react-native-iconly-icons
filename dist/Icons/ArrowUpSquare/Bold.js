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
const ArrowUpSquareBold = (props) => ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M22 7.92v8.17c0 3.53-2.271 5.91-5.66 5.91H7.67C4.28 22 2 19.62 2 16.09V7.92C2 4.38 4.28 2 7.67 2h8.67C19.729 2 22 4.38 22 7.92ZM11.25 9.73v6.35c0 .42.34.75.75.75.42 0 .75-.33.75-.75V9.73l2.47 2.48c.14.14.34.22.53.22.189 0 .38-.08.53-.22.29-.29.29-.77 0-1.06l-3.75-3.77a.774.774 0 0 0-1.06 0l-3.75 3.77c-.29.29-.29.77 0 1.06.3.29.77.29 1.07 0l2.46-2.48Z", fill: props.fillColor }) }));
exports.default = ArrowUpSquareBold;
//# sourceMappingURL=Bold.js.map