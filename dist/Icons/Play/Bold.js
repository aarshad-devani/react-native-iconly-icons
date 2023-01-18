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
const PlayBold = (props) => ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M2 12.006C2 6.486 6.488 2 12 2s10 4.486 10 10.006C22 17.514 17.512 22 12 22S2 17.514 2 12.006Zm13.668 1.012c.106-.106.241-.27.27-.309.155-.202.232-.453.232-.703 0-.281-.087-.542-.251-.754a3.722 3.722 0 0 1-.074-.08c-.064-.069-.157-.17-.245-.257-.791-.85-2.857-2.239-3.938-2.663-.164-.067-.579-.212-.801-.222-.212 0-.415.048-.608.145a1.251 1.251 0 0 0-.54.598c-.068.173-.174.694-.174.704-.107.57-.164 1.495-.164 2.518 0 .976.057 1.862.144 2.441.003.002.011.044.024.108.04.196.12.603.208.77.212.405.627.656 1.071.656h.039c.29-.01.898-.26.898-.27 1.023-.425 3.04-1.746 3.851-2.624l.058-.058Z", fill: props.fillColor }) }));
exports.default = PlayBold;
//# sourceMappingURL=Bold.js.map