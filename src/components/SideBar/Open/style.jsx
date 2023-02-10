import styled from "styled-components";

const StyledSideBarOpen = styled.nav`
  width: 224px;
  section {
    padding: 12px;
  }
  ul {
    &.collapse {
      margin-top: 12px;
      padding-top: 12px !important;
      border-top: 1px inset rgba(255, 255, 255, 0.3);
    }
    li {
      height: 40px;
      a {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 1.5em;
      }
    }
  }
`;

export { StyledSideBarOpen };
