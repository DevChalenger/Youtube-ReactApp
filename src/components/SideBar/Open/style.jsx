import styled from "styled-components";

const StyledSideBarOpen = styled.nav`
  width: 240px;

  section,
  footer {
    &.unique {
      border-top: 1px solid rgba(255, 255, 255, 0.2);
    }
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
      .MuiListItemButton-root {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 1.5em;
      }
    }
  }
`;

export { StyledSideBarOpen };
