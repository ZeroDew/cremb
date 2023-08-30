import {
    requestGet,
    requestPost
} from "@/utils/request";

const getCategory = () => requestGet('front/category')
const getCateCont = (cid) => requestGet(`front/products?page=1&limit=10&type=1&cid=${cid}`)

export {
    getCategory,
    getCateCont
}