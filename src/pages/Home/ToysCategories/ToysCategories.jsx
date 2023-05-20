import { useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./category.css";
import ToyCard from "../../../components/ToyCard";

const ToysCategories = () => {
  const [categoryData, setCategoryData] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchCategoryData = async (category) => {
    setLoading(true);
    console.log(category);
    const res = await fetch(
      `http://localhost:3000/subCategory?category=${category}`
    );
    const data = await res.json();
    setCategoryData(data);
  };

  const handleTab = (index, category) => {
    fetchCategoryData(category);
  };

  useEffect(() => {
    handleTab("Talking Plush");
  }, []);

  return (
    <div className="bg-white py-10">
      <div className="toy-container">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-serif font-bold">
            Features Robotic all Categories Toys
          </h3>
        </div>

        <Tabs className="">
          <h2 className="flex py-2 px-2 items-center gap-2 ">
            Toy Categories: <AiFillCaretDown className="mt-2"></AiFillCaretDown>{" "}
          </h2>
          <TabList className=" category">
            {/* initial load first sub category Data */}
            <Tab onClick={() => handleTab(0, "Talking Plush")}>
              Interactive Plush Toys
            </Tab>
            <Tab onClick={() => handleTab(0, "Light-up Sensory")}>
              Sensory Robots
            </Tab>
            <Tab onClick={() => handleTab(0, "Alphabet Number Learning")}>
              Learning Robots
            </Tab>
          </TabList>

          <TabPanel>
            <h2 className="flex py-2 px-2 font-sans items-center justify-end gap-2 ">
              Choose with Sub Category
              <AiFillCaretDown className="mt-2"></AiFillCaretDown>{" "}
            </h2>
            <Tabs>
              <TabList className="sub-category">
                <Tab onClick={() => handleTab(0, "Talking Plush")}>
                  Talking Plush
                </Tab>
                <Tab onClick={() => handleTab(0, "Musical Plush")}>
                  Musical Plush
                </Tab>
                <Tab onClick={() => handleTab(0, "Huggable")}>
                  Huggable Robotic Toys
                </Tab>
              </TabList>
            </Tabs>
          </TabPanel>
          <TabPanel>
            <h2 className="flex font-sans py-2 px-2 items-center justify-end gap-2 ">
              Choose with Sub Category
              <AiFillCaretDown className="mt-2"></AiFillCaretDown>{" "}
            </h2>
            <Tabs>
              <TabList className="sub-category">
                <Tab onClick={() => handleTab(0, "Light-up Sensory")}>
                  Light-Up Sensory
                </Tab>
                <Tab onClick={() => handleTab(0, "Dancing Toy")}>
                  Dancing Toys
                </Tab>
                <Tab onClick={() => handleTab(0, "Music Robots")}>
                  Music Robots
                </Tab>
              </TabList>
            </Tabs>
          </TabPanel>
          <TabPanel>
            <h2 className="flex py-2 px-2 items-center justify-end gap-2 ">
              Choose with Sub Category
              <AiFillCaretDown className="mt-2"></AiFillCaretDown>{" "}
            </h2>
            <Tabs forceRenderTabPanel>
              <TabList className="sub-category">
                <Tab onClick={() => handleTab(0, "Alphabet Number Learning")}>
                  Alphabet Number Learning
                </Tab>
                <Tab onClick={() => handleTab(0, "Color Recognition")}>
                  Color Recognition
                </Tab>
                <Tab onClick={() => handleTab(0, "Storytelling")}>
                  Storytelling
                </Tab>
              </TabList>
            </Tabs>
          </TabPanel>
        </Tabs>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3">
          {categoryData &&
            categoryData.map((toy) => <ToyCard key={toy._id} toy={toy} />)}
        </div>
      </div>
    </div>
  );
};

export default ToysCategories;
