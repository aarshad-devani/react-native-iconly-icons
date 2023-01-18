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
const VoiceBold = (props) => ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M12.175 15.217h-.35c-2.403 0-4.351-1.924-4.351-4.297V6.297C7.474 3.924 9.422 2 11.825 2h.35c2.403 0 4.352 1.924 4.352 4.297v4.623c0 2.373-1.949 4.297-4.352 4.297Zm6.388-4.434c0-.53.434-.957.968-.957.535 0 .969.428.969.957 0 4.304-3.3 7.857-7.53 8.335v1.925A.963.963 0 0 1 12 22a.962.962 0 0 1-.968-.957v-1.925C6.799 18.64 3.5 15.087 3.5 10.783c0-.53.434-.957.969-.957.534 0 .968.428.968.957 0 3.573 2.944 6.48 6.564 6.48 3.618 0 6.562-2.907 6.562-6.48Z", fill: props.fillColor }) }));
exports.default = VoiceBold;
//# sourceMappingURL=Bold.js.map