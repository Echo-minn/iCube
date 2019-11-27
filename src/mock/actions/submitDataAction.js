import {submitDataConstants} from "./constants";
import {SubmitData} from "../service/submitDataService";

function request(){ return {type:submitDataConstants.SUBMIT_DATA_REQUEST} }
function success(){ return {type:submitDataConstants.SUBMIT_DATA_SUCCESS} }
function failure(err){ return {type:submitDataConstants.SUBMIT_DATA_FAILURE,error:err} }


export function submitData(type,...params) {
    return dispatch=>{
        dispatch(request())
        SubmitData(params,type,
            ()=>{dispatch(success())},
            (err)=>{dispatch(failure(err))
            })
    }
}
