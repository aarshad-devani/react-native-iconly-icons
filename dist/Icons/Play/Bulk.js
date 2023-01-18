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
const PlayBulk = (props) => ((0, jsx_runtime_1.jsxs)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { opacity: 0.4, d: "M22 12.005C22 17.514 17.512 22 12 22S2 17.514 2 12.005C2 6.486 6.488 2 12 2s10 4.486 10 10.005", fill: props.fillColor }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { d: "M16 12.005c0 .253-.08.506-.239.71-.03.04-.169.204-.278.31l-.06.059c-.835.885-2.913 2.217-3.967 2.644 0 .01-.627.263-.925.272h-.04c-.457 0-.884-.252-1.103-.66-.12-.225-.229-.876-.239-.885-.09-.584-.149-1.478-.149-2.46 0-1.03.06-1.963.169-2.537 0-.01.11-.535.179-.71.11-.251.308-.466.557-.602.199-.096.408-.146.626-.146.229.01.656.156.825.224 1.114.427 3.242 1.827 4.057 2.682.14.136.289.303.329.34.168.214.258.477.258.759", fill: props.fillColor })] }));
exports.default = PlayBulk;
//# sourceMappingURL=Bulk.js.map