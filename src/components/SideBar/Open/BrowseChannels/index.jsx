import { AddCircle, AddCircleOutline } from "@mui/icons-material";
import { List } from "@mui/material";
import ListItemNav from "../../ListItemNav";

const BrowseChannelItem = {
  iconActive: <AddCircle />,
  iconInactive: <AddCircleOutline />,
  name: "Browse channels",
};

const BrowseChannel = () => {
  return (
    <section className="unique">
      <List>{<ListItemNav item={BrowseChannelItem} />}</List>
    </section>
  );
};

export default BrowseChannel;
