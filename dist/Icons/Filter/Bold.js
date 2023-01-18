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
const FilterBold = (props) => ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M8.878 6.379c0 1.866-1.54 3.38-3.44 3.38C3.54 9.758 2 8.244 2 6.378 2 4.513 3.54 3 5.439 3c1.9 0 3.439 1.513 3.439 3.379Zm11.615-1.48c.831 0 1.507.663 1.507 1.48s-.676 1.48-1.507 1.48h-6.575c-.832 0-1.508-.663-1.508-1.48s.676-1.48 1.508-1.48h6.575ZM3.508 15.957h6.575c.832 0 1.508.664 1.508 1.481 0 .817-.675 1.482-1.508 1.482H3.508C2.676 18.92 2 18.256 2 17.439s.676-1.481 1.508-1.481Zm15.053 4.82c1.9 0 3.439-1.513 3.439-3.379 0-1.867-1.539-3.38-3.439-3.38-1.899 0-3.439 1.514-3.439 3.38 0 1.866 1.54 3.379 3.44 3.379Z", fill: props.fillColor }) }));
exports.default = FilterBold;
//# sourceMappingURL=Bold.js.map