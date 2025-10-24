import styled from '@emotion/styled';
import Nav from '../components/Nav';
import React, { useEffect, useRef } from 'react';
import SearchIcon from '../assets/ic_search.svg';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
`;

const Map = styled.div`
    flex: 1;
    position: relative;
`;

const FindBox = styled.div`
    width: 365px;
    background-color: white;
    height: 100vh;
    padding-top: 32px;
    display: flex;
    flex-direction: columm;
    justify-content: center;
`;

const Search = styled.div`
    width: 294px;
    height: 44px;
    border: 1px solid #D89E83;
    border-radius: 100px;
    display: flex;
`;



const SearchInput = styled.input`
    margin: 10px 16px 10px 0px;
    border: none;

    &:select {
        border: none;
    }
`;

const SearchButton = styled.div`
    margin: 10px 10px 10px 16px;
`;

const AuthButtonContainer = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    gap: 10px; /* Space between buttons */
`;

const AuthButton = styled.button`
    padding: 8px 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: white;
    cursor: pointer;
    font-size: 14px;
    &:hover {
        background-color: #f0f0f0;
    }
`;

export default function Kakaomap() {
    const container = useRef(null); // 지도를 담을 DOM 레퍼런스
    const mapInstance = useRef(null); // 생성된 지도 인스턴스를 저장할 ref

    useEffect(() => {
        let isMounted = true; // 1. 마운트 상태를 추적하는 플래그

        // 1. window 객체에 kakao.maps가 존재하는지 안전하게 확인
        window.kakao.maps.load(() => {
            if (isMounted && container.current && !mapInstance.current) {
                const options = {
                    center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                    level: 3,
                };
                mapInstance.current = new window.kakao.maps.Map(container.current, options);
            }
        });

        // 4. Cleanup 함수
        return () => {
            isMounted = false;
            mapInstance.current = null;
        };
    }, []); // 4. 마운트 시점에 한 번만 실행

    return (
        <Container>
            <Nav index='1' />
            <FindBox>
                <Search>
                    <SearchButton><img src={SearchIcon} alt="" /></SearchButton>
                    <SearchInput type="text" name="keyword" />
                </Search>
            </FindBox>
            <Map ref={container}>
                <AuthButtonContainer>
                    <AuthButton>로그인</AuthButton>
                    <AuthButton>회원가입</AuthButton>
                </AuthButtonContainer>
            </Map>
        </Container>
    );
}