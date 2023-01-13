import { ReactComponent as Youtube } from "../../assets/logo/youtube.svg";
import { ReactComponent as Toggle } from "../../assets/logo/toggle.svg";

import { CenterColumn, LeftColumn, RightColumn, StyledHeader } from "./style";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <LeftColumn className="col">
        <button>
          <Toggle />
        </button>
        <div className="logo-container">
          <Link>
            <Youtube height={20} />
          </Link>
          <span className="country-code">FR</span>
        </div>
      </LeftColumn>
      <CenterColumn className="col">
        <input></input>
      </CenterColumn>
      <RightColumn className="col"> </RightColumn>
    </StyledHeader>
  );
};

export default Header;
