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
const LocationLightOutline = (props) => ((0, jsx_runtime_1.jsxs)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M12.25 8.5A1.751 1.751 0 1 0 14 10.251c0-.966-.784-1.751-1.75-1.751m0 5A3.253 3.253 0 0 1 9 10.251 3.254 3.254 0 0 1 12.25 7a3.254 3.254 0 0 1 3.25 3.251 3.253 3.253 0 0 1-3.25 3.249", fill: props.fillColor }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Mask, { id: "a", maskUnits: "userSpaceOnUse", x: 4, y: 2, width: 17, height: 20, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M4 2h16.5v19.5H4V2Z", fill: "#fff" }) }), (0, jsx_runtime_1.jsx)(react_native_svg_1.G, { mask: "url(#a)", children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M12.25 3.5c-3.722 0-6.75 3.057-6.75 6.813 0 4.779 5.623 9.435 6.75 9.683 1.126-.249 6.75-4.905 6.75-9.683C19 6.557 15.972 3.5 12.25 3.5Zm0 18C10.455 21.5 4 15.948 4 10.313 4 5.729 7.7 2 12.25 2c4.549 0 8.25 3.729 8.25 8.313 0 5.635-6.457 11.187-8.25 11.187Z", fill: props.fillColor }) })] }));
exports.default = LocationLightOutline;
//# sourceMappingURL=LightOutline.js.map