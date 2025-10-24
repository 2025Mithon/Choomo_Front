import styled from '@emotion/styled';
import IconItem from './IconItem';
import LogoImg from '../assets/logo.png';
import { Link } from 'react-router-dom';

const NavBox = styled.nav`
    width: 96px;
    height: 100vh;
    /* float: left; */
    border: solid #d9d9d9;
    border-width: 0px 1px 0px 0px;
`;

const Logo = styled.div`
    width: 96px;
    height: 96px;
    border: solid #d9d9d9;
    border-width: 0px 0px 1px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MenuBtn = styled.div`
    width: 96px;
    height: 96px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.selected ? '#A33D0E' : '#ffffff'};
    color: ${props => props.selected ? '#ffffff' : '#454545'};
`;

const MenuText = styled.div`
    text-align: center;
    margin-top: 5px;
`;

export default function Nav(props) {

    return (
        <NavBox>
            <Logo>
                <Link to="/">
                    <img src={LogoImg} alt="" />
                </Link>
            </Logo>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <MenuBtn selected={props.index === '1'}>
                    <IconItem iconName="icon1" selected={props.index === '1'} />
                    <MenuText>추억찾기</MenuText>
                </MenuBtn>
            </Link>
            <Link to="/chat" style={{ textDecoration: 'none', color: 'inherit' }}>
                <MenuBtn selected={props.index === '2'}>
                    <IconItem iconName="icon2" selected={props.index === '2'} />
                    <MenuText>채팅목록</MenuText>
                </MenuBtn>
            </Link>
            <Link to="/board" style={{ textDecoration: 'none', color: 'inherit' }}>
                <MenuBtn selected={props.index === '3'}>
                    <IconItem iconName="icon3" selected={props.index === '3'} />
                    <MenuText>게시판</MenuText>
                </MenuBtn>
            </Link>
            <Link to="/mypage" style={{ textDecoration: 'none', color: 'inherit' }}>
                <MenuBtn selected={props.index === '4'}>
                    <IconItem iconName="icon4" selected={props.index === '4'} />
                    <MenuText>마이페이지</MenuText>
                </MenuBtn>
            </Link>

        </NavBox>
    );
}