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
import SideBar from "./components/SideBar";
import CustomNavigationLoader from "./utils/CustomNavigationLoader";

const StyledApp = styled.div`
  color: ${darkMode.primaryColor};
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
          <main>
            <SideBar />
            <CustomNavigationLoader>
              <Route exact path="/" element={<Home />} />
            </CustomNavigationLoader>
          </main>
        </Router>
      </SideBarProvider>
    </StyledApp>
  );
};

export default App;
