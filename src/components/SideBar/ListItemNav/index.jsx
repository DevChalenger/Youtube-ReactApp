import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const ListItemNav = ({ item }) => {
  const { pathname, search } = useLocation();

  console.log(search);

  return (
    <Tooltip title={item.name} placement="right">
      <ListItem
        sx={{
          borderRadius: "10px",
          backgroundColor:
            pathname + search === item.link ? "rgba(255,255,255,0.1)" : "",
          "&:hover": {
            backgroundColor:
              pathname + search === item.link
                ? "rgba(255,255,255,0.2)"
                : "rgba(255,255,255,0.1)",
          },
        }}
      >
        <Link exact="true" to={item.link || "/"}>
          <ListItemButton
            role={undefined}
            sx={{ borderRadius: "10px", height: "100%" }}
          >
            <ListItemIcon>
              {pathname + search === item.link
                ? item.iconActive
                : item.iconInactive}
            </ListItemIcon>
            <ListItemText>{item.name}</ListItemText>
          </ListItemButton>
        </Link>
      </ListItem>
    </Tooltip>
  );
};

export default ListItemNav;
