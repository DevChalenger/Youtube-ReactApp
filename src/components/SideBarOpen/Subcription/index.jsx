import { Link } from "react-router-dom";
import MOCK_SUBSCRIBER from "../../../__mocks__/MOCK_SUBSCRIBER.json";
import { StyledSubscription } from "./style";

const Subscription = () => {
  return (
    <StyledSubscription>
      <h3>Subscriptions</h3>
      <ul>
        {MOCK_SUBSCRIBER.slice(0, 7).map((subscribe, index) => (
          <li key={index}>
            <Link to={`/#${subscribe.username}`}>
              <img
                src={subscribe.avatar}
                alt={`avatar of ${subscribe.username}`}
              />
              <span>{subscribe.username}</span>
            </Link>
          </li>
        ))}
      </ul>
    </StyledSubscription>
  );
};

export default Subscription;
