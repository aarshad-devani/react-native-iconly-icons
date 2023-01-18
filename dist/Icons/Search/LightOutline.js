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
const SearchLightOutline = (props) => ((0, jsx_runtime_1.jsxs)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Mask, { id: "a", maskUnits: "userSpaceOnUse", x: 2, y: 2, width: 20, height: 20, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M2 2h19.477v19.477H2V2Z", fill: "#fff" }) }), (0, jsx_runtime_1.jsx)(react_native_svg_1.G, { mask: "url(#a)", children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M11.739 3.5c-4.543 0-8.24 3.695-8.24 8.238 0 4.543 3.697 8.239 8.24 8.239 4.542 0 8.238-3.696 8.238-8.239 0-4.543-3.696-8.238-8.238-8.238m0 17.977c-5.37 0-9.74-4.369-9.74-9.739C2 6.368 6.37 2 11.74 2s9.738 4.368 9.738 9.738c0 5.37-4.368 9.739-9.738 9.739", fill: props.fillColor }) }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Mask, { id: "b", maskUnits: "userSpaceOnUse", x: 17, y: 17, width: 6, height: 6, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M17.24 17.707h5.024v5.015H17.24v-5.015Z", fill: "#fff" }) }), (0, jsx_runtime_1.jsx)(react_native_svg_1.G, { mask: "url(#b)", children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M21.514 22.722a.75.75 0 0 1-.53-.22L17.46 18.99a.75.75 0 0 1 1.06-1.063l3.524 3.515a.749.749 0 0 1-.53 1.28", fill: props.fillColor }) })] }));
exports.default = SearchLightOutline;
//# sourceMappingURL=LightOutline.js.map