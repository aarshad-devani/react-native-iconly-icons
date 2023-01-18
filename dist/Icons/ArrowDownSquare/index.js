"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrowDownSquareTwotone = exports.ArrowDownSquareLightOutline = exports.ArrowDownSquareLight = exports.ArrowDownSquareCurved = exports.ArrowDownSquareBulk = exports.ArrowDownSquareBroken = exports.ArrowDownSquareBold = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Bold_1 = __importDefault(require("./Bold"));
const Broken_1 = __importDefault(require("./Broken"));
const Bulk_1 = __importDefault(require("./Bulk"));
const Curved_1 = __importDefault(require("./Curved"));
const Light_1 = __importDefault(require("./Light"));
const LightOutline_1 = __importDefault(require("./LightOutline"));
const Twotone_1 = __importDefault(require("./Twotone"));
const ArrowDownSquare = (props) => {
    switch (props.variant) {
        default:
        case "Bold": return (0, jsx_runtime_1.jsx)(Bold_1.default, { fillColor: props.fillColor ?? "#212121", ...props });
        case "Broken": return (0, jsx_runtime_1.jsx)(Broken_1.default, { fillColor: props.fillColor ?? "#212121", ...props });
        case "Bulk": return (0, jsx_runtime_1.jsx)(Bulk_1.default, { fillColor: props.fillColor ?? "#212121", ...props });
        case "Curved": return (0, jsx_runtime_1.jsx)(Curved_1.default, { fillColor: props.fillColor ?? "#212121", ...props });
        case "Light": return (0, jsx_runtime_1.jsx)(Light_1.default, { fillColor: props.fillColor ?? "#212121", ...props });
        case "LightOutline": return (0, jsx_runtime_1.jsx)(LightOutline_1.default, { fillColor: props.fillColor ?? "#212121", ...props });
        case "Twotone": return (0, jsx_runtime_1.jsx)(Twotone_1.default, { fillColor: props.fillColor ?? "#212121", ...props });
    }
};
exports.default = ArrowDownSquare;
exports.ArrowDownSquareBold = Bold_1.default;
exports.ArrowDownSquareBroken = Broken_1.default;
exports.ArrowDownSquareBulk = Bulk_1.default;
exports.ArrowDownSquareCurved = Curved_1.default;
exports.ArrowDownSquareLight = Light_1.default;
exports.ArrowDownSquareLightOutline = LightOutline_1.default;
exports.ArrowDownSquareTwotone = Twotone_1.default;
//# sourceMappingURL=index.js.map