import { ReactComponent as Youtube } from "../../assets/svg/youtube.svg";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MicroIcon from "@mui/icons-material/Mic";
import AvatarIcon from "@mui/icons-material/AccountCircle";
import NotificationIcon from "@mui/icons-material/NotificationsNone";
import VideoCallIcon from "@mui/icons-material/VideoCallOutlined";
import CloseIcon from "@mui/icons-material/Close";

import { CenterColumn, LeftColumn, RightColumn, StyledHeader } from "./style";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState("");
  return (
    <StyledHeader>
      <LeftColumn className="col">
        <button>
          <MenuIcon />
        </button>
        <div className="logo-container">
          <Link>
            <Youtube className="youtube-logo" />
            <span className="country-code">FR</span>
          </Link>
        </div>
      </LeftColumn>
      <CenterColumn className="col">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <div className={`form-control ${isFocus && "onFocus"}`}>
            {isFocus && <SearchIcon className="search-focus" />}
            <input
              value={value}
              placeholder="Search"
              onChange={(e) => setValue(e.target.value)}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
            />
            {value.length ? (
              <CloseIcon className="close" onClick={() => setValue("")} />
            ) : (
              ""
            )}
          </div>
          <div>
            <button className="search">
              <SearchIcon />
            </button>
          </div>
        </form>
        <button className="micro">
          <MicroIcon />
        </button>
      </CenterColumn>
      <RightColumn className="col">
        <button>
          <VideoCallIcon />
        </button>
        <button>
          <NotificationIcon />
        </button>
        <button>
          <AvatarIcon />
        </button>
      </RightColumn>
    </StyledHeader>
  );
};

export default Header;
