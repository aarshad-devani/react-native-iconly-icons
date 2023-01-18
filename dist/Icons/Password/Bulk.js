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
const PasswordBulk = (props) => ((0, jsx_runtime_1.jsxs)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { opacity: 0.4, d: "M16.334 2H7.665C4.276 2 2 4.378 2 7.917v8.167C2 19.622 4.276 22 7.665 22h8.669C19.723 22 22 19.622 22 16.084V7.917C22 4.377 19.724 2 16.334 2", fill: props.fillColor }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M11.314 11.248h5.7c.41 0 .75.34.75.75v1.85c0 .42-.34.75-.75.75-.42 0-.75-.33-.75-.75v-1.1h-1.33v1.1c0 .42-.34.75-.75.75-.42 0-.75-.33-.75-.75v-1.1h-2.12a2.58 2.58 0 0 1-2.47 1.85c-1.44 0-2.61-1.16-2.61-2.6 0-1.43 1.17-2.6 2.61-2.6 1.17 0 2.15.78 2.47 1.85Zm-3.58.75a1.105 1.105 0 0 0 2.21 0 1.105 1.105 0 0 0-2.21 0Z", fill: props.fillColor })] }));
exports.default = PasswordBulk;
//# sourceMappingURL=Bulk.js.map