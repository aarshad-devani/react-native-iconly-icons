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
const SearchBulk = (props) => ((0, jsx_runtime_1.jsxs)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Ellipse, { cx: 10.599, cy: 10.653, rx: 8.599, ry: 8.653, fill: props.fillColor }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { opacity: 0.4, d: "M20.674 21.955a1.32 1.32 0 0 1-.889-.384l-2.036-2.38a1.088 1.088 0 0 1-.08-1.522.975.975 0 0 1 1.387 0l2.561 2.05c.37.377.483.937.29 1.43a1.335 1.335 0 0 1-1.18.851l-.053-.045Z", fill: props.fillColor })] }));
exports.default = SearchBulk;
//# sourceMappingURL=Bulk.js.map