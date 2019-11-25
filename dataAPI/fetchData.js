import React, { Component } from 'react';
import axios from 'axios';

class fetchData extends Component{
    constructor(props){
        super(props)
    }
    getaxiosPost(){
        axios({
            method:'post',
            url:'./mock/data',
            data:{
                type:"import",
                page:1,
                pageSize:10,
            },
            headers:{
                'Content-Type':'application/json;charset=utf-8'
            }
        }).then(function(res){
            console.log(res.data);
        }).catch(function(error){
            console.log(error);
        });
    }
    getaxiosGet(){
        axios({
            method:'get',
            url:'./mock/data',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        }).then(function(res){
            console.log(res.data);
        }).catch(function(error){
            console.log(error);
        });
    }

    render() {
        return(
            <div>

            </div>
        )
    }
}

export default fetchData;
