import React from "react";
import styled from 'styled-components'
import logoImage from '../../assets/images/logo.png'
import ServiceBtn from "../Button/Service";
import AutoComplete from "../Input/AutoComplete";

import deliveryImage from "../../assets/images/delivery.png"
import vectorImage from "../../assets/images/Vector.png"
import cartImage from "../../assets/images/cart.png"
import { Link, NavLink } from "react-router-dom";
import { message } from "antd";
type Props = {};

const Header = (props: Props) => {
  const a = JSON.parse(localStorage.getItem("user") as string);
  const handleClick = (event: React.MouseEvent<HTMLElement>, text: string) => {
    localStorage.removeItem("user");
    message.success("Đăng xuất thành công")
    window.location.reload();
  };

    return (
        <Wrapper>
            <Container>
            <Link to='/'>
            <Logo src={logoImage} alt="" />
            </Link>
            <AutoComplete/>
            <Services>
                    <ServiceBtn
                        image={vectorImage}
                        title1="Gọi mua hàng 1800.2097"  />
                    <ServiceBtn
                        image={deliveryImage}
                        title1="Cửa hàng gần bạn" />
                    <Link to='/cart'>
                    <ServiceBtn
                        image={cartImage}
                        title1="Giỏ hàng" />
                    </Link>
            </Services>
            {a == null ? (<div>
          <div className="dropdown">
            <a className="dropdown-toggle text-sm text-white font-normal" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Tài khoản
            </a>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item text-sm font-normal" to={`/signin`}>Đăng nhập</Link></li>
              <li><Link className="dropdown-item text-sm font-normal" to={`/signup`}>Đăng kí</Link></li>
            </ul>
          </div>
        </div>) : (<div>
          <div className="dropdown">
            <a className="dropdown-toggle text-sm text-white font-normal" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Tài khoản
            </a>
            <ul className="dropdown-menu">
              <li>{a.user.role == 1 ? (<div className="py-1">
                <NavLink to="/admin" tabIndex={1} className="dropdown-item text-sm font-normal" role="menuitem">DashBoard</NavLink>
              </div>) : (<div></div>)}</li>
              <li><button value="1" tabIndex={3} className="dropdown-item text-sm font-normal" role="menuitem" id="logout"
                onClick={(e) => handleClick(e, "clicked")}>Đăng xuất</button></li>
            </ul>
          </div>
        </div>)}     

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