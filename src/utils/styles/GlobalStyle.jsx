import { createGlobalStyle } from "styled-components";
import { darkMode } from "./color";

const StyledGlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    &::-webkit-scrollbar {
      width: 8px;
      height: 10px;
    }
  
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: rgb(100,100,100);
    }
  
    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0);
    }
    font-family:"Roboto", "Noto", sans-serif
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
  h1,h2,h3{
    margin:0;
  }
  .MuiListItemIcon-root{
    min-width:0 !important;
  }
  button{
    color: currentColor !important;
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
  
  }

 ul{
  padding:0 !important;
 }
  input {
    color:currentColor;
    background-color: transparent;
    border:none;
    outline:none;
  }
  .MuiSvgIcon-root{
    color : ${darkMode.primaryColor};
  }
`;

const GlobalStyle = () => {
  return <StyledGlobalStyle />;
};

export default GlobalStyle;
