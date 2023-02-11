import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { aboutList, privacyList } from "./footer_items";
import { StyledFooter } from "./style";

const Footer = () => {
  return (
    <StyledFooter className="unique">
      <ul>
        {aboutList.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <ul>
        {privacyList.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Box sx={{ marginBottom: 2 }}>
        <span className="licence">© 2023 Google LLC</span>
      </Box>
    </StyledFooter>
  );
};

export default Footer;
