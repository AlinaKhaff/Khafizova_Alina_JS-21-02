"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../utils/common");
class UserMapper {
    static getConvertUsersList(userList) {
        const data = userList.data.map((item) => this.getConvertUserPreview(item));
        const { page, limit, total } = userList;
        return { data, page, limit, total };
    }
    static getConvertUserPreview(user) {
        return {
            id: user.id,
            fullName: (0, common_1.getConvertUserFullName)(user.firstName, user.lastName),
            picture: user.picture,
            title: user.title
        };
    }
    static getConvertUser(user) {
        return {
            id: user.id,
            fullName: (0, common_1.getConvertUserFullName)(user.firstName, user.lastName),
            gender: user.gender,
            title: user.title,
            registerDate: user.registerDate && (0, common_1.getDate)(user.registerDate),
            dateOfBirth: user.dateOfBirth && (0, common_1.getDate)(user.dateOfBirth),
            dateOfBirthOriginal: user.dateOfBirth,
            email: user.email,
            phone: user.phone,
            picture: user.picture
        };
    }
    static getConvertUserAuth(user) {
        return {
            id: user.id,
            firstName: user.firstName,
            picture: user.picture
        };
    }
}
exports.default = UserMapper;
