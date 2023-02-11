import {
  AccountCircleOutlined,
  /*   ExpandLess,
  ExpandMore, */
} from "@mui/icons-material";
import { Box, Button /* IconButton */ } from "@mui/material";
/* import { useState } from "react"; */
import { darkMode } from "../../../../utils/styles/color";

import { StyledSubscription /* SubcriptionItem */ } from "./style";

const Subscription = () => {
  /*   const [isShowMore, setIsShowMore] = useState(false); */
  return (
    <StyledSubscription className="unique">
      <Box
        sx={{
          padding: "16px 20px",
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <span>Sign in to like videos, comment, and subscribe.</span>
        <Button
          sx={{
            color: `${darkMode.action} !important`,
            display: "flex",
            width: "fit-content",
            padding: "7.5px",
            paddingRight: "10px",
            borderRadius: "2em",
            alignItems: "center",
            gap: 1,
            border: "1px solid rgba(255,255,255,0.2)",
            cursor: "pointer",
            textTransform: "none",
            "&:hover": {
              border: "1px solid rgba(255,255,255,0)",
            },
          }}
        >
          <AccountCircleOutlined />

          <span>Sign in</span>
        </Button>
      </Box>
    </StyledSubscription>
  );
};

export default Subscription;
