"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bag2Twotone = exports.Bag2Curved = exports.Bag2Bold = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Bold_1 = __importDefault(require("./Bold"));
const Curved_1 = __importDefault(require("./Curved"));
const Twotone_1 = __importDefault(require("./Twotone"));
const Bag2 = (props) => {
    switch (props.variant) {
        default:
        case "Bold": return (0, jsx_runtime_1.jsx)(Bold_1.default, { fillColor: props.fillColor ?? "#212121", ...props });
        case "Curved": return (0, jsx_runtime_1.jsx)(Curved_1.default, { fillColor: props.fillColor ?? "#212121", ...props });
        case "Twotone": return (0, jsx_runtime_1.jsx)(Twotone_1.default, { fillColor: props.fillColor ?? "#212121", ...props });
    }
};
exports.default = Bag2;
exports.Bag2Bold = Bold_1.default;
exports.Bag2Curved = Curved_1.default;
exports.Bag2Twotone = Twotone_1.default;
//# sourceMappingURL=index.js.map