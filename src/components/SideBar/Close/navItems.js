// Inactive Icon
import {
  VideoLibraryOutlined,
  SubscriptionsOutlined,
  SmartDisplayOutlined,
  HomeOutlined,
} from "@mui/icons-material/";

// Active Icon
import {
  Home,
  SmartDisplay,
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
    iconActive: <SmartDisplay />,
    iconInactive: <SmartDisplayOutlined />,
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
