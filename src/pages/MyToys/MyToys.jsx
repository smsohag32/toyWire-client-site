import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import HeaderBanner from "../../components/HeaderBanner";
import MyToyRow from "./MyToyRow";
import Modal from "../../components/Modal";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [updateToy, setUpdatedToy] = useState({});

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
  // load data
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/toys?email=${user?.email}`)
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
                    setUpdatedToy={setUpdatedToy}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* handle toy information in modal */}
      <Modal updatedToy={updateToy} />
    </div>
  );
};

export default MyToys;
