import { StyledSideBarClose } from "./style";
import { navCloseItem } from "./navItems";

import { List } from "@mui/material";
import ListItemNav from "../ListItemNav";

const Close = () => {
  return (
    <StyledSideBarClose>
      <section>
        <List>
          {navCloseItem.map((item, index) => (
            <ListItemNav key={index} item={item} />
          ))}
        </List>
      </section>
    </StyledSideBarClose>
  );
};

export default Close;
