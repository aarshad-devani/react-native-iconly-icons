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
const PasswordBold = (props) => ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M17.01 14.601a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H11.32A2.596 2.596 0 0 0 8.84 9.4a2.604 2.604 0 0 0-2.601 2.6 2.604 2.604 0 0 0 2.6 2.602 2.596 2.596 0 0 0 2.479-1.852h2.112v1.102a.75.75 0 0 0 1.5 0V12.75h1.33v1.102c0 .414.336.75.75.75ZM7.667 2h8.669C19.723 2 22 4.377 22 7.916v8.167C22 19.623 19.723 22 16.334 22H7.666C4.276 22 2 19.622 2 16.083V7.916C2 4.377 4.277 2 7.666 2ZM7.739 12c0-.608.495-1.102 1.102-1.102.607 0 1.102.494 1.102 1.102a1.103 1.103 0 0 1-2.204 0Z", fill: props.fillColor }) }));
exports.default = PasswordBold;
//# sourceMappingURL=Bold.js.map