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
const TicketBulk = (props) => ((0, jsx_runtime_1.jsxs)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { opacity: 0.4, d: "M13.75 9.703v-2.02a.72.72 0 0 1-.725-.704V4.574a.577.577 0 0 0-.59-.574H5.791C3.702 4 2 5.653 2 7.683v2.433c0 .188.077.367.213.498.135.13.319.206.512.206.735 0 1.296.507 1.296 1.174 0 .697-.57 1.25-1.286 1.26-.397 0-.735.272-.735.666v2.406C2 18.356 3.702 20 5.781 20h6.654c.329 0 .59-.255.59-.573v-2.03c0-.394.329-.705.726-.705V14.87a.721.721 0 0 1-.726-.704v-3.758a.72.72 0 0 1 .726-.705", fill: props.fillColor }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { d: "M19.979 11.995c0 .695.58 1.25 1.286 1.259.396 0 .735.272.735.657v2.415C22 18.356 20.308 20 18.219 20h-3.153a.585.585 0 0 1-.59-.574v-2.03a.708.708 0 0 0-.726-.704V14.87c.407 0 .726-.32.726-.704v-3.758a.714.714 0 0 0-.726-.705v-2.02c.407 0 .726-.32.726-.705V4.574c0-.32.27-.574.59-.574h3.153C20.307 4 22 5.644 22 7.673v2.368a.693.693 0 0 1-.213.498.735.735 0 0 1-.512.206c-.716 0-1.296.565-1.296 1.25", fill: props.fillColor })] }));
exports.default = TicketBulk;
//# sourceMappingURL=Bulk.js.map