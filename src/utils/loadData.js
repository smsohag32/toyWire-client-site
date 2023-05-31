import { useEffect, useState } from "react";

export const useData = () =>{
    const [allToys, setAllToys] = useState([])
     useEffect(() => {
    fetch(`https://toy-wire-server.vercel.app/toys`)
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
        setAllToys(data);
      });
  }, []);

  return { allToys }
}