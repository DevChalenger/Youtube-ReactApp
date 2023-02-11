import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 16px 24px 0 !important;
  display: flex;
  flex-direction: column;
  gap: 0.75em;
  span {
    font-size: 12px;
    font-weight: bold;
    color: #aaaaaa;
    &.licence {
      font-size: 12px;
      color: #717171;
      font-weight: lighter;
    }
  }
  ul {
    margin: 0;
    display: flex;
    flex-wrap: wrap;

    a {
      display: inline;
      height: auto;
    }
    li {
      height: auto;
      display: inline;
      margin-right: 8px;
    }
  }
`;

export { StyledFooter };
