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
const SendLightOutline = (props) => ((0, jsx_runtime_1.jsxs)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Mask, { id: "a", maskUnits: "userSpaceOnUse", x: 2, y: 3, width: 20, height: 20, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M2 3h19.499v19.5H2V3Z", fill: "#fff" }) }), (0, jsx_runtime_1.jsx)(react_native_svg_1.G, { mask: "url(#a)", children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "m10.805 14.818 3.657 5.933c.16.26.41.257.51.243a.508.508 0 0 0 .433-.371l4.573-15.445a.522.522 0 0 0-.133-.525.512.512 0 0 0-.512-.132L3.877 9.047a.51.51 0 0 0-.371.433.515.515 0 0 0 .24.52l6.002 3.754 5.302-5.358a.751.751 0 0 1 1.067 1.055l-5.312 5.367Zm4.09 7.682a1.997 1.997 0 0 1-1.71-.962l-3.877-6.291-6.356-3.975a2.004 2.004 0 0 1-.932-1.996 2 2 0 0 1 1.435-1.668L18.91 3.082a2.02 2.02 0 0 1 2.504 2.522l-4.573 15.444a1.997 1.997 0 0 1-1.67 1.433 2.173 2.173 0 0 1-.277.019Z", fill: props.fillColor }) })] }));
exports.default = SendLightOutline;
//# sourceMappingURL=LightOutline.js.map