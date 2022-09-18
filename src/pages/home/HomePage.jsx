import { useEffect, useState } from "react";

import { getGasData } from "services/gas";
import HomePageView from "./HomePageView";

export function HomePage() {
  const [counter, setCounter] = useState(15);

  useEffect(() => {
    getGasData();
    const interval = setInterval(getGasData, 15000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    counter === 0 && setCounter(15);
  }, [counter]);

  return <HomePageView counter={counter} />;
}
