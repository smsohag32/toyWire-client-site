import { useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./category.css";

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
            <h2 className="flex py-2 px-2 items-center justify-end gap-2 ">
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
              <TabPanel>
                <p>
                  Youngest child and daughter of Homer and Marge; sister of Bart
                  and Lisa.
                </p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Maggie_Simpson.png/223px-Maggie_Simpson.png"
                  alt="Maggie Simpson"
                />
              </TabPanel>
            </Tabs>
          </TabPanel>
          <TabPanel>
            <h2 className="flex py-2 px-2 items-center justify-end gap-2 ">
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
              <TabPanel>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                nobis dignissimos voluptatem sequi culpa totam ad accusamus sint
                natus debitis odio, at repudiandae dolor modi minima voluptatum
                officiis, ea sunt!
              </TabPanel>
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
              <TabPanel>okay</TabPanel>
            </Tabs>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ToysCategories;
