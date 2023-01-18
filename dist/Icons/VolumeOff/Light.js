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
const VolumeOffLight = (props) => ((0, jsx_runtime_1.jsxs)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { clipRule: "evenodd", d: "m14.533 9.467-6.82 6.82c-.177-.103-.345-.168-.494-.177-1.297-.094-1.8.056-2.51-.55-.764-.654-.708-2.399-.708-3.677s-.056-3.022.709-3.675c.709-.607 1.212-.448 2.51-.55 1.296-.103 4.038-4.06 6.156-2.809.858.7 1.091 2.006 1.157 4.618Z", stroke: props.fillColor, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { d: "M14.533 13.917c-.037 2.874-.261 4.273-1.157 5-.98.58-2.09.047-3.134-.708M4.001 20l3.713-3.713 6.82-6.82L20 4", stroke: props.fillColor, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })] }));
exports.default = VolumeOffLight;
//# sourceMappingURL=Light.js.map