import styled from "@emotion/styled"
import Background from "../components/Background";

const LC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

const SignUPContainer = styled.div`
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const SignUPMessage1 = styled.p`
    font-size: 32px;
    font-weight: bold;
    color: #783A1E;
    text-align: left;
    // margin-bottom: 3px;
`

const SignUPMessage2 = styled.p`
    font-size: 24px;
    color: #797979;
    text-align: left;
    margin-bottom: 52px
`

const SignUPForm = styled.form`
    display: flex;
    flex-direction: column;
`

const SignUPInput = styled.input`
    width: 400px;
    border-radius: 1000px;
    border: 1px solid #91614A;
    height: 44px;
    padding: 10px 24px;
    //box-sizing: border-box;
    gap: 10px;
    align-self: stretch;
    background: #FFF;
    margin-bottom: 14px;
    font-weight: 500;
    font-size: 20px;

`

const SignUPButton = styled.button`
    margin-top:50px;
    width: 448px;
    border-radius: 1000px;
    height: 64px;
    // padding: 10px 24px;
    // box-sizing: border-box;
    // display: flex;
    // align-items: center;
    // justify-content: flex-start;
    // text-align: left;
    gap: 10px;
    align-self: stretch;
    background: #783A1E;
    color: #FFF;
    font-weight: 500;
    font-size: 20px;
`


export default function SignUP() {
    return (
        <>

        <Background />
        <LC>
            <SignUPContainer>
            <SignUPMessage1>회원가입 하기</SignUPMessage1>
            <SignUPMessage2>이메일을 입력해 회원가입하세요.</SignUPMessage2>
            <SignUPForm>
                <SignUPInput type="email" placeholder="이메일을 입력하세요" />
                <SignUPInput type="text" placeholder="이름을 입력하세요" />
                <SignUPInput type="text" placeholder="생년월일을 입력하세요. ex) 2000.01.01" />
                <SignUPInput type="text" placeholder="성별을 선택하세요" />
                <SignUPInput type="password" placeholder="비밀번호를 입력하세요" />
                <SignUPButton type="submit">로그인하기</SignUPButton>
            </SignUPForm>
          </SignUPContainer>
        </LC>
        
        </>
       
    )
}