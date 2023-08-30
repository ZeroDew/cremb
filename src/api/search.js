import {
    requestGet,
    requestPost
} from "@/utils/request";

const getKeyword = () => requestGet('front/search/keyword')
const getSearchGood = (keyword) => requestGet(`front/products?keyword=${keyword}&page=1&limit=8`)

export {
    getKeyword,
    getSearchGood
}