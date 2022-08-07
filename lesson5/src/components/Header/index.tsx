import React from "react";
import styled from 'styled-components'
import logoImage from '../../assets/images/logo.png'
import ServiceBtn from "../Button/Service";
import AutoComplete from "../Input/AutoComplete";

import deliveryImage from "../../assets/images/delivery.png"
import vectorImage from "../../assets/images/Vector.png"
import cartImage from "../../assets/images/Cart.png"
const Header = () => {
    return (
        <Wrapper>
            <Container>
                
            <Logo src={logoImage} alt="" />
            <AutoComplete/>
            <Services>
                    <ServiceBtn
                        image={vectorImage}
                        title1="Gọi mua hàng 1800.2097"  />
                    <ServiceBtn
                        image={deliveryImage}
                        title1="Cửa hàng gần bạn" />
                    <ServiceBtn
                        image={cartImage}
                        title1="Giỏ hàng" />
                </Services>

            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: #D70018;
`

const Container = styled.div`
    max-width: 1000px;
    height: 64px;
    margin: 0 auto;
    display: flex;
    align-items: center;
`

const Logo = styled.img`
    width: 60px;
    height: auto;
    margin-right: 60px;
`
const Services = styled.div`
    display: flex;
    margin-left: 54px;
`

const Service = styled.div`
    display: flex;
`

export default Header