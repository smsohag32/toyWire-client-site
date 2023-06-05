import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import HeaderBanner from "../../components/HeaderBanner";
import MyToyRow from "./MyToyRow";
import { Fade } from "react-reveal";
import { AiFillDownSquare } from "react-icons/ai";
import Spinner from "../../components/Spinner";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  useTitle("My Toys");
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [loading, setLoading] = useState(false);

  // handle delete toy
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete it?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-wire-server.vercel.app/toys/toy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your products has been deleted.",
                "success"
              );
              const remaining = myToys?.filter((toy) => toy._id != id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

  // handle to filter data
  const handleFilter = (value) => {
    setLoading(true);
    fetch(
      `https://toy-wire-server.vercel.app/toys/sorted?filter=${value}&&email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        setLoading(false);
      });
  };

  // load data
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://toy-wire-server.vercel.app/toys/my-toys?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        setLoading(false);
      });
  }, [user.email]);

  // spinner
  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="toy-bg">
      <HeaderBanner>
        <Fade right>
          <div className="flex flex-col text-center justify-center items-center">
            <h2 className="text-2xl font-bold mb-3">
              My All <span className="secondary-text">Toys</span> Collection
            </h2>
            <p className="opacity-70">
              List your toys for sale and connect with toy <br /> enthusiasts
              worldwide!
            </p>
          </div>
        </Fade>
      </HeaderBanner>
      <div className="toy-container backdrop-blur-md bg-opacity-50 py-10">
        <div>
          <div className="dropdown dropdown-bottom">
            <label
              tabIndex={0}
              className=" items-center border-8 bg-white rounded-3xl px-5 py-2 m-1 flex gap-3"
            >
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
              {myToys.length > 0 &&
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
