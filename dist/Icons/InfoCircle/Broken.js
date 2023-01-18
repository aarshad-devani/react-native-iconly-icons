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
const InfoCircleBroken = (props) => ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M2 12C2 6.485 6.486 2 12 2s10 4.485 10 10c0 5.514-4.486 10-10 10a9.94 9.94 0 0 1-7.927-3.902.727.727 0 1 1 1.152-.888A8.493 8.493 0 0 0 12 20.546c4.712 0 8.546-3.833 8.546-8.546 0-4.712-3.834-8.546-8.546-8.546S3.454 7.288 3.454 12c0 .438.033.873.098 1.299a.728.728 0 0 1-1.437.22A10.1 10.1 0 0 1 2 11.999Zm10-4.546a.75.75 0 0 0-.75.75v4.42a.75.75 0 0 0 1.5 0v-4.42a.75.75 0 0 0-.75-.75Zm.01 7.592H12a.746.746 0 0 0-.745.75c0 .414.341.75.755.75a.75.75 0 0 0 0-1.5Z", fill: props.fillColor }) }));
exports.default = InfoCircleBroken;
//# sourceMappingURL=Broken.js.map