import styled from '@emotion/styled';
import Nav from '../components/Nav';
import React, { useEffect, useRef } from 'react';

const Container = styled.div`
    display: flex;
    height: 100vh;
`;

const Map = styled.div`
    width: 100%;
    flex: 1;
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
            <Nav index='1'/>

            <Map
                ref={container}
            ></Map>
        </Container>
    );
}