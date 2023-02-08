// Primary inactives Icon
import {
  HomeOutlined,
  SmartDisplayOutlined,
  SubscriptionsOutlined,
} from "@mui/icons-material/";

// Primary actives Icon
import { Home, SmartDisplay, Subscriptions } from "@mui/icons-material/";

// Secondary inactives Icon
import {
  VideoLibraryOutlined,
  HistoryOutlined,
  AccessTimeOutlined,
  PlaylistPlayOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material/";

// Secondary actives Icon
import {
  VideoLibrary,
  History,
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
    iconActive: <SmartDisplay />,
    iconInactive: <SmartDisplayOutlined />,
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
    iconActive: <AccessTime />,
    iconInactive: <AccessTimeOutlined />,
    name: "Watch Later",
  },
  {
    iconActive: <PlaylistPlay />,
    iconInactive: <PlaylistPlayOutlined />,
    name: "Playlist",
  },
  {
    iconActive: <ThumbUpAlt />,
    iconInactive: <ThumbUpAltOutlined />,
    name: "Liked vidéos",
  },
];
