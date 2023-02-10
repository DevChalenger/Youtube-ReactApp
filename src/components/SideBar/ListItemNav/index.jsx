import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import { Link } from "react-router-dom";

const ListItemNav = ({ item }) => {
  return (
    <Tooltip title={item.name} placement="right">
      <ListItem
        sx={{
          borderRadius: "10px",
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.1)",
          },
        }}
      >
        <ListItemButton
          role={undefined}
          sx={{ borderRadius: "10px", height: "100%" }}
        >
          <Link>
            <ListItemIcon>{item.iconInactive}</ListItemIcon>
            <ListItemText>{item.name}</ListItemText>
          </Link>
        </ListItemButton>
      </ListItem>
    </Tooltip>
  );
};

export default ListItemNav;
