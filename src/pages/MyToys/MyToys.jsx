import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);

  const [loadedMyToys, setLoadedMyToys] = useState([]);

  // load data
  useEffect(() => {
    fetch(`http://localhost:3000/toys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setLoadedMyToys(data);
      });
  }, [user.email]);
  console.log(loadedMyToys);
  return (
    <div>
      <div></div>
    </div>
  );
};

export default MyToys;
