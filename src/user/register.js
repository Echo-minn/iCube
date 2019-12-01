/**
 * @Author 肖敏
 * @create 2019-11-27
 */
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    Alert,
    message
} from 'antd';
import axios from 'axios';
import React from 'react';
import './login0.css';

let responseCaptcha={
    statusCode:'',
    messageDetail: '',
    url:'/login'
};

const {Option} = Select;

const residences = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];

class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    /**
     * 验证是否注册成功
     * @param e
     */
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
            let data = new FormData();
            data.append("phone", values.phone);
            data.append("password",values.password);
            data.append("verification_code",values.captcha);
            data.append("user_name",values.nickname);
            let url = "http://47.110.251.127:8000/sign_up/";
            axios.post(url, data,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(function (response) {
                    responseCaptcha=response.data;
                    console.log(responseCaptcha.statusCode);
                    if(responseCaptcha.statusCode==='0'){
                        message.success("注册成功，马上登录吧！");
                    }else if(responseCaptcha.statusCode==='502'){
                        message.info("你已经注册过啦~");
                    }else if(responseCaptcha.statusCode==='503'){
                        message.error("验证码输错了呜呜呜=_=");
                    }else if(responseCaptcha.statusCode==='504'){
                        message.warning("你还没有获得验证码哦");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        });
        this.alertMessage1();
    };

    /**
     * 请求验证码
     * @param e
     */
    handleSend = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
            let url = "http://47.110.251.127:8000/verification_code/";
            let data = new FormData();
            data.append("phone", values.phone);
            axios.post(url, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(function (response) {
                    console.log(response);
                    if(response.data.statusCode==='0'){
                        message.success("验证码发送成功！")
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        });
        this.alertMessage0();
    };

    /**
     * 提示消息
     * @param
     */
    alertMessage0(){
        message.success("验证码发送成功！");
    }
    alertMessage1(){
        message.success("注册成功！现在去登录吧");
    }

    handleConfirmBlur = e => {
        const {value} = e.target;
        this.setState({confirmDirty: this.state.confirmDirty || !!value});
    };

    compareToFirstPassword = (rule, value, callback) => {
        const {form} = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const {form} = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], {force: true});
        }
        callback();
    };

    /**
     * 渲染表单
     * @returns {*}
     */
    render() {
        const {getFieldDecorator} = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 8},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 16},
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{width: 70}}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>,
        );


        return (
            <div>
                <Form {...formItemLayout} onSubmit={this.handleSubmit} style={{width: 450,margin:"auto",textAlign:"center"}} className="login-form">
                    <h2 style={{paddingTop:20}}><b>Welcome to iCube! 赶紧注册吧 :)</b></h2>
                        <Form.Item label="E-mail">
                            {getFieldDecorator('email', {
                                rules: [
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                ],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Password" hasFeedback>
                            {getFieldDecorator('password', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                    {
                                        validator: this.validateToNextPassword,
                                    },
                                ],
                            })(<Input.Password />)}
                        </Form.Item>
                        <Form.Item label="Confirm Password" hasFeedback>
                            {getFieldDecorator('confirm', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    {
                                        validator: this.compareToFirstPassword,
                                    },
                                ],
                            })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                        </Form.Item>
                        <Form.Item
                            label={
                                <span>
                      Nickname&nbsp;
                                    <Tooltip title="What do you want others to call you?">
                        <Icon type="question-circle-o" />
                      </Tooltip>
                    </span>
                            }
                        >
                            {getFieldDecorator('nickname', {
                                rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Habitual Residence">
                            {getFieldDecorator('residence', {
                                initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                                rules: [
                                    { type: 'array', required: true, message: 'Please select your habitual residence!' },
                                ],
                            })(<Cascader options={residences} />)}
                        </Form.Item>
                    <Form.Item label="Phone Number">
                        {getFieldDecorator('phone', {
                            rules: [{required: true, message: 'Please input your phone number!'}],
                        })(<Input addonBefore={prefixSelector} style={{width: 300}}/>)}
                    </Form.Item>
                    <Form.Item label="Captcha" extra="We must make sure that your are a human.">
                        <Row gutter={8}>
                            <Col span={12}>
                                {getFieldDecorator('captcha', {
                                    rules: [{required: true, message: 'Please input the captcha you got!'}],
                                })(<Input/>)}
                            </Col>
                            <Col span={12}>
                                <Button onClick={this.handleSend} >Get captcha</Button>
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        {getFieldDecorator('agreement', {
                            valuePropName: 'checked',
                        })(
                            <Checkbox>
                                I have read the <a href="/iTeam">agreement</a>
                            </Checkbox>,
                        )}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <a href='/login'>
                            <Button type="primary" onClick={this.handleSubmit}>
                                Register
                            </Button>
                        </a>
                        Go to <a href="/login">login now!</a>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

const WrappedRegistrationForm = Form.create({name: 'register'})(RegistrationForm);
export default WrappedRegistrationForm;




