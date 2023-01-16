import SideBarColumn from "../../components/SideBarColumn";
import { StyledHome } from "./style";

const Home = () => {
  return (
    <StyledHome>
      <SideBarColumn />
      <section className="home-container section-container"></section>
    </StyledHome>
  );
};

export default Home;
