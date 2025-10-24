import Background from "../components/Background";
import styled from "@emotion/styled";
import { Link } from 'react-router-dom';
import SignUP from "./SignUP";

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
  border: none;              /* ✅ 기본 테두리 제거 */
  border-radius: 1000px;
  background: #783A1E;
  color: #FFF;
  font-weight: 500;
  font-size: 18px;           /* ✅ 글자 크기 추가 */
  display: flex;             /* ✅ 가운데 정렬용 */
  justify-content: center;   /* ✅ 수평 중앙 정렬 */
  align-items: center;       /* ✅ 수직 중앙 정렬 */
  cursor: pointer;           /* ✅ 클릭 가능한 모양 */
  outline: none;             /* ✅ 클릭 시 파란 테두리 제거 (필요 시) */
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
    return (
        <>
          <Background />
          <LC>
            <LoginContainer>
            <LoginMessage1>로그인 하기</LoginMessage1>
            <LoginMessage2>이메일로 로그인 하세요.</LoginMessage2>
            <LoginForm>
                <LoginFormInput type="email" placeholder="이메일 주소" />
                <LoginFormInput type="password" placeholder="비밀번호" />
                <LoginFormButton type="submit">로그인하기</LoginFormButton>
                <SignUPMsg><Link2 to="/SignUP">회원가입하기</Link2></SignUPMsg>
            </LoginForm>
          </LoginContainer>

          </LC>
          
        </>
    )
}

