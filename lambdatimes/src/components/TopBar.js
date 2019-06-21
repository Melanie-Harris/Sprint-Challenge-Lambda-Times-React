import React from "react";
import styled from "styled-components";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

// converted className="top-bar"
const Topbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

// converted className="container"
const TopBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;

  @media (min-width: 1280px) {
    .top-bar .container {
      width: 1280px;
    }
  }
`;

// converted className="container-left" 
const ContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

// converted span of className="container-left"
const ContainerLeftSpan = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

// converted span of className="container-center"
const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

// converted span of className="container-center"
const ContainerCenterSpan = styled.span`
  cursor: pointer;
  margin-right: 5%;
  &:hover {
    text-decoration: underline;
  }
`;

// converted span sub-characteristics of className="container-center"
const ContainerCenterSpanLastChild = styled.span`
  margin-right: 0;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

// converted span of className="container-right"
const ContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;
// converted span of className="container-right"
const ContainerRightSpan = styled.span`
  cursor: pointer;
`;

// invocation
const TopBar = () => {
  return (
    <Topbar>
      <TopBarContainer>
        <TopBarContainer>
          <ContainerLeft>
            <ContainerLeftSpan>TOPICS</ContainerLeftSpan>
            <ContainerLeftSpan>SEARCH</ContainerLeftSpan>
          </ContainerLeft>

          <ContainerCenter>
            <ContainerCenterSpan>GENERAL</ContainerCenterSpan>
            <ContainerCenterSpan>BROWNBAG</ContainerCenterSpan>
            <ContainerCenterSpan>RANDOM</ContainerCenterSpan>
            <ContainerCenterSpan>MUSIC</ContainerCenterSpan>
            <ContainerCenterSpanLastChild>
              ANNOUNCEMENTS
            </ContainerCenterSpanLastChild>
          </ContainerCenter>

          <ContainerRight>
            <ContainerRightSpan>LOG IN</ContainerRightSpan>
          </ContainerRight>

        </TopBarContainer>
      </TopBarContainer>
    </Topbar>
  );
};


export default TopBar;
