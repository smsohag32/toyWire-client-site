import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const ToyUpdate = () => {
  const loadedToy = useLoaderData();
  const navigate = useNavigate();
  const { _id, toyName, description, price, quantity } = loadedToy;
  const [desError, setDesError] = useState("");
  const [qError, setQError] = useState("");
  const [priceError, setPriceError] = useState("");

  const updateInformation = (e) => {
    e.preventDefault();
    setDesError("");
    setQError("");
    setPriceError("");
    const upDescription = e.target.description.value;
    const upQuantity = e.target.quantity.value;
    const upPrice = e.target.price.value;
    console.log(upDescription, upQuantity);
    if (upDescription == "") {
      return setDesError("Description field is required *");
    } else if (upQuantity === "") {
      return setQError("Quantity field is required *");
    } else if (upPrice === "") {
      return setPriceError("Price filed is required *");
    }

    const updatedInfo = {
      upDescription,
      upPrice,
      upQuantity,
    };
    console.log(updatedInfo);
    fetch(`https://toy-wire-server.vercel.app/toy/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Update Successfully",
          });
          navigate("/my-toys");
        } else if (data.modifiedCount === 0) {
          navigate("/my-toys");
          Swal.fire("You not to change anything !");
        }
      });
  };

  return (
    <div className=" bg-[#4576bb78]   py-8">
      <div className="max-w-md mx-auto bg-white backdrop-blur-3xl w-full h-full p-5 rounded-lg ">
        <form className="" onSubmit={updateInformation}>
          <div className="text-center">
            <h3 className="text-xl font-bold">Update Information</h3>
            <h5 className="opacity-60 primary-text">{toyName}</h5>
          </div>
          <div className="py-3">
            <h3 className="text-xl font-medium mb-3">Description</h3>
            <textarea
              placeholder="Enter Toy Details Description"
              rows="2"
              name="description"
              className="textarea border-1 leading-snug border-stone-400 textarea-ghost border-opacity-50 textarea-lg w-full"
              defaultValue={description}
            ></textarea>
            {desError && (
              <span className="text-red-600 text-sm">
                <small>{desError}</small>
              </span>
            )}
            <div className="py-3 grid grid-cols-2 gap-10">
              <div className="py-3">
                <h3 className="text-xl font-medium mb-3">Available Quantity</h3>
                <input
                  type="number"
                  name="quantity"
                  className="input-ghost input border-1 w-full border-stone-300"
                  placeholder="Enter toy quantity"
                  defaultValue={quantity}
                />
                {qError && (
                  <span className="text-red-600 text-sm">
                    <small>{qError}</small>
                  </span>
                )}
              </div>
              <div className="py-3">
                <h3 className="text-xl font-medium mb-3">Price</h3>
                <input
                  type="number"
                  name="price"
                  className="input-ghost input border-1 w-full border-stone-300"
                  placeholder="Enter toy price"
                  defaultValue={price}
                />
                {priceError && (
                  <span className="text-red-600 text-sm">
                    <small>{priceError}</small>
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className=" font-sans">
            <button
              type="submit"
              className="btn bg-blue-600 border-none text-white hover:bg-blue-500 ms-auto"
            >
              Update and Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ToyUpdate;
