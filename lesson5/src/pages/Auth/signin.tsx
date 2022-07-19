import { Button, Checkbox, Col, Form, Input, InputNumber } from 'antd';
import React from 'react';

const Signin = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Col>
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 8,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Tên sản phẩm"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Mời bạn nhập tên sản phẩm!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Giá gốc"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Mời bạn nhập giá!',
                    },
                ]}
            >
                <InputNumber style={{width:'100%'}}/>

            </Form.Item>


            <Form.Item
                wrapperCol={{
                    offset: 1,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
        </Col>
    );
};

export default Signin;