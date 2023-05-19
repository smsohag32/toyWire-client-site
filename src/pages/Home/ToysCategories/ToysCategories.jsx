import { useEffect, useState } from "react";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const ToysCategories = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [categoryData, SetCategoryData] = useState(null);

  //   handle category data load
  const handleCategoryData = (index) => {
    setSelectedTab(index);
  };

  // load category data
  useEffect(() => {
    const fetchData = async () => {
      try {
        let category = "";
        if (selectedTab == 0) {
          category = "Plush";
        } else if (selectedTab == 1) {
          category = "Musical";
        } else if (selectedTab == 2) {
          category = "Storytelling";
        } else if (selectedTab == 3) {
          category = "Vehicle";
        } else {
          category = "all";
        }

        const res = await fetch(`http://localhost:3000/toys/${category}`);
        const data = await res.json();
        SetCategoryData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedTab, categoryData]);
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
        <Tabs selectedIndex={selectedTab} onSelect={handleCategoryData}>
          <TabList className="flex justify-center">
            <Tab>Robotics Plush</Tab>
            <Tab>Musical</Tab>
            <Tab>Storytelling</Tab>
            <Tab>Puzzle</Tab>
            <Tab>Robotic Vehicle</Tab>
          </TabList>
          <TabPanel></TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ToysCategories;
