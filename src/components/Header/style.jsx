import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 1em;
  .col {
    display: flex;
    align-items: center;
  }
`;

//Left Column
const LeftColumn = styled.div`
  gap: 1em;
  button {
    display: inline-block;
    color: currentColor;
    border: none;
    border-radius: 100%;
    background-color: transparent;
    height: 40px;
    width: 40px;
    padding: 8px;
    cursor: pointer;
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
  .logo-container {
    display: flex;
    font-size: 2em;
    cursor: pointer;
    span {
      color: #aaaaaa;
      position: relative;
      bottom: 5px;
      left: 4px;
      font-size: 10px;
      font-weight: 100;
    }
  }
`;

const RightColumn = styled.div``;

const CenterColumn = styled.div``;

export { StyledHeader, LeftColumn, CenterColumn, RightColumn };
