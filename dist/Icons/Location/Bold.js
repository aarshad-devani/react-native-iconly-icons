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
const LocationBold = (props) => ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M3.5 10.318C3.5 5.718 7.344 2 11.993 2c4.663 0 8.507 3.718 8.507 8.318 0 2.318-.843 4.47-2.23 6.294a22.063 22.063 0 0 1-5.541 5.14c-.486.318-.925.342-1.459 0a21.64 21.64 0 0 1-5.54-5.14c-1.388-1.824-2.23-3.976-2.23-6.294Zm5.694.259c0 1.54 1.258 2.753 2.8 2.753 1.542 0 2.812-1.212 2.812-2.753 0-1.53-1.27-2.8-2.813-2.8a2.814 2.814 0 0 0-2.799 2.8Z", fill: props.fillColor }) }));
exports.default = LocationBold;
//# sourceMappingURL=Bold.js.map