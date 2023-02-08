import { StyledSideBarClose } from "./style";
import { Link } from "react-router-dom";
import { navCloseItem } from "./navItems";

const Close = () => {
  return (
    <StyledSideBarClose>
      <ul>
        {navCloseItem.map((item, index) => (
          <li key={index}>
            <Link>
              {item.iconInactive}

              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </StyledSideBarClose>
  );
};

export default Close;
