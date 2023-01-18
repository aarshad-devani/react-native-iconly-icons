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
const UploadBulk = (props) => ((0, jsx_runtime_1.jsxs)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { opacity: 0.4, d: "M6.447 22C3.996 22 2 19.97 2 17.476v-4.962C2 10.025 3.99 8 6.437 8h11.116C20.005 8 22 10.03 22 12.526v4.959C22 19.975 20.01 22 17.563 22H6.447Z", fill: props.fillColor }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { d: "m11.455 2.221-2.91 2.846c-.3.294-.3.767.003 1.06a.785.785 0 0 0 1.089-.002l1.593-1.559V14.451c0 .414.345.75.77.75a.76.76 0 0 0 .77-.75V4.566l1.593 1.56c.3.293.787.294 1.089.001a.74.74 0 0 0 .227-.531.74.74 0 0 0-.225-.53l-2.908-2.845a.783.783 0 0 0-1.091 0", fill: props.fillColor })] }));
exports.default = UploadBulk;
//# sourceMappingURL=Bulk.js.map