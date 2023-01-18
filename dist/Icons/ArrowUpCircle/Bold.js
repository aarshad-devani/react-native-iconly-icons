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
const ArrowUpCircleBold = (props) => ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2c5.52 0 10 4.49 10 10l-.004.28C21.848 17.67 17.426 22 12 22 6.49 22 2 17.52 2 12 2 6.49 6.49 2 12 2ZM8 13.98c.3.29.77.29 1.06-.01L12 11.02l2.94 2.95c.29.3.77.3 1.06.01.3-.3.3-.77 0-1.06l-3.47-3.49a.75.75 0 0 0-1.06 0L8 12.92c-.15.14-.22.33-.22.52 0 .2.07.39.22.54Z", fill: props.fillColor }) }));
exports.default = ArrowUpCircleBold;
//# sourceMappingURL=Bold.js.map