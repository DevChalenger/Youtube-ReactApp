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
    name: "Trending",
  },
  {
    iconActive: <MusicNote />,
    iconInactive: <MusicNoteOutlined />,
    name: "Music",
  },
  {
    iconActive: <Movie />,
    iconInactive: <MovieOutlined />,
    name: "Movie & Shows",
  },

  {
    iconActive: <Stream />,
    iconInactive: <StreamOutlined />,
    name: "Live",
  },
  {
    iconActive: <VideogameAsset />,
    iconInactive: <VideogameAssetOutlined />,
    name: "Gamming",
  },
  {
    iconActive: <Feed />,
    iconInactive: <FeedOutlined />,
    name: "News",
  },
  {
    iconActive: <EmojiEvents />,
    iconInactive: <EmojiEventsOutlined />,
    name: "Sports",
  },
  {
    iconActive: <Lightbulb />,
    iconInactive: <LightbulbOutlined />,
    name: "Learning",
  },
  {
    iconActive: <Checkroom />,
    iconInactive: <CheckroomOutlined />,
    name: "Fashion & Beauty",
  },
];
