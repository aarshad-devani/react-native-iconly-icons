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
const HideBold = (props) => ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M9.803 15.253c.625.423 1.386.679 2.196.679 2.146 0 3.893-1.762 3.893-3.928 0-.817-.254-1.585-.673-2.215l-1.064 1.073c.176.334.273.728.273 1.142 0 1.348-1.093 2.451-2.43 2.451-.41 0-.8-.098-1.131-.275l-1.064 1.073ZM18.43 6.55c1.415 1.3 2.615 3.051 3.513 5.158a.75.75 0 0 1 0 .581c-2.089 4.903-5.806 7.837-9.943 7.837h-.01c-1.883 0-3.688-.62-5.279-1.753l-1.893 1.91a.72.72 0 0 1-.517.217.705.705 0 0 1-.517-.217.736.736 0 0 1-.088-.925l.03-.04 14.43-14.56c.02-.02.04-.04.05-.06.019-.02.038-.039.048-.058l.917-.926a.731.731 0 0 1 1.035 0 .73.73 0 0 1 0 1.044L18.429 6.55Zm-10.33 5.458c0 .256.029.512.068.748l-3.61 3.642c-.976-1.142-1.825-2.52-2.498-4.105a.75.75 0 0 1 0-.58c2.088-4.904 5.805-7.828 9.933-7.828h.01c1.395 0 2.75.335 4 .965l-3.26 3.288a4.515 4.515 0 0 0-.74-.069c-2.157 0-3.904 1.763-3.904 3.938Z", fill: props.fillColor }) }));
exports.default = HideBold;
//# sourceMappingURL=Bold.js.map