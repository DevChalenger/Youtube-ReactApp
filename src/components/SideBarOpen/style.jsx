import styled from "styled-components";

const StyledSideBarOpen = styled.article`
  box-sizing: content-box;
  width: 224px;

  section {
    padding: 12px;
    h3 {
      padding: 0 0.5em;
      font-weight: 500;
      font-size: 16px;
    }
    ul {
      &.collapse {
        margin-top: 12px;
        padding-top: 12px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
      }
      display: flex;
      flex-direction: column;
      li {
        height: 40px;
        display: flex;
        a {
          padding: 0 0.75em;
          flex: 1;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1.5em;
        }
      }
    }
  }
  span {
    font-size: 14px;
  }
`;

export { StyledSideBarOpen };
