import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import HeaderBanner from "../../components/HeaderBanner";
import MyToyRow from "./MyToyRow";

import { AiFillDownSquare } from "react-icons/ai";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [loading, setLoading] = useState(false);

  // handle delete toy
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/toy/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = myToys?.filter((toy) => toy._id != id);
          setMyToys(remaining);
        }
      });
  };

  // handle to filter data
  const handleFilter = (value) => {
    fetch(`http://localhost:3000/sorted?filter=${value}&&email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  };

  // load data
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/my-toys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        setLoading(false);
      });
  }, [user.email]);

  console.log(myToys);

  return (
    <div className="toy-bg">
      <HeaderBanner>
        <div className="flex flex-col text-center justify-center items-center">
          <h2 className="text-2xl font-bold mb-3">
            My All <span className="secondary-text">Toys</span> Collection
          </h2>
          <p className="opacity-70">
            List your toys for sale and connect with toy <br /> enthusiasts
            worldwide!
          </p>
        </div>
      </HeaderBanner>
      <div className="toy-container backdrop-blur-md bg-opacity-50 py-10">
        <div>
          <div className="dropdown dropdown-bottom">
            <label tabIndex={0} className=" items-center btn m-1 flex gap-3">
              Filter
              <span>
                <AiFillDownSquare></AiFillDownSquare>
              </span>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button onClick={() => handleFilter(1)}>Ascending</button>
              </li>
              <li>
                <button onClick={() => handleFilter(0)}>Descending</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table backdrop-blur-lg w-full">
            {/* head */}
            <thead className="font-sans leading-relaxed">
              <tr>
                <th>SN</th>
                <th>Product</th>
                <th>Category Additional Info</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myToys &&
                myToys.map((myToy, index) => (
                  <MyToyRow
                    key={myToy._id}
                    handleDelete={handleDelete}
                    index={index}
                    myToy={myToy}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
