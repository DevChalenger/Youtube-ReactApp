import styled from "styled-components";
import { darkMode } from "../../../utils/styles/color";

const StyledSideBarClose = styled.nav`
  width: 64px;
  padding: 0 4px;
  box-sizing: content-box;
  ul {
    margin-top: 4px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    li {
      display: block;
      border-radius: 0.5em;
      &:hover {
        background-color: ${darkMode.secondBackground};
      }
      &:active,
      &:focus {
        background-color: rgba(255, 255, 255, 0.2);
      }
      a {
        width: 64px;
        padding: 16px 0 14px;
        display: flex;
        flex-direction: column;
        gap: 7px;
        align-items: center;
        justify-content: center;
        span {
          display: block;
          font-size: 11px;
          max-width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
`;

export { StyledSideBarClose };
