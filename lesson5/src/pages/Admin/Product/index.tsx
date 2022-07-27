import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { Typography, Button, Table , Switch, Space,Image} from 'antd';
import { Link } from 'react-router-dom'
import { SearchOutlined, PlusOutlined, FormOutlined } from '@ant-design/icons';
const { Paragraph } = Typography
import type { ColumnsType } from 'antd/es/table';
import { list } from "../../../api/product";

interface DataType {
    id:number;
    name: string;
    saleOffPrice: number;
    feature: string;
    description: string;
    image: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "Ảnh",
        dataIndex: "image",
        key: "image",
        render: (dataIndex) => <Image src={dataIndex} style={{ width: "50px" }} />,
      },
    {
        title: 'Tên sản phẩm',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Đặc điểm',
        dataIndex: 'feature',
        key: 'feature',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Giá khuyến mãi',
        dataIndex: 'saleOffPrice',
        key: 'saleOffPrice',
    },
    {
        title: 'Mô tả',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: "Ẩn/Hiện",
        key: "hidden",
        render: (_, record) => (
          <Space size="middle">
            <Switch defaultChecked onChange={onChange} />
          </Space>
        ),
      },
      {
        title: "Action",
        key: "action",
        dataIndex: 'id',
        render: (dataIndex) => (
            
            
          <Space size="middle">
            <IconsItems>
            <Link to ={`/admin/product/edit/${dataIndex}`}><FormOutlined /></Link>
              
            </IconsItems>
          </Space>
        ),
      },

];


const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
const ProductAdminPage = () => {
    const [dataTable, setDataTable] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await list()
                setDataTable(data.data)
            } catch (err) {

            }
        }
        
        fetchData()
  
    }, [])

    return (
        <>
            <Breadcrumb>
                <Typography.Title level={2} style={{ margin: 0 }}>
                    Điện thoại
                </Typography.Title>
                <Link to="/admin/product/add">
                    <Button type="dashed" shape="circle" icon={<PlusOutlined />} />
                </Link>
            </Breadcrumb>
            <Table columns={columns} dataSource={dataTable} />
        </>
    )
}

const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`
const IconsItems = styled.div`
    color:#00B0D7;
`

export default ProductAdminPage