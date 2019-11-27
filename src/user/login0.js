import React from 'react';
import { Form, Icon, Input, Button, Checkbox,Alert } from 'antd';
import './login0.css';
import axios from 'axios';


let responseData = {
  statusCode:'',
  messageDetail:'',
  url:'/register',
};
//let responseURL='/';
//17786047941
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
                        alert("该用户未注册，请先注册");
                        return (
                            <Alert
                                message="ERROR"
                                description="该用户未注册，请先注册"
                                type="warning"
                                showIcon
                            />
                        );
                    }else if(responseData.statusCode==='506'){
                        alert("用户名或密码错误！");
                        return (
                            <Alert
                                message="ERROR"
                                description="用户名或密码错误！"
                                type="error"
                                showIcon
                            />
                        );
                    }else if(responseData.statusCode==='0'){
                        return (
                            <Alert
                                message="欢迎回来！"
                                description="开始在iCube的奇妙之旅吧！"
                                type="success"
                                showIcon
                            />
                        )
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        });

    };

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
                    <a href='/'>
                    <Button type="primary" htmlType="submit" className="login-form-button" onClick={
                        <Alert
                            message="Success Tips"
                            description="登录成功，开始在iCube的奇妙之旅吧~~！"
                            type="success"
                            showIcon
                        />
                    }>
                        Log in
                        {this.handleSubmit}
                    </Button>
                    </a>
                    Or <a href="/register">register now!</a>
                </Form.Item>
                <div className="padding-div"/>
            </Form>
        );
    }
}

const LoginForm = Form.create({ name: 'login' })(loginForm);
export default LoginForm;
