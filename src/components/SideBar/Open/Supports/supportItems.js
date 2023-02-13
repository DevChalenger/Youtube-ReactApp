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
    link: "/account",
    name: "Settings",
  },
  {
    iconActive: <EmojiFlags />,
    iconInactive: <EmojiFlagsOutlined />,
    link: "/report_history",
    name: "Report history",
  },
  {
    iconActive: <Help />,
    iconInactive: <HelpOutline />,
    link: "/help",
    name: "Help",
  },
  {
    iconActive: <Feedback />,
    iconInactive: <FeedbackOutlined />,
    link: "/feedback",
    name: "Send feedback",
  },
];
