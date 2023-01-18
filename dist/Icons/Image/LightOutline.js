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
const ImageLightOutline = (props) => ((0, jsx_runtime_1.jsxs)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Mask, { id: "a", maskUnits: "userSpaceOnUse", x: 2, y: 2, width: 20, height: 20, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M2 2h19.96v19.95H2V2Z", fill: "#fff" }) }), (0, jsx_runtime_1.jsx)(react_native_svg_1.G, { mask: "url(#a)", children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M7.65 3.5C5.13 3.5 3.5 5.227 3.5 7.899v8.152c0 2.673 1.63 4.399 4.15 4.399h8.65c2.527 0 4.16-1.726 4.16-4.399V7.899c0-2.672-1.633-4.399-4.16-4.399H7.65Zm8.65 18.45H7.65C4.27 21.95 2 19.579 2 16.051V7.899C2 4.371 4.27 2 7.65 2h8.65c3.386 0 5.66 2.371 5.66 5.899v8.152c0 3.528-2.274 5.899-5.66 5.899Z", fill: props.fillColor }) }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M5.282 17.18a.748.748 0 0 1-.544-1.265l1.528-1.613a2.156 2.156 0 0 1 3.037-.09l.957.972c.268.27.701.275.97.01.1-.119 2.278-2.764 2.278-2.764a2.427 2.427 0 0 1 1.648-.875 2.448 2.448 0 0 1 1.783.545c.044.034.082.069 2.279 2.324a.75.75 0 1 1-1.075 1.046s-2.049-2.104-2.195-2.245a.92.92 0 0 0-.649-.178.933.933 0 0 0-.631.337c-2.324 2.82-2.352 2.846-2.39 2.883a2.184 2.184 0 0 1-3.087-.032s-.93-.944-.946-.962c-.23-.214-.642-.2-.89.06l-1.53 1.614a.747.747 0 0 1-.543.233ZM8.558 8.129a1.004 1.004 0 1 0 .003 2.009 1.004 1.004 0 0 0-.003-2.01m0 3.51a2.507 2.507 0 0 1-2.503-2.505 2.506 2.506 0 0 1 2.504-2.504 2.509 2.509 0 0 1 2.505 2.504 2.508 2.508 0 0 1-2.505 2.505", fill: props.fillColor })] }));
exports.default = ImageLightOutline;
//# sourceMappingURL=LightOutline.js.map