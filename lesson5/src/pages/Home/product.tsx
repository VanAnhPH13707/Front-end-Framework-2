import { Col, Divider, Row } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { list } from '../../api/product';
import { ProductType } from '../../types/product';
import Procss from './product.module.css'
import starImage from "../../assets/images/Star.png"
import { NavLink } from 'react-router-dom';
import Section from './section';

type Props = {

};
const ProductPage = (props: Props) => {
  const [data, setData] = useState<ProductType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await list();
      setData(data);
    };
    fetchData();
  }, []);
  return (
    <>

      <Content style={{ padding: '50px 60px' }}>
        <Row style={{ padding: '0 100px' }}>
          <h2>ĐIỆN THOẠI NỔI BẬT</h2>
        </Row>
        <Row>
          {data &&
            data.map((item: any, index: any) => {
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
        <Section/>
      </Content>
    </>
  );
};
const ProImage = styled.img`
    width:180px;
    padding-top: 20px;
    padding-bottom: 20px;
`
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
export default ProductPage;