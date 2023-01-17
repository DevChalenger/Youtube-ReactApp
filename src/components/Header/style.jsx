import styled from "styled-components";
import { darkMode } from "../../utils/styles/color";

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
  .logo-container {
    display: flex;
    font-size: 2em;
    cursor: pointer;
    height: 20px;
    min-width: 90px;
    a {
      display: flex;
      align-items: center;
      height: 20px;
      justify-content: center;
      .youtube-logo {
        height: 100%;
      }
      span {
        color: #aaaaaa;
        position: relative;
        bottom: 10px;
        left: 4px;
        font-size: 9px;
        font-weight: 100;
      }
    }
  }
`;

const CenterColumn = styled.div`
  gap: 0.5em;
  flex: 0 1 700px;
  margin-left: 40px;
  form {
    display: flex;
    height: 40px;
    flex: 1;
    .form-control {
      display: flex;
      align-items: center;
      width: 100%;
      border-radius: 2.5em 0 0 2.5em;
      background-color: rgba(255, 255, 255, 0.01);
      border: 1px solid ${darkMode.border};
      padding: 8px 15px;
      &.onFocus {
        border: 1px solid ${darkMode.focusColor};
      }
      .search-focus {
        margin-right: 10px;
      }
      input {
        width: 100%;
        height: 100%;
        font-size: 16px;
        font-weight: 500;
      }
      .close {
        cursor: pointer;
      }
    }
    .search {
      border-radius: 0 2.5em 2.5em 0;
      height: 40px;
      width: 64px;
      border: 1px solid ${darkMode.border};
      background-color: ${darkMode.secondBackground};
    }
  }
  .micro {
    background-color: ${darkMode.generalBackground};
  }
`;

const RightColumn = styled.div`
  min-width: 225px;
  justify-content: flex-end;
  gap: 1em;
`;

export { StyledHeader, LeftColumn, CenterColumn, RightColumn };
