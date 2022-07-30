import { Col, Divider, Row } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React from 'react';
import styled from 'styled-components';
import logoImage from '../../assets/images/logo.png'
const style = {
  background: '#0092ff',
  padding: '8px 0',
};

const ProductPage = () => (
  <>
  <Content style={{ padding: '0 50px' }}>
    <Divider orientation="left">Vertical</Divider>
    <Row gutter={[16, 24]}>
      <Col className="gutter-row" span={6}>
        <Logo src = {logoImage} alt= ""/>

      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
    </Content>
  </>
);
const Logo = styled.img`
    
`

export default ProductPage;