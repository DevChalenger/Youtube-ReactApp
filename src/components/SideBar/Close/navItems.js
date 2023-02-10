// Inactive Icon
import {
  VideoLibraryOutlined,
  SubscriptionsOutlined,
  PhoneAndroidOutlined,
  HomeOutlined,
} from "@mui/icons-material/";

// Active Icon
import {
  Home,
  PhoneAndroid,
  Subscriptions,
  VideoLibrary,
} from "@mui/icons-material/";
import { darkMode } from "../../../utils/styles/color";

export const navCloseItem = [
  {
    iconActive: <Home sx={{ color: darkMode.primaryColor }} />,
    iconInactive: <HomeOutlined sx={{ color: darkMode.primaryColor }} />,
    name: "Home",
  },
  {
    iconActive: <PhoneAndroid sx={{ color: darkMode.primaryColor }} />,
    iconInactive: (
      <PhoneAndroidOutlined sx={{ color: darkMode.primaryColor }} />
    ),
    name: "Shorts",
  },
  {
    iconActive: <Subscriptions sx={{ color: darkMode.primaryColor }} />,
    iconInactive: (
      <SubscriptionsOutlined sx={{ color: darkMode.primaryColor }} />
    ),
    name: "Subscriptions",
  },
  {
    iconActive: <VideoLibrary sx={{ color: darkMode.primaryColor }} />,
    iconInactive: (
      <VideoLibraryOutlined sx={{ color: darkMode.primaryColor }} />
    ),
    name: "Library",
  },
];
