import React from "react";
import axios from 'axios';
//import apis from '@/services/api';
import reqwest from 'reqwest';

import {
    Form,
    Select,
    InputNumber,
    Switch,
    Radio,
    Slider,
    Button,
    Upload,
    Icon,
    Rate,
    Checkbox,
    Row,
    Col,
    Card,
    Modal,
    message,
} from 'antd';

//定义后台返回数据类型
let responseData={

};

let responseData1={

};

let responseData2={

};
let img={
    imgUrl:''
};
const { Option } = Select;
const { Meta } = Card;

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
function load() {
    document.getElementById("img1").src = responseData.messageDetail.image_url;
}

function load1() {
    document.getElementById("img2").src = responseData1.messageDetail.image_url;
}

function load2() {
    document.getElementById("img3").src = responseData2.messageDetail.amazing_image_url;
}

function handleClick() {
    const formData = new FormData();
    formData.append('content_image', responseData.messageDetail.image_ur);//名字和后端接口名字对应
    formData.append('style_image', responseData1.messageDetail.image_ur);//名字和后端接口名字对应
    reqwest({
        url: 'http://www.icube.fun:8000/image_change_style/',//上传url
        method: 'post',
        processData: false,
        data: formData,
        success: (res) => {//上传成功回调
            message.success("success");
            var data = JSON.parse(res);
            console.log(data);
            responseData2 = data;
            if (res.statusCode === 0) {
                this.setState({
                    imageUrl: res.imageUrl,
                });
                message.success('上传成功！');
                return responseData2.data.amazing_image_url;
            }
        },
        error: () => {//上传失败回调
            message.error('上传失败！');
        },
    });
}

class Demo extends React.Component {
    state = {
        loading: false,
        previewVisible: false,
        previewImage: '',
        fileList: [

        ],
        root:'',
        keyword:'',
    };


    handleChange = ({ fileList }) => this.setState({ fileList });

    render() {
        const { previewVisible, previewImage, fileList,root,keyword} = this.state;
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">上传</div>
            </div>
        );
        const { imageUrl } = this.state;

        const props = {
            name: "avatar",
            showUploadList: false,//设置只上传一张图片，根据实际情况修改
            customRequest: info => {//手动上传
                const formData = new FormData();
                formData.append('image', info.file);//名字和后端接口名字对应
                reqwest({
                    url: 'http://www.icube.fun:8000/upload_image/',//上传url
                    method: 'post',
                    processData: false,
                    data: formData,
                    success: (res) => {//上传成功回调
                        message.success("success");
                        var data = JSON.parse(res);
                        console.log(data);
                        responseData = data;
                        load();
                        if (res.statusCode === 0) {
                            this.setState({
                                imageUrl: res.imageUrl,
                            });
                            message.success('上传成功！');
                        }
                    },
                    error: () => {//上传失败回调
                        message.error('上传失败！');
                    },
                });
            },
            onRemove: file => {//删除图片调用
                this.setState(state => {
                    const index = state.fileList.indexOf(file);
                    const newFileList = state.fileList.slice();
                    newFileList.splice(index, 1);
                    return {
                        fileList: newFileList,
                    };
                });
            },
            listType: "picture-card",
            className: "avatar-uploader",

            beforeUpload: file => {//控制上传图片格式
                const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

                if (!isJpgOrPng) {
                    message.error('您只能上传JPG/PNG 文件!');
                    return;
                }
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isLt2M) {
                    message.error('图片大小必须小于2MB!');
                    return;
                }
                return isJpgOrPng && isLt2M;
            },
        };

        const props1 = {
            name: "avatar",
            showUploadList: false,//设置只上传一张图片，根据实际情况修改
            customRequest: info => {//手动上传
                const formData = new FormData();
                formData.append('image', info.file);//名字和后端接口名字对应
                reqwest({
                    url: 'http://www.icube.fun:8000/upload_image/',//上传url
                    method: 'post',
                    processData: false,
                    data: formData,
                    success: (res) => {//上传成功回调
                        message.success("success");
                        var data = JSON.parse(res);
                        console.log(data);
                        responseData1 = data;
                        load1();
                        if (res.statusCode === 0) {
                            this.setState({
                                imageUrl: res.imageUrl,
                            });
                            message.success('上传成功！');
                        }
                    },
                    error: () => {//上传失败回调
                        message.error('上传失败！');
                    },
                });
            },
            onRemove: file => {//删除图片调用
                this.setState(state => {
                    const index = state.fileList.indexOf(file);
                    const newFileList = state.fileList.slice();
                    newFileList.splice(index, 1);
                    return {
                        fileList: newFileList,
                    };
                });
            },
            listType: "picture-card",
            className: "avatar-uploader",

            beforeUpload: file => {//控制上传图片格式
                const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

                if (!isJpgOrPng) {
                    message.error('您只能上传JPG/PNG 文件!');
                    return;
                }
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isLt2M) {
                    message.error('图片大小必须小于2MB!');
                    return;
                }
                return isJpgOrPng && isLt2M;
            },
        };
        return (
            <div style={{margin:"auto",paddingTop:100,paddingBottom:100,maxWidth:400}}>>
                <div>
                <div style={{margin:"auto",textAlign:"center",marginLeft:150}}>
                <Upload {...props}
                    listType="picture-card"
                    fileList={fileList}
                    onChange={this.handleChange}
                >
                    <img id="img1" src={imageUrl} alt="原图" style={{ width: '100%'}} />
                </Upload>
                <Upload {...props1}
                        listType="picture-card"
                        fileList={fileList}
                        onChange={this.handleChange}
                >
                    <img id="img2" src={imageUrl} alt="风格图" style={{ width: '100%'}} />
                </Upload>
                </div>
                <div style={{margin:"auto",textAlign:"center",paddingBottom:30}}>
                  <Button type="primary" onClick={handleClick} style={{marginLeft:10}}>生成结果</Button>
                  </div>
                <Card
                    hoverable
                    style={{ width: 300 ,margin:"auto",background: '#FAFAFA',textAlign:"center"}}
                    cover={<img id="img3" />}
                >
                    <Meta title="处理结果" style={{textAlign:"center"}}/>
                </Card>
            </div>
            </div>
        )
    }

}

const WrappedDemo1 = Form.create({ name: 'validate_other' })(Demo);
export default WrappedDemo1;
