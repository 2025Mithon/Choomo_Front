import Background from "../components/Background";
import styled from "@emotion/styled";
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const LC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

const LoginContainer = styled.div`
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
`

const LoginMessage1 = styled.p`
    font-size: 32px;
    font-weight: bold;
    color: #783A1E;
    text-align: left;
    // margin-bottom: 3px;
`

const LoginMessage2 = styled.p`
    font-size: 24px;
    color: #797979;
    text-align: left;
    margin-bottom: 52px
`

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
`

const LoginFormInput = styled.input`
    width: 448px;
    border-radius: 1000px;
    border: 1px solid #91614A;
    height: 64px;
    gap: 10px;
    align-self: stretch;
    padding-left: 20px;
    background: #FFF;
    margin-bottom: 14px;
    font-weight: 500;

`

const LoginFormButton = styled.button`
  margin-top: 50px;
  width: 448px;
  height: 64px;
  border: none;              
  border-radius: 1000px;
  background: #783A1E;
  color: #FFF;
  font-weight: 500;
  font-size: 18px;           
  display: flex;             
  justify-content: center;   
  align-items: center;       
  cursor: pointer;           
  outline: none;             
`;

const SignUPMsg = styled.p`
    color: #854C32;
    font-size: 20px;
    font-weight: 500;
    text-decoration-line: underline;
`
const Link2 = styled(Link)`
    color: rgba(145, 97, 74, 0.40);
`


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://172.20.10.3:8080/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "email" : email, "passwd" : password }),
            });
            

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('jwt_token', data.token);
                navigate('/'); // Redirect to Kakaomap page
            } else {
                const errorData = await response.json();
                console.error('Login failed:', errorData);
                alert(`로그인 실패: ${errorData.message || response.statusText}`);
            }
        } catch (error) {
            console.error('Network error or unexpected issue:', error);
            alert('네트워크 오류 또는 예상치 못한 문제가 발생했습니다.');
        }
    };

    return (
        <>
          <Background />
          <LC>
            <LoginContainer>
            <LoginMessage1>로그인 하기</LoginMessage1>
            <LoginMessage2>이메일로 로그인 하세요.</LoginMessage2>
            <LoginForm onSubmit={handleSubmit}>
                <LoginFormInput 
                    type="email" 
                    placeholder="이메일 주소" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <LoginFormInput 
                    type="password" 
                    placeholder="비밀번호" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <LoginFormButton type="submit">로그인하기</LoginFormButton>
                <SignUPMsg><Link to="/SignUP">회원가입하기</Link></SignUPMsg>
            </LoginForm>
          </LoginContainer>

          </LC>
          
        </>
    )
}

