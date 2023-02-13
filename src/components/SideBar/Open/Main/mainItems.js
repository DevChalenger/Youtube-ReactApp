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
    link: "/",
    name: "Home",
  },
  {
    iconActive: <PhoneAndroid />,
    iconInactive: <PhoneAndroidOutlined />,
    link: "/short",
    name: "Shorts",
  },
  {
    iconActive: <Subscriptions />,
    iconInactive: <SubscriptionsOutlined />,
    link: "/feed/subscritpions",
    name: "Subscriptions",
  },
];

export const secondaryItems = [
  {
    iconActive: <VideoLibrary />,
    iconInactive: <VideoLibraryOutlined />,
    link: "/feed/library",
    name: "Library",
  },
  {
    iconActive: <History />,
    iconInactive: <HistoryOutlined />,
    link: "/feed/history",
    name: "History",
  },
  {
    iconActive: <SmartDisplay />,
    iconInactive: <SmartDisplayOutlined />,
    link: "/channels/your_videos",
    name: "Your videos",
  },
  {
    iconActive: <AccessTime />,
    iconInactive: <AccessTimeOutlined />,
    link: "/playlist/?list=WL",
    name: "Watch Later",
  },
  {
    iconActive: <ThumbUpAlt />,
    iconInactive: <ThumbUpAltOutlined />,
    link: "/playlist/?list=LL",
    name: "Liked vidéos",
  },
  {
    iconActive: <PlaylistPlay />,
    iconInactive: <PlaylistPlayOutlined />,
    link: "/playlist/",
    name: "Playlist",
  },
];
