// Primary inactives Icon
import {
  HomeOutlined,
  PhoneAndroidOutlined,
  SubscriptionsOutlined,
} from "@mui/icons-material/";

// Primary actives Icon
import { Home, PhoneAndroid, Subscriptions } from "@mui/icons-material/";

// Secondary inactives Icon
import {
  VideoLibraryOutlined,
  HistoryOutlined,
  SmartDisplayOutlined,
  AccessTimeOutlined,
  PlaylistPlayOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material/";

// Secondary actives Icon
import {
  VideoLibrary,
  History,
  SmartDisplay,
  AccessTime,
  PlaylistPlay,
  ThumbUpAlt,
} from "@mui/icons-material/";
import { darkMode } from "../../../../utils/styles/color";

export const primaryItems = [
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
];

export const secondaryItems = [
  {
    iconActive: <VideoLibrary sx={{ color: darkMode.primaryColor }} />,
    iconInactive: (
      <VideoLibraryOutlined sx={{ color: darkMode.primaryColor }} />
    ),
    name: "Library",
  },
  {
    iconActive: <History sx={{ color: darkMode.primaryColor }} />,
    iconInactive: <HistoryOutlined sx={{ color: darkMode.primaryColor }} />,
    name: "History",
  },
  {
    iconActive: <SmartDisplay sx={{ color: darkMode.primaryColor }} />,
    iconInactive: (
      <SmartDisplayOutlined sx={{ color: darkMode.primaryColor }} />
    ),
    name: "Your videos",
  },
  {
    iconActive: <AccessTime sx={{ color: darkMode.primaryColor }} />,
    iconInactive: <AccessTimeOutlined sx={{ color: darkMode.primaryColor }} />,
    name: "Watch Later",
  },
  {
    iconActive: <ThumbUpAlt sx={{ color: darkMode.primaryColor }} />,
    iconInactive: <ThumbUpAltOutlined sx={{ color: darkMode.primaryColor }} />,
    name: "Liked vidéos",
  },
  {
    iconActive: <PlaylistPlay sx={{ color: darkMode.primaryColor }} />,
    iconInactive: (
      <PlaylistPlayOutlined sx={{ color: darkMode.primaryColor }} />
    ),
    name: "Playlist",
  },
];
