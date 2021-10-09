"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const router = express_1.default.Router();
router.get('/hello', auth_1.tokenTest, (req, res) => {
    res.json({ code: 200, message: '나는 접속된 유저입니다.', success: true });
});
exports.default = router;
//# sourceMappingURL=index.js.map