import { List } from "@mui/material";
import ListItemNav from "../../ListItemNav";
import { supportNavItems } from "./supportItems";

const Supports = () => {
  return (
    <section className="unique">
      <List>
        {supportNavItems.map((item, index) => (
          <ListItemNav key={index} item={item} />
        ))}
      </List>
    </section>
  );
};

export default Supports;
