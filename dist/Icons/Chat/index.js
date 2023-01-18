"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatTwotone = exports.ChatLightOutline = exports.ChatLight = exports.ChatCurved = exports.ChatBulk = exports.ChatBroken = exports.ChatBold = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Bold_1 = __importDefault(require("./Bold"));
const Broken_1 = __importDefault(require("./Broken"));
const Bulk_1 = __importDefault(require("./Bulk"));
const Curved_1 = __importDefault(require("./Curved"));
const Light_1 = __importDefault(require("./Light"));
const LightOutline_1 = __importDefault(require("./LightOutline"));
const Twotone_1 = __importDefault(require("./Twotone"));
const Chat = (props) => {
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
exports.default = Chat;
exports.ChatBold = Bold_1.default;
exports.ChatBroken = Broken_1.default;
exports.ChatBulk = Bulk_1.default;
exports.ChatCurved = Curved_1.default;
exports.ChatLight = Light_1.default;
exports.ChatLightOutline = LightOutline_1.default;
exports.ChatTwotone = Twotone_1.default;
//# sourceMappingURL=index.js.map