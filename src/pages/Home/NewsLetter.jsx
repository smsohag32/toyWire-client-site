import img from "../../assets/banner/faq.png";

const NewsLetter = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url('${img}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="toy-container py-10">
        <div className="bg-gray-100 py-8 primary-bg text-white px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl text-center font-bold mb-4">
              Subscribe to our Exclusive Newsletter
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-80 py-2 text-black px-4 mb-4 md:mb-0 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 ms-3 hover:bg-black text-white font-bold py-2 px-4 rounded"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
