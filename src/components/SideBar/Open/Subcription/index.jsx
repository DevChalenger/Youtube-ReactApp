import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import MOCK_SUBSCRIBER from "./__mocks__/MOCK_SUBSCRIBER.json";
import { StyledSubscription, SubcriptionItem } from "./style";

const Subscription = () => {
  const [isShowMore, setIsShowMore] = useState(false);
  return (
    <StyledSubscription>
      <h3>Subscriptions</h3>
      <ul>
        {MOCK_SUBSCRIBER.slice(0, isShowMore ? MOCK_SUBSCRIBER.length : 7).map(
          (subscribe, index) => (
            <SubcriptionItem key={index} color={subscribe.color}>
              <Link to={`/#@${subscribe.username}`}>
                <img
                  src={subscribe.avatar}
                  alt={`avatar of ${subscribe.username}`}
                />
                <span>{subscribe.username}</span>
              </Link>
            </SubcriptionItem>
          )
        )}
        {MOCK_SUBSCRIBER.length > 7 && (
          <li onClick={() => setIsShowMore(!isShowMore)}>
            {!isShowMore ? (
              <Link>
                <ExpandMore />
                <span>Show {MOCK_SUBSCRIBER.length - 7} more</span>
              </Link>
            ) : (
              <Link>
                <ExpandLess />
                <span>Show less</span>
              </Link>
            )}
          </li>
        )}
      </ul>
    </StyledSubscription>
  );
};

export default Subscription;
