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
const MoreCircleBulk = (props) => ((0, jsx_runtime_1.jsxs)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { opacity: 0.4, d: "M22 12c0 5.524-4.477 10-10 10S2 17.524 2 12C2 6.478 6.477 2 12 2s10 4.478 10 10", fill: props.fillColor }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M7.521 10.803c-.66 0-1.198.537-1.198 1.196a1.2 1.2 0 0 0 1.198 1.198A1.2 1.2 0 0 0 8.72 12c0-.66-.537-1.197-1.198-1.197Zm4.48 0c-.662 0-1.199.537-1.199 1.196A1.2 1.2 0 0 0 12 13.197 1.2 1.2 0 0 0 13.198 12c0-.66-.537-1.197-1.198-1.197ZM15.28 12a1.198 1.198 0 0 1 2.397 0 1.2 1.2 0 0 1-1.198 1.198A1.2 1.2 0 0 1 15.282 12Z", fill: props.fillColor })] }));
exports.default = MoreCircleBulk;
//# sourceMappingURL=Bulk.js.map