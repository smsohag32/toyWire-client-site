import img from "../assets/banner/banner.jpg";

const HeaderBanner = ({ children }) => {
  return (
    <div
      className="w-full flex justify-center items-center h-[250px]"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),url('${img}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className=" text-white">{children}</div>
    </div>
  );
};

export default HeaderBanner;
