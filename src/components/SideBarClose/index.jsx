import { StyledSideBarClose } from "./style";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/HomeOutlined";
import ShortIcon from "@mui/icons-material/SmartDisplayOutlined";
import SubscriptionsIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryIcon from "@mui/icons-material/VideoLibraryOutlined";

const SideBarClose = () => {
  return (
    <StyledSideBarClose>
      <section>
        <ul>
          <li>
            <Link to="/#home">
              <HomeIcon />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/#short">
              <ShortIcon />
              <span>Shorts</span>
            </Link>
          </li>
          <li>
            <Link to="/#subscription">
              <SubscriptionsIcon />
              <span>Subscription</span>
            </Link>
          </li>
          <li>
            <Link to="/#library">
              <VideoLibraryIcon />
              <span>Library</span>
            </Link>
          </li>
        </ul>
      </section>
    </StyledSideBarClose>
  );
};

export default SideBarClose;
