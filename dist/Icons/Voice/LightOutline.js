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
const VoiceLightOutline = (props) => ((0, jsx_runtime_1.jsxs)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M11.75 22.5a.75.75 0 0 1-.75-.75v-3.161a.75.75 0 0 1 1.5 0v3.161a.75.75 0 0 1-.75.75M11.75 2.5c-1.826 0-3.313 1.494-3.313 3.331v4.688c0 1.835 1.487 3.33 3.313 3.33 1.825 0 3.312-1.495 3.312-3.33V5.831c0-1.837-1.486-3.331-3.313-3.331m0 12.849c-2.652 0-4.812-2.167-4.812-4.83V5.831C6.938 3.167 9.098 1 11.75 1c2.653 0 4.812 2.167 4.812 4.831v4.688c0 2.663-2.159 4.83-4.812 4.83", fill: props.fillColor }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Mask, { id: "a", maskUnits: "userSpaceOnUse", x: 3, y: 9, width: 18, height: 11, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M3 9.8h17.5v9.539H3V9.8Z", fill: "#fff" }) }), (0, jsx_runtime_1.jsx)(react_native_svg_1.G, { mask: "url(#a)", children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M11.75 19.339C6.924 19.339 3 15.397 3 10.55a.75.75 0 0 1 1.5 0c0 4.018 3.252 7.288 7.25 7.288S19 14.569 19 10.55a.75.75 0 0 1 1.5 0c0 4.846-3.925 8.788-8.75 8.788", fill: props.fillColor }) })] }));
exports.default = VoiceLightOutline;
//# sourceMappingURL=LightOutline.js.map