import { StyledSideBarOpen } from "./style";

import { Link } from "react-router-dom";

import {
  HistoryOutlined,
  SmartDisplayOutlined as ShortIcon,
  HomeOutlined as HomeIcon,
  VideoLibraryOutlined as VideoLibraryIcon,
  SubscriptionsOutlined as SubscriptionsIcon,
  AccessTime,
  List,
  ThumbUpOffAlt,
} from "@mui/icons-material/";
import Subscription from "./Subcription";

const SideBarOpen = () => {
  return (
    <StyledSideBarOpen>
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
        </ul>
        <ul className="collapse">
          <li>
            <Link to="/#library">
              <VideoLibraryIcon />
              <span>Library</span>
            </Link>
          </li>
          <li>
            <Link to="/#history">
              <HistoryOutlined />
              <span>History</span>
            </Link>
          </li>
          <li>
            <Link to="/#history">
              <AccessTime />
              <span>Watch Later</span>
            </Link>
          </li>
          <li>
            <Link to="/#history">
              <List />
              <span>PlayList</span>
            </Link>
          </li>
          <li>
            <Link to="/#history">
              <List />
              <span>PlayList</span>
            </Link>
          </li>
          <li>
            <Link to="/#history">
              <ThumbUpOffAlt />
              <span>Liked videos</span>
            </Link>
          </li>
        </ul>
      </section>
      <Subscription />
    </StyledSideBarOpen>
  );
};

export default SideBarOpen;
