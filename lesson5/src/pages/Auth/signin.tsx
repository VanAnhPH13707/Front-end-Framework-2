import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
    Typography,
    Col,
    Row,
    Button,
    Checkbox,
    Form,
    Input,
    InputNumber,
    Select,
    message,
} from "antd";
import { useNavigate } from "react-router-dom";
import Img2 from "../../assets/images/logo.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FaceboookT from "../../assets/images/Rectangle.png";
import Google from "../../assets/images/Rectangle (1).png";
const { TextArea } = Input;
const { Option } = Select;

const Signin: React.FC = () => {
    const navigate = useNavigate();

    const onFinish = async (values: any) => { };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div>
            <Header />
            <Container2>
                <Form
                    initialValues={{}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout="vertical"
                >
                    <Typography.Title level={2} style={{ margin: 0}}>
                        Đăng nhập
                    </Typography.Title>
                    <Row>
                        <Col>
                            <Form.Item
                                name="name"
                                labelCol={{ span: 24 }}
                                label="Email"
                                rules={[{ required: true, message: "Email không được trống" }]}
                            >
                                <Input size="large" style={{ width: "400px" }} />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                labelCol={{ span: 24 }}
                                label="Mật khẩu"
                                rules={[
                                    { required: true, message: "Mật khẩu không được trống" },
                                ]}
                            >
                                <Input size="large" />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" style={{ width: "400px" }} >
                                    Đăng ký
                                </Button>
                            </Form.Item>
                            <ContainerT>
                                <span>Hoặc đăng nhập bằng</span>
                                <Facebook>
                                    <Items2>
                                        <Items src={FaceboookT} />
                                    </Items2>
                                    <div>
                                        <Items src={Google} />
                                    </div>
                                </Facebook>
                            </ContainerT>
                        </Col>
                    </Row>
                </Form>
                <div>
                    <Container>
                        <UploadWrapper>
                            <Img src={Img2} />
                        </UploadWrapper>
                    </Container>
                </div>
            </Container2>
            <Footer />
        </div>
    );
};

const ContainerT = styled.div`
  /* width: 980px;
  margin:  auto; */
  text-align: center;
`;
const Items2 = styled.div`
  margin-right: 20px;
`;

const Facebook = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  margin-top: 15px;
`;

const Items = styled.img``;
const Container2 = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;
const Container = styled.div``;

const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  padding: 75px;
  background-color: #f8f8f8f8;
  margin-left: 75px;
`;
const Img = styled.img`
  padding-top: 70px;
  padding-bottom: 70px;
`;
const UploadIcon = styled.label`
  input {
    display: none;
  }
`;

const ImagePreview = styled.img`
  width: 250px;
  height: 50%;
`;
export default Signin;