// import { message } from 'antd';
// import React, { useState } from 'react';
// import { upload } from '../../../api/images';

// const EditProduct: React.FC = () => {
//   const [previewImage, setPreviewImage] = useState('')
//   const [imageUrl, setImageUrl] = useState('')

//   const handleChangeImage = (event: any) => {
//     const file = event.target.files[0]
//     console.log(file);
    
//     const reader = new FileReader()
//     reader.readAsDataURL(file)
//     reader.onloadend = () => {
//       setPreviewImage(reader.result)
//     }
//   }

//   const uploadImage = async (base64Image: string) => {
//     try {
//       const res = await upload(base64Image)
//       const data = res.data
//       setImageUrl(data.url)
//     } catch(err) {
//       console.log(err);
//       message.error(JSON.stringify(err.message))
//     }
//   }
//   return (
//     <>
//       <h1>Cập nhật sản phẩm</h1>
//       <input onChange={handleChangeImage} type="file" accept='image/png, image/jpg, image/jpeg ' />
//       <button onClick={() => uploadImage(previewImage)}>Upload image</button>
//       {imageUrl && <img src={imageUrl} alt="" />}
//     </>
//   );
// };

// export default EditProduct;

import React from "react";
import styled from "styled-components";
import { Typography, Col, Row, Button, Checkbox, Form, Input, InputNumber, Select, message } from 'antd'
import UploadImage from "../../../components/Product/UploadImage";
import { add } from "../../../api/product";
import { useNavigate } from "react-router-dom";


const { TextArea } = Input
const { Option } = Select;

const ProductEdit: React.FC = () => {
	const navigate = useNavigate()
	const onFinish = async (values: any) => {
		console.log('Success:', values);

		try {
			const data = await add(values)
			message.success("Tạo mới thành công")
			navigate(-1)
		} catch (err) {
			message.error("Có lỗi xảy ra")
		}
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};
	return (
		<>
			<Breadcrumb>
				<Typography.Title level={2} style={{ margin: 0 }}>
					Cập nhật
				</Typography.Title>
			</Breadcrumb>
			<Row gutter={16}>
				<Col span={10}>
					<UploadImage />
					
				</Col>
				<Col span={14}>
					<Typography.Title level={5}>Thông tin sản phẩm</Typography.Title>
					<Form
						// name="product"
						initialValues={{}}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						autoComplete="on"
						labelCol={{ span: 24 }}
					>
						<Form.Item
							name="name"
							labelCol={{ span: 24 }}
							label="Tên sản phẩm"
							rules={[{ required: true, message: 'Tên sản phẩm không được trống' }]}
						>
							<Input size="large" />
						</Form.Item>

						<Row gutter={16}>
							<Col span={12}>
								<Form.Item
									name="originalPrice"
									label="Giá gốc"
									labelCol={{ span: 24 }}
									rules={[{ required: true, message: 'Giá sản phẩm' }]}
								>
									<InputNumber style={{ width: '100%' }} size="large" />
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item
									name="saleOffPrice"
									label="Giá giảm"
									labelCol={{ span: 24 }}
									rules={[{ required: true, message: 'Giá sản phẩm' }]}
								>
									<InputNumber style={{ width: '100%' }} size="large" />
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item
									label="Phân loại"
									name="categories"
									rules={[{ required: true }]}
								>
									<Select style={{ width: '100%' }} size="large">
										<Option value="phone">Điện thoại</Option>
										<Option value="laptop">Laptop</Option>
										<Option value="accessories" disabled>
											Phụ kiện
										</Option>
										<Option value="tablet">Máy tính bảng</Option>
									</Select>
								</Form.Item>
							</Col>
						</Row>

						<Form.Item
							name="feature"
							labelCol={{ span: 24 }}
							label="Đặc điểm nổi bật"
							rules={[{ required: true, message: 'Đặc điểm sản phẩm' }]}
						>
							<TextArea name="feature" />
						</Form.Item>
						<Form.Item
							name="description"
							labelCol={{ span: 24 }}
							label="Mô tả sản phẩm"
							rules={[{ required: true, message: 'Mô tả sản phẩm' }]}
						>
							<TextArea name="description" />
						</Form.Item>

						<Form.Item >
							<Button type="primary" htmlType="submit">
								Cập nhật sản phẩm
							</Button>
						</Form.Item>
					</Form>
				</Col>
			</Row>
		</>
	)
}

const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

const Label = styled.div`
	font-size: 13px;
`

export default ProductEdit