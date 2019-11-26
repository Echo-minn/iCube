
import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './login0.css';


class loginForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
            const username = values.username;
            const password = values.password;
            const _  = this;

            if(username&&password){
                _.setState({
                            isLoggedIn: true
                        })
                // dispatch(loginActions.login(username,password, () => {
                //     _.setState({
                //         isLoggedIn: true
                //     })
                // }));
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form" style={{width: 400}}>
                <div className="padding-div"></div>
                <h2><b>登录iCube</b></h2>
                <p></p>
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
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
                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                    <div style={{height: 20}}></div>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a href="/register">register now!</a>
                </Form.Item>
                <div className="padding-div"></div>
            </Form>
        );
    }
}

const LoginForm = Form.create({ name: 'login' })(loginForm);
export default LoginForm;
