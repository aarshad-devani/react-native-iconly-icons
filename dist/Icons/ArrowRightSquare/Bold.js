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
const ArrowRightSquareBold = (props) => ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M16.08 22H7.91C4.38 22 2 19.729 2 16.34V7.67C2 4.28 4.38 2 7.91 2h8.17C19.62 2 22 4.28 22 7.67v8.67c0 3.389-2.38 5.66-5.92 5.66Zm-1.81-10.75H7.92c-.42 0-.75.34-.75.75 0 .42.33.75.75.75h6.35l-2.48 2.47c-.14.14-.22.34-.22.53 0 .189.08.38.22.53.29.29.77.29 1.06 0l3.77-3.75c.28-.28.28-.78 0-1.06l-3.77-3.75a.754.754 0 0 0-1.06 0c-.29.3-.29.77 0 1.07l2.48 2.46Z", fill: props.fillColor }) }));
exports.default = ArrowRightSquareBold;
//# sourceMappingURL=Bold.js.map