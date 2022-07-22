import React from "react";
import styled from 'styled-components'
import logoImage from '../../assets/images/logo.png'
import AutoComplete from "../Input/AutoComplete";


const Header = () => {
    return (
        <Wrapper>
            <Container>
                
            <Logo src={logoImage} alt="" />
            <AutoComplete/>

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

const Search = styled.input`
    height: 36px;
    border-radius: 10px;
    border: none;
    min-width: 500px;
`
const Services = styled.div`
    display: flex;
    margin-left: 48px;
`

const Service = styled.div`
    display: flex;
`

export default Header