// Inactive Icon
import {
  EmojiFlagsOutlined,
  FeedbackOutlined,
  HelpOutline,
  SettingsOutlined,
} from "@mui/icons-material/";

// Active Icon
import { Settings, Help, EmojiFlags, Feedback } from "@mui/icons-material/";

export const supportNavItems = [
  {
    iconActive: <Settings />,
    iconInactive: <SettingsOutlined />,
    name: "Settings",
  },
  {
    iconActive: <EmojiFlags />,
    iconInactive: <EmojiFlagsOutlined />,
    name: "Report history",
  },
  {
    iconActive: <Help />,
    iconInactive: <HelpOutline />,
    name: "Help",
  },
  {
    iconActive: <Feedback />,
    iconInactive: <FeedbackOutlined />,
    name: "Send feedback",
  },
];
