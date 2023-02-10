import { createGlobalStyle } from "styled-components";

const StyledGlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
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
  
`;

const GlobalStyle = () => {
  return <StyledGlobalStyle />;
};

export default GlobalStyle;
