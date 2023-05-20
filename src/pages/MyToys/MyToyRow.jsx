import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const MyToyRow = ({ myToy, index, handleDelete }) => {
  const {
    _id,
    toyName,
    description,
    subCategory,
    price,
    img,
    quantity,
    ratting,
  } = myToy;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center space-x-2">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{toyName}</div>
            <div className="text-sm opacity-50">{ratting}</div>
          </div>
        </div>
      </td>
      <td>
        <span>{subCategory}</span>
        <br />

        {description && (
          <span className="badge badge-ghost max-w-xs badge-sm">
            {description.slice(0, 15)}...
          </span>
        )}
      </td>
      <td>{quantity}</td>
      <td>{price && <span>{price}</span>}</td>
      <td>
        <div className="flex flex-col gap-1">
          <Link
            to={`/toys/${_id}`}
            className="primary-bg text-white text-center py-1 btn-xs"
          >
            View
          </Link>
          <button className="secondary-bg btn-xs text-white backdrop-blur-md">
            Edit
          </button>
          <button
            onClick={() => handleDelete(_id)}
            className="bg-red-500 btn-xs text-white bg-opacity-90 rounded-sm"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyToyRow;
