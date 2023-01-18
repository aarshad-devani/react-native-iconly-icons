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
const AddUserBold = (props) => ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M9.5 12.554c2.755 0 4.963-2.237 4.963-5.027S12.255 2.5 9.5 2.5 4.537 4.737 4.537 7.527s2.208 5.027 4.963 5.027Zm0 2.461c-4.046 0-7.5.647-7.5 3.231C2 20.83 5.433 21.5 9.5 21.5c4.045 0 7.5-.647 7.5-3.231 0-2.585-3.433-3.254-7.5-3.254Zm10.398-5.427H21.1c.495 0 .899.41.899.912a.907.907 0 0 1-.899.911h-1.203v1.177a.906.906 0 0 1-.899.912.907.907 0 0 1-.899-.912v-1.177h-1.201A.906.906 0 0 1 16 10.5c0-.502.403-.911.899-.911H18.1V8.412c0-.503.404-.912.899-.912.496 0 .899.41.899.912v1.176Z", fill: props.fillColor }) }));
exports.default = AddUserBold;
//# sourceMappingURL=Bold.js.map