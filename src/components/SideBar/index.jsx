import { StyledSideBar } from "./style";

import { useContext } from "react";
import { SideBarContext } from "../../utils/context/sidebar";
import Open from "./Open";
import Close from "./Close";

const SideBar = () => {
  const { isOpen } = useContext(SideBarContext);
  return <StyledSideBar>{isOpen ? <Open /> : <Close />}</StyledSideBar>;
};

export default SideBar;
