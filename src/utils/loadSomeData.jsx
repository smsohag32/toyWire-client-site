/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";

const loadSomeDta = () => {
  const [someData, setSomeData] = useState(null);
  useEffect(() => {
    fetch(`https://toy-wire-server.vercel.app/toys/trending`)
      .then((res) => res.json())
      .then((data) => {
        setSomeData(data);
      });
  }, []);
  return { someData };
};
export default loadSomeDta;
