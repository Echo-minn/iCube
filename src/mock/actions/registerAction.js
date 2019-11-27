import {userConstants} from "./constants";
import {userService} from "../service/userServices";

export function receiveInfo(type, id, callback){
    return dispatch=>{
        dispatch({type:userConstants.REGISTER_REQUEST});
        userService.register(type,id,(values)=>{
            if(typeof callback ==="function"){
                callback()
            }
            dispatch({type:userConstants.REGISTER_SUCCESS,response:values})
        },()=>{
            dispatch({type:userConstants.REGISTER_FAILURE})
            //todo  add more things
        })
    }
}
