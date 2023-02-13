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

export const navCloseItem = [
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
    link: "/feed/subscriptions",
    name: "Subscriptions",
  },
  {
    iconActive: <VideoLibrary />,
    iconInactive: <VideoLibraryOutlined />,
    link: "/feed/library",
    name: "Library",
  },
];
