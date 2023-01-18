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
const ActivityBulk = (props) => ((0, jsx_runtime_1.jsxs)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M15.243 4.738a4.024 4.024 0 0 0 4.027 4.021c.245-.001.49-.025.73-.07v7.973C20 20.015 18.021 22 14.662 22H7.346C3.98 22 2 20.016 2 16.662V9.355C2 6.002 3.979 4 7.346 4h7.967c-.047.243-.07.49-.07.738ZM13.15 14.897l2.858-3.688v-.018a.754.754 0 0 0-.14-1.045.73.73 0 0 0-1.039.15l-2.409 3.1-2.743-2.16a.74.74 0 0 0-1.047.14l-2.954 3.81a.72.72 0 0 0-.159.457.738.738 0 0 0 1.363.43l2.471-3.196 2.744 2.151a.74.74 0 0 0 1.055-.131Z", fill: props.fillColor }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Circle, { opacity: 0.4, cx: 19.5, cy: 4.5, r: 2.5, fill: props.fillColor })] }));
exports.default = ActivityBulk;
//# sourceMappingURL=Bulk.js.map