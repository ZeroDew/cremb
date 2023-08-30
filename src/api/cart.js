import {
    requestGet,
    requestPost
} from "@/utils/request";


const cartInfo = (data) => requestGet('/front/cart/list?page=1&limit=20&isValid=true', data);
const addCar = (cartNum, isNew, productAttrUnique, productId, data) => requestPost(`front/cart/save`, {
    cartNum,
    isNew,
    productAttrUnique,
    productId,
    data
})

export {
    cartInfo,
    addCar
}