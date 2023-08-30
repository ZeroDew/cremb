import axios from "axios";

const instance = axios.create({
    baseURL: ' https://apif.java.crmeb.net/api', //根路径
    timeout: 3000
})

instance.interceptors.request.use(config => {
    let token = localStorage.getItem('token');
    if (token) {
        config.headers['authori-zation'] = token
    }
    return config
}, err => {
    console.log(err);
})

instance.interceptors.response.use(res => {
    return res.data
}, err => {
    console.log(err);
})

const requestGet = (url, data) => {
    return new Promise((resolve, reject) => {
        instance.get(url, {
            params: data
        }).then(res => resolve(res)).catch(err => reject(err))
    })
}
const requestPost = (url, data = null) => {
    return new Promise((resolve, reject) => {
        instance.post(url, data).then(res => resolve(res)).catch(err => reject(err))
    })
}

export {
    requestGet,
    requestPost
}