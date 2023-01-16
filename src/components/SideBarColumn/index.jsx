import { StyledSideBarCol } from "./style";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/HomeOutlined";

const SideBarCol = () => {
  return (
    <StyledSideBarCol>
      <ul>
        <li>
          <Link>
            <HomeIcon />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link>
            {/* <ShortLight /> */}
            <span>Shorts</span>
          </Link>
        </li>
        <li>
          <Link>
            <span>Subscription</span>
          </Link>
        </li>
        <li>
          <Link>
            <span>Libry</span>
          </Link>
        </li>
      </ul>
    </StyledSideBarCol>
  );
};

export default SideBarCol;
