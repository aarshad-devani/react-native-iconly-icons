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
const ImageBold = (props) => ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M7.666 22h8.667C19.723 22 22 19.622 22 16.083V7.917C22 4.378 19.723 2 16.334 2H7.666C4.276 2 2 4.378 2 7.917v8.166C2 19.622 4.277 22 7.666 22ZM8.5 11A2.502 2.502 0 0 1 6 8.5C6 7.122 7.12 6 8.499 6a2.503 2.503 0 0 1 2.499 2.5c0 1.378-1.121 2.5-2.5 2.5Zm11.322 3.934c.335.859.16 1.89-.197 2.74-.425 1.012-1.237 1.778-2.26 2.112a4.525 4.525 0 0 1-1.408.214H7.53c-.839 0-1.581-.201-2.19-.576-.38-.235-.448-.778-.165-1.13.472-.588.939-1.178 1.41-1.774.896-1.14 1.5-1.47 2.172-1.18.273.12.546.3.828.49.75.51 1.793 1.21 3.167.45.94-.527 1.485-1.43 1.96-2.216l.008-.013.1-.166c.16-.264.317-.524.495-.764.223-.3 1.05-1.24 2.123-.57.682.42 1.257.99 1.871 1.6.234.233.401.498.513.783Z", fill: props.fillColor }) }));
exports.default = ImageBold;
//# sourceMappingURL=Bold.js.map