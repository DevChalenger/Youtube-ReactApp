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

export const primaryItems = [
  {
    iconActive: <Home />,
    iconInactive: <HomeOutlined />,
    name: "Home",
  },
  {
    iconActive: <PhoneAndroid />,
    iconInactive: <PhoneAndroidOutlined />,
    name: "Shorts",
  },
  {
    iconActive: <Subscriptions />,
    iconInactive: <SubscriptionsOutlined />,
    name: "Subscriptions",
  },
];

export const secondaryItems = [
  {
    iconActive: <VideoLibrary />,
    iconInactive: <VideoLibraryOutlined />,
    name: "Library",
  },
  {
    iconActive: <History />,
    iconInactive: <HistoryOutlined />,
    name: "History",
  },
  {
    iconActive: <SmartDisplay />,
    iconInactive: <SmartDisplayOutlined />,
    name: "Your videos",
  },
  {
    iconActive: <AccessTime />,
    iconInactive: <AccessTimeOutlined />,
    name: "Watch Later",
  },
  {
    iconActive: <ThumbUpAlt />,
    iconInactive: <ThumbUpAltOutlined />,
    name: "Liked vidéos",
  },
  {
    iconActive: <PlaylistPlay />,
    iconInactive: <PlaylistPlayOutlined />,
    name: "Playlist",
  },
];
