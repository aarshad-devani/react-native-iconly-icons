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
const ChartBulk = (props) => ((0, jsx_runtime_1.jsxs)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { opacity: 0.4, d: "M16.676 2H7.333C3.93 2 2 3.929 2 7.333v9.334C2 20.07 3.929 22 7.333 22h9.343C20.08 22 22 20.071 22 16.667V7.333C22 3.93 20.08 2 16.676 2", fill: props.fillColor }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { d: "M7.369 9.369a.833.833 0 0 0-.827.835v6.872a.83.83 0 0 0 1.662 0v-6.872a.835.835 0 0 0-.835-.835M12.035 6.089a.833.833 0 0 0-.826.835v10.152a.83.83 0 0 0 1.662 0V6.924a.835.835 0 0 0-.836-.835M16.64 12.996a.835.835 0 0 0-.836.835v3.245a.83.83 0 0 0 1.663 0V13.83a.833.833 0 0 0-.827-.835", fill: props.fillColor })] }));
exports.default = ChartBulk;
//# sourceMappingURL=Bulk.js.map