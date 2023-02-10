import { primaryItems, secondaryItems } from "./mainItems";

import { List } from "@mui/material";
import ListItemNav from "../../ListItemNav";

const Main = () => {
  return (
    <section>
      <List>
        {primaryItems.map((item, index) => (
          <ListItemNav key={index} item={item} />
        ))}
      </List>
      <List className="collapse">
        {secondaryItems.map((item, index) => (
          <ListItemNav key={index} item={item} />
        ))}
      </List>
    </section>
  );
};

export default Main;
