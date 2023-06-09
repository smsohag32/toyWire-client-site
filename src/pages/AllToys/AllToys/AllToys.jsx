import { useEffect, useState } from "react";
import HeaderBanner from "../../../components/HeaderBanner";
import ToyRow from "../ToyRow";
import { Fade } from "react-reveal";
import Spinner from "../../../components/Spinner";
import ToyCard from "../../../components/ToyCard";

const AllToys = () => {
  const [loadedToys, setLoadedToys] = useState([]);
  const [allToys, setAllToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://toy-wire-server.vercel.app/toys`)
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
        setLoadedToys(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleSearch = () => {
    if (searchText.length > 0) {
      fetch(`https://toy-wire-server.vercel.app/toyssearch/${searchText}`)
        .then((res) => res.json())
        .then((data) => {
          setAllToys(data);
        });
    } else {
      setAllToys(loadedToys);
    }
  };

  // handle keyboard enter key on fire to search

  const handleEnterKeyOnSearch = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <HeaderBanner>
        <Fade right>
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
        </Fade>
      </HeaderBanner>
      <div className="toy-container py-10">
        <div>
          <h2 className="text-center text-xl font-bold opacity-80">
            Our Recommended All Robotic Toy Products
          </h2>
        </div>
        <div className="mt-8 mb-1 md:max-w-sm mx-auto">
          <div>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <input
                onKeyDown={handleEnterKeyOnSearch}
                onChange={(e) => setSearchText(e.target.value)}
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search toys"
              ></input>
              <button
                onClick={handleSearch}
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="grid my-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {allToys.length === 0 && (
            <p className="primary-text font-bold text-4xl my-10 text-center">
              Not Found !
            </p>
          )}
          {allToys.length > 0 &&
            allToys.map((toy, index) => <ToyCard toy={toy} />)}
        </div>
      </div>
    </div>
  );
};

export default AllToys;
