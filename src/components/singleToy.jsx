// single card
const singleToy = () => {
  return (
    <div>
      <div className="card w-full h-full">
        <div className="relative min-h-[40%]  object-contain overflow-hidden bg-cover bg-no-repeat">
          <img
            src=""
            className="min-w-full object-cover h-60 transition duration-300 ease-in-out hover:scale-110"
          ></img>
        </div>
        <div className="card-body">
          <h2 className="card-title"></h2>

          <div className="card-actions justify-between items-center"></div>
        </div>
      </div>
    </div>
  );
};

export default singleToy;
