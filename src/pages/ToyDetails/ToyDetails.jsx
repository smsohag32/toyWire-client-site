import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import toast, { Toaster } from "react-hot-toast";
import useTitle from "../../hooks/useTitle";

const ToyDetails = () => {
  const toy = useLoaderData();
  const {
    sellerName,
    toyName,
    ratting,
    quantity,
    price,
    email,
    img,
    description,
  } = toy;
  useTitle("Toy Details");
  // handle add to cart //TODO
  const handleAddToCart = () => {
    toast.success("Product added !");
  };
  return (
    <>
      <div className="toy-container h-[calc(100vh-80px)] overflow-hidden my-10">
        <div className="flex  gap-6 h-[calc(100vh-90px)] overflow-hidden items-center flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src={img}
              alt="Toy Product"
              className="w-full min-w-full rounded-lg transition duration-300 ease-linear hover:scale-y-110  object-cover"
            />
          </div>
          <div className="md:w-1/2 px-4">
            <h2 className="text-2xl font-bold mb-2">{toyName}</h2>
            <p className="text-gray-700 mb-4">
              {description ? description : <></>}
            </p>
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold">$ {price}</span>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Product Details</h3>
              <ul className="list-disc pl-4">
                <li>Available Quantity: {quantity}</li>
                <li>Recommended Age: 4+</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Seller Information</h3>
              <p className="text-gray-700">Seller: {sellerName}</p>
              <p className="text-gray-700">Contact: {email}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Customer Reviews</h3>
              <div className="flex items-center mb-2">
                <span className="text-gray-600">{ratting}</span>
                <div className="ml-2">
                  <Rating style={{ maxWidth: 100 }} value={ratting} readOnly />
                </div>
              </div>
              <p className="text-gray-700">Great toy! My kids love it.</p>
            </div>
            <div className="flex md:justify-end justify-center mt-5 items-center mb-4">
              <button
                onClick={handleAddToCart}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default ToyDetails;
