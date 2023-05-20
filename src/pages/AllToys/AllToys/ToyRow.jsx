const ToyRow = ({ toy, index }) => {
  const { _id, sellerName, subCategory, toyName, price, quantity } = toy;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{sellerName}</td>
      <td>{toyName}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <button className="secondary-btn">View</button>
      </td>
    </tr>
  );
};

export default ToyRow;
