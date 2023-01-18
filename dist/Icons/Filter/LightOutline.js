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
const FilterLightOutline = (props) => ((0, jsx_runtime_1.jsxs)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M10.08 18.593H3.78a.75.75 0 0 1 0-1.5h6.301a.75.75 0 0 1 0 1.5M19.19 8.9h-6.3a.75.75 0 0 1 0-1.5h6.3a.75.75 0 0 1 0 1.5", fill: props.fillColor }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Mask, { id: "a", maskUnits: "userSpaceOnUse", x: 3, y: 5, width: 7, height: 7, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M3 5h6.226v6.192H3V5Z", fill: "#fff" }) }), (0, jsx_runtime_1.jsx)(react_native_svg_1.G, { mask: "url(#a)", children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M6.113 6.5c-.89 0-1.613.716-1.613 1.597 0 .88.724 1.595 1.613 1.595.89 0 1.613-.715 1.613-1.595 0-.881-.723-1.597-1.613-1.597m0 4.692C4.397 11.192 3 9.804 3 8.097A3.11 3.11 0 0 1 6.113 5a3.109 3.109 0 0 1 3.113 3.097c0 1.707-1.396 3.095-3.113 3.095", fill: props.fillColor }) }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M17.388 16.208c-.89 0-1.614.716-1.614 1.596 0 .881.724 1.596 1.614 1.596.889 0 1.612-.715 1.612-1.596 0-.88-.723-1.596-1.612-1.596m0 4.692c-1.717 0-3.114-1.389-3.114-3.096s1.397-3.096 3.114-3.096a3.108 3.108 0 0 1 3.112 3.096 3.108 3.108 0 0 1-3.112 3.096", fill: props.fillColor })] }));
exports.default = FilterLightOutline;
//# sourceMappingURL=LightOutline.js.map