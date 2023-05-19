import { useContext } from "react";
import { FaProductHunt } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";
import { useForm } from "react-hook-form";
const AddToy = () => {
  const { user } = useContext(AuthContext);
  // handle create product
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="toy-container">
      <div className="p-8">
        <h3 className="text-xl">CREATE A NEW TOY</h3>

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
                  {...register("name", {
                    required: "Field is empty input your name",
                  })}
                  type="text"
                  name="name"
                  id="floating_name"
                  className="block py-2.5 px-0 rounded-md ps-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  defaultValue="sohag"
                />
                <label
                  htmlFor="floating_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                >
                  Seller Name
                </label>
                {errors.fName && (
                  <span className="text-red-600 text-sm">
                    <small>{errors.name?.message} *</small>
                  </span>
                )}
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  {...register("email", {
                    required: "This field required *",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  name="email"
                  id="floating_email"
                  className="block py-2.5 ps-3 rounded-lg w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                >
                  Seller Email
                </label>
                {errors?.email && (
                  <span className="text-red-600 text-sm">
                    <small>{errors.email?.message}</small>
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="border-2 p-5">
            <div className="flex gap-4 items-center">
              <FaProductHunt />
              <div>
                <p className="text-xl">Product Information</p>
                <small className="opacity-60">Fill all Information</small>
              </div>
            </div>
          </div>
          <div className="py-3">
            <h3 className="text-xl font-medium mb-3">Product Title</h3>
            <input
              type="text"
              placeholder="Product Title"
              name="title"
              className=" input-md input w-full border-1 input-ghost border-stone-200"
            />
          </div>
          <div className="py-3">
            <h3 className="text-xl font-medium mb-3">Product Description</h3>
            <textarea
              placeholder="Bio"
              rows="12"
              name="description"
              className="textarea border-1 leading-snug border-stone-400 textarea-ghost border-opacity-50 textarea-lg w-full"
            ></textarea>
          </div>

          {/* */}
          <div className="py-3 grid grid-cols-2 gap-10">
            <div className="py-3">
              <h3 className="text-xl font-medium mb-3">Product Category</h3>
              <select className="select select-ghost border-1 border-stone-300 w-full">
                <option>Cheese</option>
                <option>Veggie</option>
                <option>Pepperoni</option>
                <option>Margherita</option>
                <option>Hawaiian</option>
              </select>
            </div>
            <div className="py-3">
              <h3 className="text-xl font-medium mb-3">Published Date</h3>
              <input
                type="date"
                name="date"
                id="brand"
                className="input-ghost input border-1 border-stone-300 w-full"
              />
            </div>
          </div>
          <div className="py-3 mb-3">
            <h3 className="text-xl font-medium mb-3">Product Photo</h3>
            <input
              type="text"
              placeholder="Product PhotoURL"
              name="productPhoto"
              className=" input-md input w-full border-1 input-ghost border-stone-200"
            />
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
            <div>
              <h3 className="text-xl font-medium mb-3">Manufacture Company</h3>
              <input
                type="text"
                name="company"
                className="input-ghost input border-1 border-stone-300 w-full"
              />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">Manufacture Brand</h3>
              <input
                type="text"
                name="brand"
                id="brand"
                className="input-ghost input border-1 border-stone-300 w-full"
              />
            </div>
          </div>
          <div className="py-3 grid grid-cols-2 gap-10">
            <div className="py-3">
              <h3 className="text-xl font-medium mb-3">In Stock</h3>
              <input
                type="text"
                name="stock"
                id=""
                className="input-ghost input border-1 w-full border-stone-300"
              />
            </div>
            <div className="py-3">
              <h3 className="text-xl font-medium mb-3">Price</h3>
              <input
                type="text"
                name="price"
                id=""
                className="input-ghost input border-1 w-full border-stone-300"
              />
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
  );
};

export default AddToy;
