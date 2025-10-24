import styled from '@emotion/styled';
import IconItem from './IconItem';
import LogoImg from '../assets/logo.png';

const NavBox = styled.nav`
    width: 96px;
    height: 100vh;
    float: left;
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
`;

const MenuText = styled.div`
    text-align: center;
    margin-top: 5px;
`;

export default function Nav(props) {

    return (
        <NavBox>
            <Logo>
                <a href="/">
                    <img src={LogoImg} alt="" />
                </a>
            </Logo>
            <a href="/" style={{ textDecoration: 'none', color: '#454545' }}>
                <MenuBtn>
                    <IconItem iconName="icon1" />
                    <MenuText>추억찾기</MenuText>
                </MenuBtn>
            </a>
            <a href="/" style={{ textDecoration: 'none', color: '#454545' }}>
                <MenuBtn>
                    <IconItem iconName="icon2" />
                    <MenuText>채팅목록</MenuText>
                </MenuBtn>
            </a>
            <a href="/" style={{ textDecoration: 'none', color: '#454545' }}>
                <MenuBtn>
                    <IconItem iconName="icon3" />
                    <MenuText>게시판</MenuText>
                </MenuBtn>
            </a>
            <a href="/" style={{ textDecoration: 'none', color: '#454545' }}>
                <MenuBtn>
                    <IconItem iconName="icon4" />
                    <MenuText>마이페이지</MenuText>
                </MenuBtn>
            </a>

        </NavBox>
    );
}