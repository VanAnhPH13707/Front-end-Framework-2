import React from "react";
import styled from 'styled-components'



const Header = () => {
    return (
        <Wrapper>
            <Container>
                
                

            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: #D70018;
`

const Container = styled.div`
    max-width: 1000px;
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