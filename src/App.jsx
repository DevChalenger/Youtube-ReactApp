import {
  BrowserRouter as Router,
  Route,
  Routes as Navigation,
} from "react-router-dom";
import Home from "./pages/Home";

import styled from "styled-components";

import Header from "./components/Header";

import GlobalStyle from "./utils/styles/GlobalStyle";
import { darkMode } from "./utils/styles/color";
import { SideBarProvider } from "./utils/context/sidebar";

const StyledApp = styled.div`
  color: ${darkMode.appColor};
  background-color: ${darkMode.appBackground};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  main {
    display: flex;
    flex: 1;
    .section-container {
      flex: 1;
    }
  }
`;

const App = () => {
  return (
    <StyledApp className="App">
      <SideBarProvider>
        <GlobalStyle />
        <Router>
          <Header />
          <Navigation>
            <Route exact path="/" element={<Home />} />
          </Navigation>
        </Router>
      </SideBarProvider>
    </StyledApp>
  );
};

export default App;
