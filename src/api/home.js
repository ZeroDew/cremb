import {
    requestGet,
    requestPost
} from "@/utils/request";

const getIndexData = () => requestGet('front/index') //首页数据
const getCoupons = () => requestGet('front/coupons?page=1&limit=6') //优惠券
const getCombination = () => requestGet('front/combination/index') //拼团惠
const getLeaderBoard = () => requestGet('front/product/leaderboard') //排行榜
const getGood = (type) => requestGet(`front/index/product/${type}?page=1&limit=6`) //商品
const getSeckill = () => requestGet('/front/seckill/index') //秒杀
const getDetail = (id) => requestGet(`front/product/detail/${id}?type=normal`) //商品详情
const getProduce = (page, limit) => requestGet(`front/index/product/1/?page=${page}&limit=${limit}`);

const getCoupon = (type, data) => requestGet(`front/coupon/list?page=1&limit=20&type=${type}`, data) /* 获取自己优惠券 */

export {
    getIndexData,
    getCoupons,
    getCombination,
    getLeaderBoard,
    getGood,
    getSeckill,
    getDetail,
    getProduce,
    getCoupon
}