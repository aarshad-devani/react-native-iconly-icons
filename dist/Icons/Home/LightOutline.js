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
const HomeLightOutline = (props) => ((0, jsx_runtime_1.jsxs)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Mask, { id: "a", maskUnits: "userSpaceOnUse", x: 2, y: 1, width: 21, height: 22, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M2 1h20.5v21.505H2V1Z", fill: "#fff" }) }), (0, jsx_runtime_1.jsx)(react_native_svg_1.G, { mask: "url(#a)", children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M13.717 15.291a2.18 2.18 0 0 1 2.184 2.17v3.075c0 .257.206.463.47.47h1.906c1.502 0 2.723-1.207 2.723-2.689V9.593c-.007-.51-.25-.99-.667-1.309L13.74 3.026a2.416 2.416 0 0 0-3.011.002L4.18 8.282A1.675 1.675 0 0 0 3.5 9.61v8.707c0 1.482 1.22 2.688 2.723 2.688h1.924a.486.486 0 0 0 .49-.479c0-.058.008-.116.02-.17V17.46c0-1.189.974-2.16 2.169-2.169h2.89Zm4.56 7.214h-1.924c-1.102-.026-1.952-.89-1.952-1.969V17.46a.677.677 0 0 0-.684-.669H10.83a.677.677 0 0 0-.674.67v3.065c0 .075-.01.147-.031.215a1.99 1.99 0 0 1-1.98 1.764H6.224C3.893 22.505 2 20.626 2 18.317V9.603A3.154 3.154 0 0 1 3.259 7.1l6.535-5.245a3.912 3.912 0 0 1 4.88-.002l6.582 5.25a3.158 3.158 0 0 1 1.244 2.48v8.734c0 2.31-1.894 4.188-4.223 4.188Z", fill: props.fillColor }) })] }));
exports.default = HomeLightOutline;
//# sourceMappingURL=LightOutline.js.map