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
const MessageBold = (props) => ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M16.94 3A5.057 5.057 0 0 1 22 8.05v7.9c0 2.79-2.27 5.05-5.06 5.05H7.06A5.057 5.057 0 0 1 2 15.95v-7.9A5.05 5.05 0 0 1 7.06 3h9.88Zm1.59 6.54.08-.08a.773.773 0 0 0-.01-1 .84.84 0 0 0-.53-.26.76.76 0 0 0-.56.2L13 12a1.566 1.566 0 0 1-2 0L6.5 8.4a.76.76 0 0 0-1 .07c-.27.27-.3.7-.07 1l.13.13 4.55 3.55a3.143 3.143 0 0 0 3.91 0l4.51-3.61Z", fill: props.fillColor }) }));
exports.default = MessageBold;
//# sourceMappingURL=Bold.js.map