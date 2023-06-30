import { useContext } from "react";
import { FaProductHunt } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Fade } from "react-reveal";
import HeaderBanner from "../../components/HeaderBanner";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  // handle create product
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //   handle form value in react hook form to post database
  const onSubmit = (newToy) => {
    fetch(`https://toy-wire-server.vercel.app/toys`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("New toy created successfully done!");
          reset();
        }
      });
  };

  return (
    <div>
      <div className="toy-container">
        <div className="p-8 max-w-2xl mx-auto">
          {/* create product form */}
          <form onSubmit={handleSubmit(onSubmit)} className="my-5">
            {/* header title */}
            <div className="border-2 p-5">
              <div className="flex gap-4 items-center">
                <FaProductHunt />
                <div>
                  <p className="text-xl">Seller Information</p>
                  <small className="opacity-60">Fill all Information</small>
                </div>
              </div>
            </div>
            <div className="py-3">
              <h3 className="text-xl font-medium mb-3"></h3>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    {...register("sellerName")}
                    type="text"
                    name="sellerName"
                    id="floating_name"
                    className="block py-2.5 px-0 rounded-md ps-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={user?.displayName}
                  />
                  <label
                    htmlFor="floating_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                  >
                    Seller Name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    {...register("email")}
                    type="email"
                    name="email"
                    id="floating_email"
                    className="block py-2.5 ps-3 rounded-lg w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={user?.email}
                  />
                  <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                  >
                    Seller Email
                  </label>
                </div>
              </div>
            </div>
            <div className="border-2 p-5">
              <div className="flex gap-4 items-center">
                <FaProductHunt />
                <div>
                  <p className="text-xl">Toy Information</p>
                  <small className="opacity-60">Fill all Information</small>
                </div>
              </div>
            </div>
            <div className="py-3">
              <h3 className="text-xl font-medium mb-3">Toy name</h3>
              <input
                {...register("toyName", {
                  required: "This field is required *",
                })}
                type="text"
                placeholder="Enter toy Name"
                name="toyName"
                className=" input-md input w-full border-1 input-ghost border-stone-200"
              />
              {errors?.toyName && (
                <span className="text-red-600 text-sm">
                  <small>{errors.toyName?.message}</small>
                </span>
              )}
            </div>
            <div className="py-3">
              <h3 className="text-xl font-medium mb-3">Description</h3>
              <textarea
                {...register("subCategory")}
                placeholder="Enter Toy Details Description"
                rows="5"
                name="description"
                className="textarea border-1 leading-snug border-stone-400 textarea-ghost border-opacity-50 textarea-lg w-full"
              ></textarea>
            </div>

            <div className="py-3 grid grid-cols-2 gap-10">
              <div className="py-3">
                <h3 className="text-xl font-medium mb-3">Product Category</h3>
                <select
                  {...register("subCategory", {
                    required: "This field is required *",
                  })}
                  className="select select-ghost border-1 border-stone-300 w-full"
                >
                  <option>Talking Plush</option>
                  <option>Light-up Sensory</option>
                  <option>Dancing Toy</option>
                  <option>Music Robots</option>
                  <option>Alphabet Number Learning</option>
                  <option>Color Recognition</option>
                  <option>Storytelling</option>
                  <option>Musical Plush</option>
                  <option>Huggable</option>
                </select>

                {errors?.subCategory && (
                  <span className="text-red-600 text-sm">
                    <small>{errors.subCategory?.message}</small>
                  </span>
                )}
              </div>
              <div className="py-3">
                <h3 className="text-xl font-medium mb-3">Product Ratting</h3>
                <input
                  {...register("ratting", {
                    required: "This field is required *",
                    max: { value: 5, message: "Max ratting 5" },
                    pattern: {
                      value: /^\d+(\.\d{1,2})?$/,
                      message: "Invalid Ratting ",
                    },
                  })}
                  type="text"
                  name="ratting"
                  id="ratting"
                  className="input-ghost input border-1 border-stone-300 w-full"
                />
                {errors?.ratting && (
                  <span className="text-red-600 text-sm">
                    <small>{errors.ratting?.message}</small>
                  </span>
                )}
              </div>
            </div>
            <div className="py-3 mb-3">
              <h3 className="text-xl font-medium mb-3">Product Photo</h3>
              <input
                {...register("img", {
                  required: "This field is required *",
                })}
                type="url"
                placeholder="Product PhotoURL"
                name="img"
                className=" input-md input w-full border-1 input-ghost border-stone-200"
              />
              {errors?.img && (
                <span className="text-red-600 text-sm">
                  <small>{errors.img?.message}</small>
                </span>
              )}
            </div>

            <div className="border-2 p-5">
              <div className="flex gap-4 items-center">
                <FaProductHunt />
                <div>
                  <p className="text-xl">General Information</p>
                  <small className="opacity-60">Fill all Information</small>
                </div>
              </div>
            </div>

            <div className="py-3 grid grid-cols-2 gap-10">
              <div className="py-3">
                <h3 className="text-xl font-medium mb-3">
                  Available Quantity in Stock
                </h3>
                <input
                  {...register("quantity", {
                    required: "This field is required *",
                  })}
                  type="number"
                  name="quantity"
                  className="input-ghost input border-1 w-full border-stone-300"
                  placeholder="Enter toy quantity"
                />
                {errors?.quantity && (
                  <span className="text-red-600 text-sm">
                    <small>{errors.quantity?.message}</small>
                  </span>
                )}
              </div>
              <div className="py-3">
                <h3 className="text-xl font-medium mb-3">Price</h3>
                <input
                  {...register("price", {
                    required: "Price field is required *",
                  })}
                  type="number"
                  name="price"
                  className="input-ghost input border-1 w-full border-stone-300"
                  placeholder="Enter toy price"
                />
                {errors?.price && (
                  <span className="text-red-600 text-sm">
                    <small>{errors.price?.message}</small>
                  </span>
                )}
              </div>
            </div>
            <div className="flex justify-end mt-5">
              <button
                className="btn bg-blue-600 text-white hover:bg-blue-500 ms-auto"
                type="submit"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
