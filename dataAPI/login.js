import axios from 'axios';
import {base} from './config';
import cookie from 'react-cookies';

import {message} from "antd";

export default {
    //login (POST)
    async loginApi(params){   //我习惯在接口命名时，后面加上Api，这样容易区分
        return await axios.post(`${base}/api/demo/login`,params).then((res)=>{  //登录接口不需要请求头，不仅如此，请求头里的cookie还是由登陆接口的获取的，存储下来后给其他接口使用
            return res.data;
        }).catch((error)=>{
            message.error("服务器出错")
        })
    },
    //***登录后获取用户信息 （GET）***
    async getUserInfoApi(params){
        return await axios.get(`${base}/api/demo/info`,{   //get请求只需要两个参数，所以params和headers放在了一起
            params,
            headers:{
                "token":cookie.load("usertoken")   //这里的cookie需要在用户登陆后，将接口的返回值存进cookie里，例子在第8步里
            }
        }).then((res)=>{
            return res.data;
        }).catch((error)=>{
            message.error("服务器出错")
        })
    },
    //***修改密码 （POST）***
    async changePasswordApi(params){
        return await axios.post(`${base}/api/demo/modifycode`,params,{
            headers:{
                "token":cookie.load("usertoken")
            }
        }).then((res)=>{
            return res.data;
        }).catch((error)=>{
            message.error("服务器出错")
        })
    },
    //***删除用户 (DELETE) ***
    async DeleteUserApi(params){
        return await axios.delete(`${base}/api/demo/info${params.id}`,{   //删除接口需要获取当前数据的id才可进行删除
            params,
            headers:{
                "token":cookie.load("usertoken"),
            }
        }).then((res)=>{
            return res.data
        }).catch((error)=>{
            message.error("服务器出错")
        })
    }

}
