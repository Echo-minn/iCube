import axios from 'axios'
import {baseConfigs} from './configs'
import { message } from 'antd';
export const userService = {
    login,
    logout,
    register,
    checkLogin,
};

function login(phone, password, callback_success,callback_failure) {
    axios({...baseConfigs,
        url:'/sign_in',params: {phone:phone,password:password},timeout: '5000'})
        .then(response=>{
            // if(response.data.statusCode===0){
            //     localStorage.setItem('token',response.data.data['X-Auth-Token'])
            //     callback_success();
            //     message.success("success!",1.0);
            // }
            console.log(response);
            if(response.data.code>=200&&response.data.code<=300){
                localStorage.setItem('token',response.data.data['X-Auth-Token'])
                callback_success();
                message.success("loading success",1.0)
            }
            else {
                callback_failure("wrong password");
                message.error("validation fails",1.0)
            }
        })//todo .then add more action
        .catch((e)=>{
            callback_failure(e);
            message.error("network problem",1.0)
        })
}

function checkLogin(token,callback_success,callback_failure) {
    axios({...baseConfigs, url: '/user/check', timeout: '4000', headers:{'X-Auth-Token': token}})
        .then((response) => {
            if (response.data.code>=200&&response.data.code<=300) {
                token = response.data["X-Auth-Token"]
                callback_success(token)
            } else {
                callback_failure("out of time")
            }
        }).catch((e) => {
        callback_failure(e.toString())
    })


}

function logout(){//todo 需要与服务器切断联系吗?

}
//type of === array/json
function register(type,id,callback_success,callback_failure){
    console.log("in register action",type,id);
    baseConfigs.url = 'company/search/findByCreditCodeContains';
    baseConfigs.params = {"creditCode":'2767'};

    axios({...baseConfigs,  timeout:"2000",method:'get'})
        .then((response)=>{
            if(response.status>=200&&response.status<=300){
                //todo save the data
                if(response.data['_embedded']['companyList']){
                    callback_success(response.data['_embedded']['companyList'][0]);
                }
            }else {
                callback_failure()
            }
        }).catch((e)=>{
        callback_failure();
    })

}
