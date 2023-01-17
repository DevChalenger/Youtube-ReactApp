import { useContext } from "react";
import SideBarCol from "../../components/SideBarClose";

import SideBarOpen from "../../components/SideBarOpen";
import { SideBarContext } from "../../utils/context/sidebar";
import { StyledHome } from "./style";

const Home = () => {
  const { isOpen } = useContext(SideBarContext);
  return (
    <StyledHome>
      {isOpen ? <SideBarOpen /> : <SideBarCol />}

      <section className="home-container section-container"></section>
    </StyledHome>
  );
};

export default Home;
