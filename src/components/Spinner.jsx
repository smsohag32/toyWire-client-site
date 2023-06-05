import { Bars } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="flex justify-center w-full items-center min-h-[calc(100vh-200px)]">
      <Bars
        height="80"
        width="80"
        color="#0056d2"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Spinner;
