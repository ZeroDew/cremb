import {
    requestGet
} from "@/utils/request";

const getInfo = () => requestGet('front/article/hot/list')

export {
    getInfo
}