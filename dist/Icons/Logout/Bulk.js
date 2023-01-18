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
const LogoutBulk = (props) => ((0, jsx_runtime_1.jsxs)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { opacity: 0.4, d: "M2 6.447C2 3.996 4.03 2 6.525 2h4.96C13.976 2 16 3.99 16 6.437v11.116C16 20.005 13.97 22 11.474 22H6.515C4.025 22 2 20.01 2 17.563V6.447Z", fill: props.fillColor }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { d: "m21.779 11.455-2.846-2.91a.736.736 0 0 0-1.06.003.785.785 0 0 0 .002 1.089l1.559 1.593H9.549a.76.76 0 0 0-.75.77c0 .426.336.77.75.77h9.885l-1.56 1.593a.785.785 0 0 0-.001 1.089.74.74 0 0 0 .531.227.74.74 0 0 0 .53-.225l2.845-2.908a.783.783 0 0 0 0-1.091", fill: props.fillColor })] }));
exports.default = LogoutBulk;
//# sourceMappingURL=Bulk.js.map