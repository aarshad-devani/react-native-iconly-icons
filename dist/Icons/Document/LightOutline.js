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
const DocumentLightOutline = (props) => ((0, jsx_runtime_1.jsxs)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M15.716 16.974h-7.22a.75.75 0 0 1 0-1.5h7.22a.75.75 0 0 1 0 1.5M15.716 12.787h-7.22a.75.75 0 0 1 0-1.5h7.22a.75.75 0 0 1 0 1.5M11.25 8.61H8.497a.75.75 0 0 1 0-1.5h2.755a.75.75 0 0 1 0 1.5", fill: props.fillColor }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Mask, { id: "a", maskUnits: "userSpaceOnUse", x: 3, y: 2, width: 19, height: 20, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M3 2h18.165v19.91H3V2Z", fill: "#fff" }) }), (0, jsx_runtime_1.jsx)(react_native_svg_1.G, { mask: "url(#a)", children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "m15.909 3.5-7.69.004C5.893 3.518 4.5 4.958 4.5 7.357v9.196c0 2.415 1.406 3.857 3.757 3.857l7.689-.003c2.328-.014 3.72-1.456 3.72-3.854V7.357c0-2.415-1.404-3.857-3.756-3.857ZM8.257 21.91C5.113 21.91 3 19.757 3 16.553V7.357c0-3.233 2.047-5.334 5.215-5.353L15.908 2c3.145 0 5.257 2.153 5.257 5.357v9.196c0 3.232-2.047 5.334-5.215 5.354l-7.693.003Z", fill: props.fillColor }) })] }));
exports.default = DocumentLightOutline;
//# sourceMappingURL=LightOutline.js.map