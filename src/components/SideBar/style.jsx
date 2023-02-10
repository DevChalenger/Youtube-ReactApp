import styled from "styled-components";

const StyledSideBar = styled.article`
  overflow: auto;

  span {
    font-size: 14px;
  }
  li {
    padding: 0;
    a {
      display: flex;
    }
  }
  .MuiListItemButton-root {
    padding-left: 12px;
  }
`;

export { StyledSideBar };
