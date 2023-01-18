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
const ChartBroken = (props) => ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M22 10.575a.765.765 0 0 1-.765.765h-.009a.756.756 0 0 1-.756-.774V8.253c0-3.043-1.68-4.723-4.723-4.723H8.253c-3.052 0-4.723 1.68-4.723 4.723v7.502c0 3.044 1.68 4.715 4.723 4.715h7.494c3.052 0 4.723-1.68 4.723-4.714a.765.765 0 1 1 1.53 0C22 19.607 19.608 22 15.755 22H8.253C4.393 22 2 19.608 2 15.755V8.253C2 4.393 4.392 2 8.253 2h7.494C19.59 2 22 4.392 22 8.253v2.322ZM6.96 16.688V10.285a.756.756 0 0 1 .792-.73.765.765 0 0 1 .739.792v6.394a.766.766 0 0 1-1.53-.053Zm4.31-9.367v9.376a.765.765 0 0 0 1.53 0V7.32a.765.765 0 0 0-1.53 0Zm4.24 9.367v-2.99a.765.765 0 0 1 1.53 0v2.99a.765.765 0 0 1-1.53 0Z", fill: props.fillColor }) }));
exports.default = ChartBroken;
//# sourceMappingURL=Broken.js.map