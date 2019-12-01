import React from 'react';
import { Form, Icon, Input, Button, Checkbox,Alert,message } from 'antd';
import './login0.css';
import axios from 'axios';
import {withRouter} from "react-router";


let responseData = {
  statusCode:'',
  messageDetail:'',
  url:'/register',
};

class loginForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
            let data = new FormData();
            data.append("phone",values.phone);
            data.append("password",values.password);
            let url = "http://47.110.251.127:8000/sign_in/";
            axios.post(url, data,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(function (response) {
                    console.log(response);
                    responseData=response.data;
                    console.log(responseData.statusCode);
                    console.log(responseData.messageDetail.user_name);
                    if(responseData.statusCode==='507'){
                        message.warning("该用户未注册，请先注册");
                    }else if(responseData.statusCode==='506'){
                        message.error("用户名或密码错误！");
                    }else if(responseData.statusCode==='0'){
                        message.success("欢迎回来！"+responseData.messageDetail.user_name);
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        });

    };

    alertMessage(){
        message.success("欢迎回来！");
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form" style={{width: 400}}>
                <div className="padding-div"/>
                <h2><b>登录iCube</b></h2>
                <p/>
                <Form.Item>
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'Please input your phoneNumber!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="phone"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>Remember me</Checkbox>)}
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                    <div style={{height: 20}}/>
                    <a href='/' onClick={this.alertMessage}>
                        <Button type="primary"  className="login-form-button" >
                            Log in
                        </Button>
                    </a>
                    Or go to <a href="/register">register now!</a>
                </Form.Item>
                <div className="padding-div"/>
            </Form>
        );
    }
}
const routerLoginForm=withRouter(loginForm);
const ReduxLoginForm= Form.create({ name: '/register' })(routerLoginForm);
export default ReduxLoginForm;
