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
import { useContext, useRef, useState } from "react";

import { SideBarContext } from "../../utils/context/sidebar";
import { Button, IconButton, Tooltip } from "@mui/material";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SideBarContext);
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef();
  const [value, setValue] = useState("");

  return (
    <StyledHeader>
      <LeftColumn className="col">
        <IconButton onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon />
        </IconButton>
        <div className="logo-container">
          <Tooltip title="Youtube Logo">
            <Link>
              <Youtube className="youtube-logo" />
              <span className="country-code">FR</span>
            </Link>
          </Tooltip>
        </div>
      </LeftColumn>
      <CenterColumn className="col">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <div className={`form-control ${isFocus && "onFocus"}`}>
            {isFocus && <SearchIcon className="search-focus" />}
            <input
              value={value}
              ref={inputRef}
              placeholder="Search"
              onChange={(e) => setValue(e.target.value)}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
            />
            {value.length ? (
              <CloseIcon
                className="close"
                onClick={() => {
                  setValue("");
                  inputRef.current.focus();
                }}
              />
            ) : (
              ""
            )}
          </div>
          <Tooltip title="Search">
            <button className="search">
              <SearchIcon />
            </button>
          </Tooltip>
        </form>
        <Tooltip title="Search with your voice">
          <button className="micro">
            <MicroIcon />
          </button>
        </Tooltip>
      </CenterColumn>
      <RightColumn className="col">
        <Tooltip title="Create">
          <button>
            <VideoCallIcon />
          </button>
        </Tooltip>
        <Tooltip title="Notification">
          <button>
            <NotificationIcon />
          </button>
        </Tooltip>
        <button>
          <AvatarIcon />
        </button>
      </RightColumn>
    </StyledHeader>
  );
};

export default Header;
