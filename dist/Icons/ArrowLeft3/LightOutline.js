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
const ArrowLeft3LightOutline = (props) => ((0, jsx_runtime_1.jsxs)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M12.3 13.5h8.95a.75.75 0 0 0 0-1.5H12.3a.75.75 0 0 0 0 1.5", fill: props.fillColor }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Mask, { id: "a", maskUnits: "userSpaceOnUse", x: 3, y: 7, width: 11, height: 12, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M13.05 7H3.613v11.501h9.437v-11.5Z", fill: "#fff" }) }), (0, jsx_runtime_1.jsx)(react_native_svg_1.G, { mask: "url(#a)", children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M11.55 9.109v7.283L5.77 12.75l5.78-3.642Zm.75 9.393a.752.752 0 0 0 .75-.75V7.75a.748.748 0 0 0-1.15-.635l-7.937 5a.749.749 0 0 0 0 1.27l7.938 5c.12.078.26.117.399.117Z", fill: props.fillColor }) })] }));
exports.default = ArrowLeft3LightOutline;
//# sourceMappingURL=LightOutline.js.map