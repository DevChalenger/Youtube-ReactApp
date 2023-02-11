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
  {
    iconActive: <VideoLibrary />,
    iconInactive: <VideoLibraryOutlined />,
    name: "Library",
  },
];
