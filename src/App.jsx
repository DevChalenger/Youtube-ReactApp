import {
  BrowserRouter as Router,
  Route,
  Routes as Navigation,
} from "react-router-dom";
import Home from "./pages/Home";

import styled from "styled-components";
import Header from "./components/Header";
import GlobalStyle from "./utils/styles/GlobalStyle";

const StyledApp = styled.div`
  color: #ffffff;
  background-color: #0f0f0f;
  min-height: 100vh;
`;

const App = () => {
  return (
    <StyledApp className="App">
      <GlobalStyle />
      <Router>
        <Header />
        <Navigation>
          <Route exact path="/" element={<Home />} />
        </Navigation>
      </Router>
    </StyledApp>
  );
};

export default App;
