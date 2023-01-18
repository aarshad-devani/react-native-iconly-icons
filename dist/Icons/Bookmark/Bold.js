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
const BookmarkBold = (props) => ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M8.9 2h6.17c2.71 0 4.9 1.07 4.93 3.79v15.18c0 .17-.04.34-.12.49-.13.24-.35.42-.62.5-.26.08-.55.04-.79-.1l-6.48-3.24-6.49 3.24c-.149.079-.32.13-.49.13-.56 0-1.01-.46-1.01-1.02V5.79C4 3.07 6.2 2 8.9 2Zm-.68 7.62h7.53c.43 0 .78-.351.78-.79 0-.44-.35-.79-.78-.79H8.22c-.43 0-.78.35-.78.79 0 .439.35.79.78.79Z", fill: props.fillColor }) }));
exports.default = BookmarkBold;
//# sourceMappingURL=Bold.js.map