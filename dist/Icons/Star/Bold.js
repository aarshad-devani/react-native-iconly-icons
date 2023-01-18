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
const StarBold = (props) => ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { d: "M17.918 14.32a1.1 1.1 0 0 0-.319.97l.89 4.92a1.08 1.08 0 0 1-.45 1.08 1.1 1.1 0 0 1-1.17.08l-4.43-2.31a1.13 1.13 0 0 0-.5-.13h-.27a.812.812 0 0 0-.27.09l-4.43 2.32c-.22.11-.468.15-.71.11a1.112 1.112 0 0 1-.89-1.27l.89-4.92a1.119 1.119 0 0 0-.32-.98l-3.61-3.5a1.08 1.08 0 0 1-.27-1.13c.134-.396.476-.685.89-.75l4.97-.72c.377-.04.71-.27.88-.61l2.19-4.49c.051-.1.118-.192.2-.27l.09-.07a.671.671 0 0 1 .16-.13l.11-.04.17-.07h.42c.376.04.707.264.88.6l2.22 4.47c.16.327.47.554.83.61l4.97.72c.42.06.77.35.91.75.13.401.017.841-.29 1.13l-3.74 3.54Z", fill: props.fillColor }) }));
exports.default = StarBold;
//# sourceMappingURL=Bold.js.map