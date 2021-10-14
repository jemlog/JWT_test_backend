"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenTest = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function tokenTest(req, res, next) {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer')) {
        const token = authHeader.split(' ')[1];
        try {
            const decoded = jsonwebtoken_1.default.verify(token, 'jemin');
            return next();
        }
        catch (error) {
            if (error.name === "TokenExpiredError") {
                return res.status(401).json({ code: 400, message: '만료된 토큰입니다 재발급이 필요합니다.', success: false });
            }
            else {
                return res.status(401).json({ code: 304, message: '토큰 위조의 위험이 있습니다.', success: false });
            }
        }
    }
    else {
        return res.status(401).json({ code: 403, message: '로그인 되지 않은 유저입니다.', success: false });
    }
}
exports.tokenTest = tokenTest;
//# sourceMappingURL=auth.js.map