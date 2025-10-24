import styled from '@emotion/styled';
import Nav from '../components/Nav';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
    z-index: 10;
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
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

    useEffect(() => {
        const token = localStorage.getItem('jwt_token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);



    let latitude;
    let longitude;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;
                console.log(`위도: ${latitude}, 경도: ${longitude}`);
            },
            (error) => {
                console.error("위치 정보를 가져오는 중 오류가 발생했습니다:", error);
            }
        );
    } else {
        console.log("이 브라우저에서는 위치 서비스를 지원하지 않습니다.");
    }

    useEffect(() => {
        let isMounted = true; // 1. 마운트 상태를 추적하는 플래그

        // 1. window 객체에 kakao.maps가 존재하는지 안전하게 확인
        window.kakao.maps.load(() => {
            if (isMounted && container.current && !mapInstance.current) {
                const options = {
                    center: new window.kakao.maps.LatLng(latitude, longitude),
                    level: 3,
                };
                mapInstance.current = new window.kakao.maps.Map(container.current, options);

                var marker = new window.kakao.maps.Marker({
                    // 지도 중심좌표에 마커를 생성합니다 
                    position: mapInstance.current.getCenter()
                });
                // 지도에 마커를 표시합니다
                marker.setMap(mapInstance.current);

                window.kakao.maps.event.addListener(mapInstance.current, 'click', function (mouseEvent) {

                    // 클릭한 위도, 경도 정보를 가져옵니다 
                    let latlng = mouseEvent.latLng;
                    marker.setPosition(latlng);

                    let Lat = latlng.getLat();
                    let Lng = latlng.getLng();

                    var iwContent = "<div style='width: 275px; height: 282px; border: 1px solid #A33D0E;'><div style='height: 150px'><div style='height:150px;background-image:url('https://i.imgur.com/L4yqR5G.png');background-size:cover;background-position:center;border-top-left-radius:12px;border-top-right-radius:12px'></div><div style='padding:16px 16px 12px 16px'><h3 style='margin:0 0 4px 0;font-size:18px;font-weight:bold;color:#222'>성수 수제화거리</h3><p style='margin:0;font-size:14px;color:#666'>서울 성동구 성수역 1, 2번 출구</p></div><div style='padding:0 16px 16px 16px;display:flex;gap:8px'><button class='btn-primary' style='flex:1;padding:10px;border-radius:8px;font-size:15px;font-weight:bold;cursor:pointer;transition:all .2s;background-color:#E86338;color:white;border:1px solid #E86338'>회상하기</button><button class='btn-secondary' style='flex:1;padding:10px;border-radius:8px;font-size:15px;font-weight:bold;cursor:pointer;transition:all .2s;background-color:#fff;color:#333;border:1px solid #ccc' onclick='window.location.href=`http://localhost:5173/MemoryCreate`'>새 추억 만들기</button></div></div ></div > ", // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
                    iwPosition = new window.kakao.maps.LatLng(Lat, Lng), //인포윈도우 표시 위치입니다
                        iwRemoveable = true;

                    var infowindow = new window.kakao.maps.InfoWindow({
                        position: iwPosition,
                        content: iwContent,
                        removable: iwRemoveable
                    });

                    infowindow.open(mapInstance.current, marker);
                });


            }
        });

        // 4. Cleanup 함수
        return () => {
            isMounted = false;
            if (container.current) {
                container.current.innerHTML = ''; // Clear the map container
            }
            mapInstance.current = null;
        };
    }, []); // 4. 마운트 시점에 한 번만 실행

    const navigate = useNavigate();
    async function handleLogout() {
        try {
            const response = await fetch('http://172.20.10.3:8080/api/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: {}
            });


            if (response.ok) {
                localStorage.removeItem('jwt_token');
                setIsLoggedIn(false); // Update login state
                navigate('/'); // Redirect to Kakaomap page
            } else {
                const errorData = await response.json();
                console.error('Login failed:', errorData);
                alert(`로그아웃 실패: ${errorData.message || response.statusText}`);
            }
        } catch (error) {
            console.error('Network error or unexpected issue:', error);
            alert('네트워크 오류 또는 예상치 못한 문제가 발생했습니다.');
        }
    }
    return (
        <Container>
            <Nav index='1' />
            <FindBox>
                <Search>
                    <SearchButton><img src={SearchIcon} alt="" /></SearchButton>
                    <SearchInput type="text" name="keyword" placeholder='추억 장소 검색하기' />
                    <p id="result"></p>
                </Search>
            </FindBox>
            <Map
                ref={container}
            >
                {!isLoggedIn && (
                    <AuthButtonContainer>
                        <Link to="/Login">
                            <AuthButton>로그인</AuthButton>
                        </Link>
                        <Link to="/SignUP">
                            <AuthButton>회원가입</AuthButton>
                        </Link>
                    </AuthButtonContainer>
                )}
                {isLoggedIn && (
                    <AuthButtonContainer>
                        <AuthButton onClick={handleLogout}>로그아웃</AuthButton>
                    </AuthButtonContainer>
                )}
            </Map>
        </Container>
    );
}