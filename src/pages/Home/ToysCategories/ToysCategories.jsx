import { useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./category.css";
import ToyCard from "../../../components/ToyCard";

const ToysCategories = () => {
  const toyCategories = [
    "Talking Plush",
    "Light-up Sensory",
    "Alphabet Number Learning",
    "Musical Plush",
    "Huggable",
    "Color Recognition",
    "Dancing Toy",
    "Music Robots",
    "Storytelling",
  ];
  const [tabIndex, setTabIndex] = useState(0);
  const [categoryData, setCategoryData] = useState(null);

  const fetchCategoryData = async (category) => {
    const res = await fetch(
      `https://toy-wire-server.vercel.app/subCategory?category=${category}`
    );
    const data = await res.json();
    return data;
  };

  const handleTab = async (index, category) => {
    const data = await fetchCategoryData(category);
    setCategoryData(data);
    setTabIndex(index);
  };
  useEffect(() => {
    const fetchInitialData = async () => {
      const data = await fetchCategoryData(toyCategories[0]); // Fetch data for the first category
      setCategoryData(data);
    };

    fetchInitialData();
  }, []);

  return (
    <div className="bg-white py-10">
      <div className="toy-container">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-serif uppercase font-bold">
            Features Robotic Toys
          </h3>
        </div>
        <h2 className="my-4 primary-text font-bold text-xl">Toys Categories</h2>
        <Tabs
          selectedIndex={tabIndex}
          onSelect={(index) => handleTab(index, toyCategories[index])}
          className="min-h-[60vh]"
        >
          <TabList className=" flex gap-4 flex-wrap">
            {toyCategories.map((toyCategory) => (
              <Tab
                className="hover:bg-transparent  outline-none rounded-sm  bg-transparent border-b-4 border-b-[#3c3f3f21] border border-transparent hover:border-[#0056d2] transition-all duration-200 transform  px-3 py-1"
                key={toyCategory}
              >
                {toyCategory}
              </Tab>
            ))}
          </TabList>
          {toyCategories.map((t, index) => (
            <TabPanel key={index}>
              <div className="grid grid-cols-1 my-10 md:grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3">
                {categoryData?.length > 0 &&
                  categoryData.map((toy) => (
                    <ToyCard key={toy._id} toy={toy} />
                  ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default ToysCategories;
