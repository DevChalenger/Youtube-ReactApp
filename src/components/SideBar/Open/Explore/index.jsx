import { List } from "@mui/material";
import ListItemNav from "../../ListItemNav";
import { exploreNavItems } from "./exploreItems";

const Explore = () => {
  return (
    <section className="unique">
      <h3>Explore</h3>
      <List>
        {exploreNavItems.map((item, index) => (
          <ListItemNav key={index} item={item} />
        ))}
      </List>
    </section>
  );
};

export default Explore;
