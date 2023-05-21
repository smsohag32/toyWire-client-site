const NewsLetter = () => {
  return (
    <div className="toy-container">
      <div className="bg-gray-100 py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl text-center font-bold mb-4">
            Subscribe to our Exclusive Newsletter
          </h3>
          <form className="flex flex-col md:flex-row items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-80 py-2 px-4 mb-4 md:mb-0 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
