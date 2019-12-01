import React from "react";
import reqwest from 'reqwest';

import {
    Form,
    Select,
    Upload,
    Icon,
    Card,
    message,
} from 'antd';

//定义后台返回数据类型
let responseData={


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
    document.getElementById("p1").innerHTML = responseData.messageDetail.image_detial.root;
    document.getElementById("p2").innerHTML = responseData.messageDetail.image_detial.keyword;
    document.getElementById("img1").src = responseData.messageDetail.file_url;
}

class Demo extends React.Component {
    state = {
        loading: false,
    };

    handleClick() {
        img.imgUrl='';
        alert(img.imgUrl);
    };

    handleChange = ({ fileList }) => this.setState({ fileList });

    render() {

        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'}/>
                <div className="ant-upload-text">上传</div>
            </div>
        );
        const { imageUrl } = this.state;

        const props = {
            name: "avatar",
            showUploadList: false,//设置只上传一张图片，根据实际情况修改
            customRequest: info => {//手动上传
                const formData = new FormData();
                formData.append('filename', info.file);//名字和后端接口名字对应
                formData.append('recognize_type', "1");
                reqwest({
                    url: 'http://www.icube.fun:8000/image_recognize/',//上传url
                    method: 'post',
                    processData: false,
                    data: formData,
                    success: (res) => {//上传成功回调
                        var data = JSON.parse(res);
                        console.log(data);
                        responseData = data;
                        console.log("------");
                        if (data.statusCode === 0) {
                            message.success('分析成功！');
                            load();
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
            <div style={{margin:"auto",paddingTop:100,paddingBottom:100,maxWidth:400}}>
            <div style={{margin:"auto",textAlign:"center",marginLeft:148,paddingBottom:50}}>
                <Upload
                    {...props}
                    listType="picture-card"
                    onChange={this.handleChange}
                >
                    <img id="img1" src={imageUrl} alt="上传图片" style={{ width: '100%'}} />
                </Upload>
            </div>
                <Card title="这张图片的标签" bordered={false} style={{ width: 300 ,margin:"auto", background:'#FAFAFA',textAlign:"center"}}>
                    <p id="p1"/>
                    <p id="p2"/>
                </Card>

            </div>
        )
    }


}

const WrappedDemo2 = Form.create({ name: 'validate_other' })(Demo);
export default WrappedDemo2;
