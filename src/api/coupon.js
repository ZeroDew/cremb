/* 优惠券接口 */

import {
    requestGet,
    requestPost
} from "@/utils/request";

const getCoupon = (info) => requestGet('front/coupon/list?page=1&limit=20&type=usable', info)

export {
    getCoupon
}