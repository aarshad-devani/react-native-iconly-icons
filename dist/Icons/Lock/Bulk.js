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
const LockBulk = (props) => ((0, jsx_runtime_1.jsxs)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M7.769 8.714h8.462c2.358 0 4.269 1.87 4.269 4.175v4.936c0 2.306-1.911 4.175-4.269 4.175H7.77C5.41 22 3.5 20.13 3.5 17.825V12.89c0-2.306 1.911-4.175 4.269-4.175Zm4.226 8.615a.88.88 0 0 0 .894-.874v-2.206a.878.878 0 0 0-.894-.865.875.875 0 0 0-.884.865v2.206c0 .487.396.875.884.875Z", fill: props.fillColor }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { opacity: 0.4, d: "M17.523 7.396v1.47c-.356-.099-.732-.148-1.118-.148h-.66V7.396c0-2.017-1.677-3.657-3.74-3.657s-3.74 1.63-3.75 3.637v1.342h-.65c-.396 0-.772.05-1.128.159V7.396C6.487 4.415 8.957 2 11.985 2c3.069 0 5.538 2.415 5.538 5.396", fill: props.fillColor })] }));
exports.default = LockBulk;
//# sourceMappingURL=Bulk.js.map