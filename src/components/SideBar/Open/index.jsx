import Explore from "./Explore";
import Main from "./Main";
import { StyledSideBarOpen } from "./style";
import Subscription from "./Subcription";

const Open = () => {
  return (
    <StyledSideBarOpen>
      <Main />
      <Subscription />
      <Explore />
    </StyledSideBarOpen>
  );
};

export default Open;
