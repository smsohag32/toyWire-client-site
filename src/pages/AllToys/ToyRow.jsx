import { Link } from "react-router-dom";

const ToyRow = ({ toy, index }) => {
  const { _id, sellerName, subCategory, toyName, price, quantity } = toy;
  return (
    <tr data-aos="fade-up" data-aos-anchor-placement="top-center">
      <th>{index + 1}</th>
      <td>{sellerName}</td>
      <td>{toyName}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <Link className="secondary-btn" to={`/toys/${_id}`}>
          View
        </Link>
      </td>
    </tr>
  );
};

export default ToyRow;
