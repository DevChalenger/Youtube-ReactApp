// Active Icon
import {
  Whatshot,
  MusicNote,
  Movie,
  Stream,
  VideogameAsset,
  Feed,
  EmojiEvents,
  Lightbulb,
  Checkroom,
} from "@mui/icons-material";

// Inactive Icon
import {
  WhatshotOutlined,
  MusicNoteOutlined,
  MovieOutlined,
  StreamOutlined,
  VideogameAssetOutlined,
  FeedOutlined,
  EmojiEventsOutlined,
  LightbulbOutlined,
  CheckroomOutlined,
} from "@mui/icons-material";

export const exploreNavItems = [
  {
    iconActive: <Whatshot />,
    iconInactive: <WhatshotOutlined />,
    link: "/feed/trending",
    name: "Trending",
  },
  {
    iconActive: <MusicNote />,
    iconInactive: <MusicNoteOutlined />,
    link: "/feed/channel/music",
    name: "Music",
  },
  {
    iconActive: <Movie />,
    iconInactive: <MovieOutlined />,
    link: "/feed/store/movies_shows",
    name: "Movie & Shows",
  },

  {
    iconActive: <Stream />,
    iconInactive: <StreamOutlined />,
    link: "/channel/live",
    name: "Live",
  },
  {
    iconActive: <VideogameAsset />,
    iconInactive: <VideogameAssetOutlined />,
    link: "/gamming",
    name: "Gamming",
  },
  {
    iconActive: <Feed />,
    iconInactive: <FeedOutlined />,
    link: "/channel/feed",
    name: "News",
  },
  {
    iconActive: <EmojiEvents />,
    iconInactive: <EmojiEventsOutlined />,
    link: "/channel/sports",
    name: "Sports",
  },
  {
    iconActive: <Lightbulb />,
    iconInactive: <LightbulbOutlined />,
    link: "/channel/learning",
    name: "Learning",
  },
  {
    iconActive: <Checkroom />,
    iconInactive: <CheckroomOutlined />,
    link: "/channel/fashion_beauty",
    name: "Fashion & Beauty",
  },
];
