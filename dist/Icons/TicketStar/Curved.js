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
const TicketStarCurved = (props) => ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: (0, jsx_runtime_1.jsxs)(react_native_svg_1.G, { clipRule: "evenodd", stroke: props.fillColor, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { d: "M21.44 13.994c-2.661 0-2.661-4.114 0-4.114 0-4.768 0-6.47-9.395-6.47S2.65 5.113 2.65 9.88c2.66 0 2.66 4.114 0 4.114 0 4.768 0 6.47 9.395 6.47s9.395-1.702 9.395-6.47Z" }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { d: "M12.045 9.171c-.683 0-.748 1.09-1.154 1.475-.407.385-1.67-.055-1.846.628-.175.684.962.916 1.103 1.503.14.586-.554 1.41.039 1.822.594.409 1.233-.519 1.858-.519s1.264.928 1.858.519c.594-.412-.101-1.236.039-1.822.14-.587 1.278-.819 1.103-1.503-.176-.683-1.44-.243-1.846-.628-.406-.385-.471-1.475-1.154-1.475Z" })] }) }));
exports.default = TicketStarCurved;
//# sourceMappingURL=Curved.js.map