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
const VoiceBulk = (props) => ((0, jsx_runtime_1.jsxs)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { opacity: 0.4, d: "M19.531 9.826a.962.962 0 0 0-.968.956c0 3.573-2.944 6.48-6.562 6.48-3.62 0-6.564-2.907-6.564-6.48a.962.962 0 0 0-.968-.956.962.962 0 0 0-.969.956c0 4.305 3.3 7.86 7.532 8.337v1.924c0 .528.433.957.969.957a.963.963 0 0 0 .968-.957V19.12c4.232-.478 7.531-4.032 7.531-8.337a.962.962 0 0 0-.969-.956", fill: props.fillColor }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { d: "M11.825 15.217h.35c2.403 0 4.352-1.924 4.352-4.296V6.297c0-2.374-1.95-4.297-4.352-4.297h-.35C9.422 2 7.473 3.923 7.473 6.297v4.624c0 2.372 1.95 4.296 4.352 4.296", fill: props.fillColor })] }));
exports.default = VoiceBulk;
//# sourceMappingURL=Bulk.js.map