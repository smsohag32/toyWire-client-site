import { useEffect, useState } from "react";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
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

  console.log(categoryData);
  return (
    <div className="bg-white py-10">
      <div className="toy-container">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold">
            Features Robotic all Categories Toys
          </h3>
          <p className="md:max-w-lg mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut tempore
            ut totam illo, iste voluptas numquam dolorum facilis placeat? Culpa
            accusamus possimus at aut, dolor qui inventore illo voluptatum
            facilis.
          </p>
        </div>
        <Tabs>
          <TabList className="flex justify-center">
            <Tab onClick={() => handleTab(0, "Plush")}>Robotics Plush</Tab>
            <Tab onClick={() => handleTab(0, "Musical")}>Musical</Tab>
            <Tab onClick={() => handleTab(0, "Storytelling")}>Storytelling</Tab>
            <Tab onClick={() => handleTab(0, "Puzzle")}>Puzzle</Tab>
            <Tab onClick={() => handleTab(0, "Vehicle")}>Robotic Vehicle</Tab>
          </TabList>
          <TabPanel></TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ToysCategories;
