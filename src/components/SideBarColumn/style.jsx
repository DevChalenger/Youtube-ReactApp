import styled from "styled-components";

const StyledSideBarCol = styled.nav`
  width: 64px;
  margin: 0 4px;
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    li {
      padding: 1em;
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5em;
        span {
          font-size: 11px;
        }
      }
    }
  }
`;

export { StyledSideBarCol };
