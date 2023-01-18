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
const LockBold = (props) => ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M17.523 7.396v1.533c1.722.538 2.977 2.097 2.977 3.96v4.936c0 2.306-1.911 4.175-4.268 4.175H7.77C5.41 22 3.5 20.13 3.5 17.825v-4.937c0-1.862 1.256-3.421 2.977-3.959V7.396C6.487 4.415 8.957 2 11.985 2c3.069 0 5.538 2.415 5.538 5.396Zm-5.518-3.657c2.063 0 3.74 1.64 3.74 3.657v1.318h-7.49V7.376c.01-2.007 1.687-3.637 3.75-3.637Zm.884 12.716a.88.88 0 0 1-.894.874.877.877 0 0 1-.884-.874v-2.206c0-.477.396-.865.884-.865.498 0 .894.388.894.865v2.206Z", fill: props.fillColor }) }));
exports.default = LockBold;
//# sourceMappingURL=Bold.js.map