import React from "react";

const MobileCategories = () => {
  let categories = ["react", "node.js", "3dsmax", "unreal", "Spring Boot"];
  return (
    <div className="md:hidden  ">
      <div className="flex gap-3 flex-wrap mt-6">
        {categories.map((category, index) => {
          return (
            <button className="bg-gray  p-3 rounded-[20px] hover:bg-gray-200">
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MobileCategories;
