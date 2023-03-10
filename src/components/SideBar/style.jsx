import styled from "styled-components";

const StyledSideBar = styled.article`
  height: calc(100vh - 56px);
  &::-webkit-scrollbar {
    display: none;
  }
  &:hover {
    &::-webkit-scrollbar {
      display: block;
    }
  }
  overflow: overlay;
  span {
    font-size: 14px;
  }
  h3 {
    padding-left: 12px;
    margin: 10px 0;
    font-size: 18px;
    font-weight: normal;
  }
  li {
    padding: 0;
  }
  .MuiListItemButton-root {
    padding: 6px;
    padding-left: 12px;
    display: flex;
  }
  a {
    width: 100%;
  }
`;

export { StyledSideBar };
