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
const ActivityBold = (props) => ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M17.18 4.41c0-1.33 1.08-2.41 2.41-2.41S22 3.08 22 4.41s-1.08 2.41-2.41 2.41-2.41-1.08-2.41-2.41Zm-3.85 10.35 2.89-3.73-.04.02c.16-.22.19-.5.08-.75a.737.737 0 0 0-.61-.44.768.768 0 0 0-.7.31l-2.42 3.13-2.77-2.18a.79.79 0 0 0-.57-.16.775.775 0 0 0-.5.3l-2.96 3.85-.06.09a.747.747 0 0 0 .21.95c.14.09.29.15.46.15.23.01.45-.11.59-.3l2.51-3.23 2.85 2.14.09.06c.32.17.72.09.95-.21Zm2.12-10.98c-.04.25-.06.5-.06.75 0 2.25 1.82 4.07 4.06 4.07.25 0 .49-.03.74-.07v8.07c0 3.39-2 5.4-5.4 5.4H7.4C4 22 2 19.99 2 16.6V9.2c0-3.4 2-5.42 5.4-5.42h8.05Z", fill: props.fillColor }) }));
exports.default = ActivityBold;
//# sourceMappingURL=Bold.js.map