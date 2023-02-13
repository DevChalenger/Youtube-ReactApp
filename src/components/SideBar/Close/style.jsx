import styled from "styled-components";
/* import { darkMode } from "../../../utils/styles/color"; */

const StyledSideBarClose = styled.nav`
  padding: 4px 2px;
  ul {
    li {
      .MuiListItemButton-root {
        padding: 0;
      }
      .MuiListItemButton-root {
        width: 100%;
        padding: 16px 0 14px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        span {
          display: block;
          white-space: nowrap;
          overflow: hidden;
          font-size: 11px;
          text-overflow: ellipsis;
        }
      }
    }
  }
`;

export { StyledSideBarClose };
