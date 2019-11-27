export const baseConfigs = {
    baseURL : 'http://47.110.251.127:8000',
    url : '/',
    method:'post',
    params: {

    },
    headers:{
        'X-Requested-With': 'XMLHttpRequest',
    },
    data: {
        phone:'',
        password:''
    },
    timeout: '10000',

    responseType:'json',

    maxContentLength: 2000,

    validateStatus(status) {
        return status >= 200 && status < 300 // default
    },
};

export const header = {

};
