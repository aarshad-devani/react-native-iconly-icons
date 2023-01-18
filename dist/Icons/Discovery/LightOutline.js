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
const DiscoveryLightOutline = (props) => ((0, jsx_runtime_1.jsxs)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "m11.211 11.212-1.047 3.347 3.346-1.048 1.048-3.347-3.347 1.048Zm-2.19 5.24a.75.75 0 0 1-.716-.973l1.592-5.09a.746.746 0 0 1 .491-.491l5.09-1.593a.748.748 0 0 1 .94.939l-1.593 5.089a.75.75 0 0 1-.492.492l-5.089 1.593a.757.757 0 0 1-.224.034Z", fill: props.fillColor }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Mask, { id: "a", maskUnits: "userSpaceOnUse", x: 2, y: 2, width: 21, height: 21, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M2 2h20.722v20.722H2V2Z", fill: "#fff" }) }), (0, jsx_runtime_1.jsx)(react_native_svg_1.G, { mask: "url(#a)", children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M12.36 3.5c-4.885 0-8.86 3.976-8.86 8.861 0 4.886 3.975 8.861 8.86 8.861 4.887 0 8.862-3.975 8.862-8.861 0-4.885-3.975-8.861-8.861-8.861m0 19.222C6.648 22.722 2 18.074 2 12.361 2 6.648 6.648 2 12.36 2c5.714 0 10.362 4.648 10.362 10.361 0 5.713-4.648 10.361-10.361 10.361", fill: props.fillColor }) })] }));
exports.default = DiscoveryLightOutline;
//# sourceMappingURL=LightOutline.js.map