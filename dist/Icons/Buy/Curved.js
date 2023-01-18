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
const BuyCurved = (props) => ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: (0, jsx_runtime_1.jsxs)(react_native_svg_1.G, { stroke: props.fillColor, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { d: "M5.524 7C9.414 5.744 13.972 5.456 16 5.5c2.028.044 2.883.766 3.5 2 1 2 .789 6.988-1 8.587-1.788 1.6-9.17 1.751-11.63 0-2.599-1.85-1.241-6.895-1.326-10.344C5.595 3.813 3.5 3.5 3.5 3.5M13 10.5h2.773" }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M7.264 20.127a.545.545 0 1 1-.001 1.09.545.545 0 0 1 .001-1.09ZM17.596 20.127a.545.545 0 1 1 0 1.09.545.545 0 0 1 0-1.09Z", fill: props.fillColor })] }) }));
exports.default = BuyCurved;
//# sourceMappingURL=Curved.js.map