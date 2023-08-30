import {
    requestGet,
    requestPost
} from "@/utils/request";

const login = (data) => requestPost('front/login', data);
const userInfo = (data) => requestGet('front/user', data)

export {
    login,
    userInfo
}