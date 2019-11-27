import {userConstants} from "./constants";
import { userService } from "../service/userServices";

export const loginActions = {
    login,
    checkLogin,
    logout,
};

//todo  改成之间返回对象的action
function login(phone,password,callback){
    function request() { return{type:userConstants.LOGIN_REQUEST} }
    function success() { return{type:userConstants.LOGIN_SUCCESS} }
    function failure(error) { return{type:userConstants.LOGIN_FAILURE,error} }

    return dispatch=>{
        dispatch(request());
        userService.login(phone,password, ()=>{
                if (typeof callback==='function') {
                    callback();
                }
                dispatch(success())
            },
            (e)=>dispatch(failure(e)))
    };
}

function checkLogin(token){
    return dispatch=>{
        dispatch({type:userConstants.CHECK_LOGIN_REQUEST});
        userService.checkLogin(token,()=>{
            dispatch({type: userConstants.LOGIN_SUCCESS})
        },(e)=>{
            dispatch({type: userConstants.CHECK_LOGIN_FAILURE, error: e.toString()})
        })
    }
}


function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT }
}
