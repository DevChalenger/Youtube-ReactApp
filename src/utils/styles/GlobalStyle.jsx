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
    text-decoration:none;
  }
  button{
    color: currentColor;
    border: none;
    background-color: transparent;
    cursor: pointer;
    height: 40px;
    width: 40px;
    padding: 8px;
    border-radius: 100%;
    &:hover {
      background-color: rgba(255, 255, 255, 0.1)!important;
    }
    &:active{
      background-color: rgba(255, 255, 255, 0.25)!important;
    }
  }
  ul{
    padding:0;
    list-style:none;
  }
  svg{
    height:24px;
  }
  input {
    color:currentColor;
    background-color: transparent;
    border:none;
    outline:none;
  }
  
`;

const GlobalStyle = () => {
  return <StyledGlobalStyle />;
};

export default GlobalStyle;
