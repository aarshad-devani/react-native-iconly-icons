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
const VideoBold = (props) => ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M6.113 4.5h5.792c2.422 0 4.113 1.669 4.113 4.06v6.88c0 2.391-1.69 4.06-4.113 4.06H6.113C3.691 19.5 2 17.831 2 15.44V8.56C2 6.17 3.691 4.5 6.113 4.5Zm13.845 2.379c.439-.223.954-.2 1.373.064.419.263.669.72.669 1.22v7.675c0 .5-.25.957-.669 1.22a1.385 1.385 0 0 1-1.374.063l-1.481-.748a1.623 1.623 0 0 1-.888-1.457V9.083c0-.621.34-1.18.888-1.456l1.482-.748Z", fill: props.fillColor }) }));
exports.default = VideoBold;
//# sourceMappingURL=Bold.js.map