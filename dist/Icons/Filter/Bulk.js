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
const FilterBulk = (props) => ((0, jsx_runtime_1.jsxs)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { opacity: 0.4, d: "M10.083 15.958H3.508c-.832 0-1.508.664-1.508 1.481 0 .817.676 1.482 1.508 1.482h6.575c.832 0 1.508-.665 1.508-1.482s-.675-1.481-1.508-1.481M22 6.379c0-.817-.675-1.48-1.507-1.48h-6.575c-.832 0-1.508.663-1.508 1.48s.676 1.481 1.508 1.481h6.575c.832 0 1.507-.664 1.507-1.481", fill: props.fillColor }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { d: "M8.878 6.379c0 1.866-1.54 3.38-3.44 3.38C3.54 9.758 2 8.244 2 6.378 2 4.513 3.54 3 5.439 3c1.9 0 3.439 1.513 3.439 3.379M22 17.4c0 1.865-1.539 3.378-3.439 3.378-1.899 0-3.439-1.513-3.439-3.379 0-1.867 1.54-3.38 3.44-3.38S22 15.534 22 17.4", fill: props.fillColor })] }));
exports.default = FilterBulk;
//# sourceMappingURL=Bulk.js.map