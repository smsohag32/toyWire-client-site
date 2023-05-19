import { InfinitySpin } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-140px)]">
      <InfinitySpin width="300" color="#0056d2" />
    </div>
  );
};

export default Spinner;
