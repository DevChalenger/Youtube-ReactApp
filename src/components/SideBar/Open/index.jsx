import BrowseChannel from "./BrowseChannels";
import Explore from "./Explore";
import Main from "./Main";
import Subscription from "./Subcription";
import Supports from "./Supports";

import { StyledSideBarOpen } from "./style";
import Footer from "./Footer";

const Open = () => {
  return (
    <StyledSideBarOpen>
      <Main />
      <Subscription />
      <Explore />
      <BrowseChannel />
      <Supports />
      <Footer />
    </StyledSideBarOpen>
  );
};

export default Open;
