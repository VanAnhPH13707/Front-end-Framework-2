
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Col, message, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { getProInCate } from "../../api/category";
import { read } from "../../api/product";
import Procss from './product.module.css'
import starImage from "../../assets/images/Star.png"
import { ProductType } from "../../types/product";
import s from "./ProductDetail.module.css";

type Props = {};

const ProductDetail = (props: Props) => {
  const [product, setProduct] = useState<any>([]);
  const { id } = useParams();
  const [data, setData] = useState<ProductType[]>([]);
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await read(id);
      setProduct(data);
    };
    getProduct();
  }, [id]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getProInCate(product.category);
      if (data.products.length > 4) {
        const newData = data.products.filter((item: any) => item.status == 0);
        const samePro = [];
        for (let i = 0; i < 5; i++) {
          samePro.push(newData[i]);
        }
        setData(samePro);
      } else {
        setData(data.products);
      }
    };
    fetchData();
  }, [product]);
  const dispatch = useDispatch();
  const addToCart = (item: any) => {
    dispatch({
      type: "cart/add",
      payload: { ...item, amount: 1 },
    });
    message.success("Thêm vào giỏ hàng thành công!");
  };
  return (
    <Content>
      <Row style={{ height: '35px', padding: '5px 250px' }}>
        <h2>{product.name}</h2>
      </Row>
      <hr />
      <Row style={{ justifyContent: "center" }}>
        <Col span={8}>
          <ProImage src={product.image} alt="" />
        </Col>
        <Col span={8} style={{ textAlign: 'left', paddingTop: '20px' }}>
          <Row style={{ display: 'flex' }}>
            <p style={{ fontSize: '20px', color: '#D70018', fontWeight: 'bold' }}>{product.saleOffPrice}đ</p>
            <p style={{ paddingTop: '6px', paddingLeft: '30px', fontSize: '16px' }}>{product.originalPrice}đ</p>
          </Row>
          <Row>
            <p>{product.description}</p>
          </Row>
          <Row style={{ paddingTop: '200px' }} onClick={() => addToCart(product)}>
            <Button style={{ width: '200px', background: '#FF3945', border: '#FF3945', color: '#fff' }}>Mua ngay</Button>
            <ShoppingCartOutlined style={{ width: '40px', border: '1px solid #FF3945', paddingTop: '10px', color: '#FF3945', borderRadius: "5px", marginLeft: '20px', marginRight: '20px' }} />
            <p>Thêm vào giỏ hàng</p>
          </Row>
        </Col>
      </Row>
      <Row style={{ padding: '20px 240px', justifyContent: 'space-between' }}>
        <h3>Sản phẩm cùng loại</h3>
      </Row>
      <Row>
        {data &&
          data.map((item: any) => {
            return (
              <div>
                <Col span={4} >
                  <NavLink to={`/product/detail/${item.id}`}>
                    <Box className={Procss.box}>
                      <ProImage src={item.image} alt="" />
                      <Name>
                        <h3>{item.name}</h3>
                      </Name>
                      <Price>
                        <span style={style}>{item.originalPrice}đ</span>
                        <span>{item.saleOffPrice}đ</span>
                      </Price>
                      <Text>
                        <p>{item.shortDesc}</p>
                      </Text>
                      <List>
                        <Star src={starImage} />
                        <Star src={starImage} />
                        <Star src={starImage} />
                        <Star src={starImage} />
                        <Star src={starImage} />
                      </List>


                    </Box>
                  </NavLink>
                </Col>
              </div>
            );
          })}
      </Row>
      {/* đặc điểm nổi bật */}
      <Row style={{width:'1250px',paddingLeft:'240px'}}>
        <Items3>
          <NameDD>Đặc điểm nổi bật</NameDD>
          <div>
            <SpanN>{product.feature}</SpanN>
          </div>
        </Items3>
      </Row>
      {/* docs */}
      <Row style={{width:'1250px',paddingLeft:'240px', paddingBottom:'20px'}}>
      {product.description}
      </Row>

      <div className={s.butoonT}>
        <InButton>Xem Thêm</InButton>
      </div>

    </Content>
  );
};

const ProImage = styled.img`
   width:280px;
   padding-top: 20px;
   padding-bottom: 20px;
`
const Items1 = styled.div`
  width: 1000px;
  display: grid;
  grid-template-columns: 40% 1fr;
  gap: 15px;
  margin-top: 20px;
`;
const Img1 = styled.img`
  width: 350px;
  height: 350px;
`;
const Box = styled.div`
  width: 220px;
  transition: box-shadow .3s;
  background: #fff;
  float: left;
  margin-left:5px;
  margin-bottom:10px;
`
const Name = styled.h3`
  font-size: 12px;
  padding: 8px;
  
`
const Price = styled.span`
  display: flex;
  justify-content:space-around;
  color: #000;
`
const style = {
  color: '#D70018',
};
const Text = styled.div`
  width: 200px;
  color: #000;
  background: #F3F4F6;
  border: 1px solid #E5E7EB;
  border-radius: 5px;
  margin: 15px 8px 15px;
  
`
const List = styled.div`
  display:flex;
  padding-left: 10px;
  padding-bottom:15px;
`
const Star = styled.img`
  
`
const Items3 = styled.div`
  width: 1200px;
  background-color: #f2f2f2;
  margin-top: 30px;
  margin-bottom: 20px;
  padding: 10px 0;
`;
const NameDD = styled.div`
  text-align: center;
  color: red;
  font-size: 18px;
`;
const SpanN = styled.p`
  padding-left: 20px;
  font-size: 14px;
 
`;
const InButton = styled.button`
  border: 1px solid #000000;
  padding: 2px 60px;
  box-shadow: 0px 1px 2px rgba(60, 64, 67, 0.1);
  border-radius: 10px;
`;
export default ProductDetail;