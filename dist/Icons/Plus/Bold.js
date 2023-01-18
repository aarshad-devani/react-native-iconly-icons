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
const PlusBold = (props) => ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M7.33 2h9.33C20.06 2 22 3.92 22 7.33v9.34c0 3.39-1.93 5.33-5.33 5.33H7.33C3.92 22 2 20.06 2 16.67V7.33C2 3.92 3.92 2 7.33 2Zm5.49 10.83h2.84c.46-.01.83-.38.83-.84 0-.46-.37-.83-.83-.83h-2.84V8.34c0-.46-.37-.83-.83-.83-.46 0-.83.37-.83.83v2.82H8.33c-.22 0-.43.09-.59.24a.866.866 0 0 0-.24.59c0 .46.37.83.83.84h2.83v2.83c0 .46.37.83.83.83.46 0 .83-.37.83-.83v-2.83Z", fill: props.fillColor }) }));
exports.default = PlusBold;
//# sourceMappingURL=Bold.js.map