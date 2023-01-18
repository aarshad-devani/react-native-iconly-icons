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
const GraphBold = (props) => ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M12.326 2.21a.824.824 0 0 1 .588-.21c4.57.138 8.39 3.456 9.083 7.89a.244.244 0 0 1 0 .08.781.781 0 0 1-.197.576.811.811 0 0 1-.555.269l-7.68.506a.917.917 0 0 1-.693-.23.88.88 0 0 1-.293-.658l-.517-7.544v-.124a.793.793 0 0 1 .264-.555ZM11.8 13.294l6.63-.41h.071c.286.005.558.121.757.323.199.202.308.473.303.753-.263 3.822-3.065 7.015-6.878 7.838-3.814.823-7.723-.923-9.595-4.284a8.215 8.215 0 0 1-1.024-3.136 5.956 5.956 0 0 1-.063-.987C2.014 9.327 4.907 5.82 8.956 4.96c.49-.092.982.152 1.196.595.105.16.133.354.145.545.07 1.074.142 2.139.214 3.2.062.913.124 1.822.184 2.732-.003.214.03.427.1.63.162.4.566.654 1.005.632Z", fill: props.fillColor }) }));
exports.default = GraphBold;
//# sourceMappingURL=Bold.js.map