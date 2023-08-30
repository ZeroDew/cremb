import {
    requestGet,
    requestPost
} from "@/utils/request";

const getUserInfo = (data) => requestGet('https://apif.java.crmeb.net/api/front/menu/user', data)

export {
    getUserInfo
}