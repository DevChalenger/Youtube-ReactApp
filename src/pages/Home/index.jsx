import SideBar from "../../components/SideBar";

import { StyledHome } from "./style";

const Home = () => {
  return (
    <StyledHome>
      <SideBar />
      <section className="home-container section-container"></section>
    </StyledHome>
  );
};

export default Home;
