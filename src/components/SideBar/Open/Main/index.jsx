import { Link } from "react-router-dom";

import { primaryItems, secondaryItems } from "./mainItems";

const Main = () => {
  return (
    <section>
      <ul>
        {primaryItems.map((item, index) => (
          <li key={index}>
            <Link>
              {item.iconInactive}
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="collapse">
        {secondaryItems.map((item, index) => (
          <li key={index}>
            <Link>
              {item.iconInactive}
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Main;
