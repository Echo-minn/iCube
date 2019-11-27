import axios from "axios"
import {baseConfigs} from "./configs";

export function SubmitData(params,type,callback_success,callback_failure){
    let configsPara,header,URL;

    if(type==='updateInfo') {
        header = {
            'X-Requested-With': 'XMLHttpRequestXM',
            'X-Auth-Token': localStorage.getItem('token'),
        };
        URL = 'user/info';

        // eslint-disable-next-line no-unused-expressions
        configsPara = {...baseConfigs.params,
            'eMail': params[0],
            'phone':params[1],
            'nickName':params[2],
            'password':params[3]},
            console.log(configsPara)

    }
    axios({...baseConfigs,params:configsPara,url:URL,headers:header,timeout:4000})
        .then((response)=>{
            if(response.data.code>=200&&response.data.code<=300){
                callback_success()
            }else{
                callback_failure("get code:",response.data.code)
            }
        })
        .catch((e)=>{
            callback_failure(e)
        })

}
