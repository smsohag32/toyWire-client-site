import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
// single card
const ToyCard = ({ toy }) => {
  const { _id, toyName, img, price, ratting } = toy;
  return (
    <div className="border-2">
      <div className="card w-full h-full">
        <div className="relative min-h-[40%]  object-contain overflow-hidden bg-cover bg-no-repeat">
          <img
            src={img}
            className="min-w-full object-cover h-60 transition duration-300 ease-linear hover:scale-y-110"
          ></img>
        </div>
        <div className="card-body">
          <h2 className="card-title text-lg font-bold mb-1">{toyName}</h2>
          <div className="flex justify-between items-center ">
            <h1 className="text-xl font-medium opacity-80">$ {price}</h1>
            <span>
              <Rating style={{ maxWidth: 100 }} value={ratting} readOnly />
            </span>
          </div>
          <div className="w-full mt-8 flex justify-end">
            <Link
              className="primary-btn text-center w-full"
              to={`/toys/${_id}`}
            >
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
