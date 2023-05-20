import { useLoaderData } from "react-router-dom";
import HeaderBanner from "../../components/HeaderBanner";

const ToyDetails = () => {
  const { toy } = useLoaderData();

  return (
    <div>
      <HeaderBanner />
    </div>
  );
};

export default ToyDetails;
