import React from 'react';
import styled from "styled-components";

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

// converted className="header"
const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
  @media (min-width: 1280px) {
  .header {
    width: 1280px;
  }
}
`;

// converted className="date" with span
 const DateSpan = styled.span`
   margin-left: 25px;
   flex: 1;
   align-self: flex-end;
   font-size: 11px;
   font-weight: bold;
   letter-spacing: 1px;
 `;

 // converted h1 tag

 const H1 = styled.h1`
   font-size: 60px;
   font-family: Didot, serif;
   font-weight: bold;
   flex: 8;
   text-align: center;
   color: #000;
 `;

 // converted className="temp" with span
 const TempSpan = styled.span`
   text-align: right;
   margin-right: 25px;
   flex: 1;
  //  added styles from span
   align-self: flex-end;
   font-size: 11px;
   font-weight: bold;
   letter-spacing: 1px;
 `;


const Header = () => {
  return (
    <StyledHeader>
      <DateSpan> MARCH 32, 2018 </DateSpan>
      <H1> Lambda Times </H1>
      <TempSpan> 98° </TempSpan>
    </StyledHeader>
  )
}

export default Header;