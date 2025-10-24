import React, { useState } from 'react';
import styled from '@emotion/styled';
import round from '../assets/ic_search.svg';
import { Global, css } from '@emotion/react';
import Nav from '../components/Nav';


const MemoryCreatePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    console.log({ title, content, image });
    alert('게시글이 저장되었습니다!');
  };

  // 목업 데이터
  const places = [
    { id: 1, name: '장소명', description: '장소설명', reviews: 1902 },
    { id: 2, name: '장소명', description: '장소설명', reviews: 1902 },
  ];

  return (
    <>
      <Global
        styles={css`
          html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
          }
          #root {
            width: 100%;
            height: 100%;
          }
        `}
      />
      <Container>
        <Nav index='1' />
        <Sidebar>
          <SearchBoxWrapper>
            <SearchIcon><img src={round} alt="" /></SearchIcon>
            <SearchInput
              type="text"
              placeholder="추억 장소 검색하기"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </SearchBoxWrapper>

          {/* 추가: 장소정보 섹션 */}
          <SectionTitle>장소정보</SectionTitle>
          <PlaceListWrapper>
            {places.map((place) => (
              <PlaceCard key={place.id}>
                <PlaceImage />
                <PlaceInfo>
                  <PlaceName>{place.name}</PlaceName>
                  <PlaceDescription>{place.description}</PlaceDescription>
                  <PlaceReviews>후기 {place.reviews.toLocaleString()}개</PlaceReviews>
                </PlaceInfo>
              </PlaceCard>
            ))}
          </PlaceListWrapper>
        </Sidebar>

        <MainSection>
          <PageTitle>새 추억 게시글 작성하기</PageTitle>

          <TitleInputWrapper>
            <TitleInput
              type="text"
              placeholder="추억 제목정하기"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <EditButton onClick={handleSubmit}>✏️</EditButton>
          </TitleInputWrapper>

          <ContentBox>
            <LeftSection>
              <HiddenInput
                id="imageUpload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
              <ImageUploadBox htmlFor="imageUpload">
                {image ? (
                  <UploadedImage src={image} alt="Uploaded" />
                ) : (
                  <UploadText>파일 첨부하기</UploadText>
                )}
              </ImageUploadBox>
            </LeftSection>

            <Divider />

            <RightSection>
              <TextAreaWrapper>
                {!content && <PlaceholderText>추억 게시 내용을 작성하세요.</PlaceholderText>}
                <TextArea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder=""
                />
              </TextAreaWrapper>
            </RightSection>
          </ContentBox>
        </MainSection>
      </Container>
    </>
  );
};


// 전체 레이아웃
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;


// 왼쪽 사이드바
const Sidebar = styled.aside`
  width: 350px;
  height: 100vh;
  background: #fff;
  padding: 42px 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #f0f0f0;
  overflow-y: auto;
  
`;


const SearchBoxWrapper = styled.div`
  width: 100%;
  border-radius: 100px;
  border: 1px solid #d89e83;
  display: flex;
  padding: 10px 16px;
  align-items: center;
  gap: 14px;
  margin-bottom: 30px;
`;


const SearchIcon = styled.span`
  font-size: 18px;
  color: #c4a080;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  color: #333;

  &::placeholder {
    color: #c4a080;
  }
`;


// 추가: 장소정보 섹션
const SectionTitle = styled.h2`
 color: #A33D0E;
font-family: Pretendard;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;


const PlaceListWrapper = styled.div`
 width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
`;


const PlaceCard = styled.div`
 background: white;
  border-radius: 16px;
  border: 1px solid #e8e8e8;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  cursor: pointer;
  transition: all 0.2s;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    border-color: #d89e83;
  }
`;


const PlaceImage = styled.div`
  width: 100%;
  height: 140px;
  background-color: #d9d9d9;
  border-radius: 0;
  flex-shrink: 0;
`;


const PlaceInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  padding: 12px;
`;


const PlaceName = styled.h3`
    font-size: 15px;
  font-weight: bold;
  color: #333;
  margin: 0 0 4px 0;
`;


const PlaceDescription = styled.p`
 font-size: 12px;
  color: #999;
  margin: 0 0 4px 0;
`;


const PlaceReviews = styled.p`
   font-size: 11px;
  color: #999;
  margin: 0;
`;


// 메인 섹션
const MainSection = styled.main`
  flex: 1;
  background: #f5e8e0;
  padding: 40px;
  box-sizing: border-box;
  overflow-y: auto;
`;


const PageTitle = styled.h1`
  color: #A33D0E;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0 0 25px 0;
`;


const TitleInputWrapper = styled.div`
  position: relative;
  margin-bottom: 24px;
`;


const TitleInput = styled.input`
  width: 100%;
  padding: 18px 70px 18px 24px;
  border: 1px solid #d89e83;
  border-radius: 50px;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;
  background-color: #fff;
  color: #333;

  &::placeholder {
    color: #c4a080;
  }

  &:focus {
    border-color: #a67c52;
  }
`;


const EditButton = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  background-color: #a67c52;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  transition: all 0.2s;

  &:hover {
    background-color: #8b4513;
    transform: translateY(-50%) scale(1.05);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }
`;


const ContentBox = styled.div`
  border-radius: 36px;
  border: 1px solid #AC7154;
  background: #FFF;
  padding: 40px;
  display: flex;
  gap: 32px;
  min-height: 641px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;


const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;


const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;


const ImageUploadBox = styled.label`
  width: 100%;
  height: 100%;
  background-color: #cccccc;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  min-height: 420px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #bbb;
  }
`;


const UploadText = styled.span`
  font-size: 16px;
  color: #999;
`;


const UploadedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


const HiddenInput = styled.input`
  display: none;
`;


const Divider = styled.div`
  width: 1px;
  background-color: #e5e5e5;
  align-self: stretch;
`;


const TextAreaWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  min-height: 420px;
`;


const PlaceholderText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  color: #d89e83;
  font-size: 15px;
  pointer-events: none;
  font-family: inherit;
`;


const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 15px;
  font-family: inherit;
  resize: none;
  background-color: transparent;
  line-height: 1.6;
  color: #333;

  &::placeholder {
    color: #d89e83;
  }
`;


export default MemoryCreatePage;
