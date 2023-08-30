import {
    Toast
} from "vant";



const notLogin = (isLogin, callback1 = null, callback2 = null) => {
    if (isLogin) {
        Toast.loading()
        setTimeout(() => {
            Toast.clear()
            callback1()
        }, 400);
    } else {
        Toast.fail('请先登录');
        setTimeout(() => {
            Toast.clear()
            callback2()
        }, 400);
    }
}


export default notLogin