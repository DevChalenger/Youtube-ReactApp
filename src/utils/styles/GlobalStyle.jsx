import { createGlobalStyle } from "styled-components";

const StyledGlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family:"Roboto", "Arial", sans-serif, YT Sans;
  }
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a{
    color:inherit;
  }
  
`;

const GlobalStyle = () => {
  return <StyledGlobalStyle />;
};

export default GlobalStyle;
