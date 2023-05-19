import HeaderBanner from "../../../components/HeaderBanner";

const AllToys = () => {
  return (
    <div>
      <HeaderBanner>
        <div className="flex flex-col space-y-2">
          <p>Today is your Lucky Day</p>
          <div className="relative">
            <h2 className="text-3xl  font-bold opacity-80">
              Choose Your Free Gift
            </h2>
            <div className="badge badge-accent absolute right-3 md:-right-16 -top-7">
              Offer
            </div>
          </div>
        </div>
      </HeaderBanner>
      <div className="toy-container">
        <hr />
      </div>
    </div>
  );
};

export default AllToys;
