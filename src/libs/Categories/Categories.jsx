import React from "react";
import { categories } from "./cat";
import CategoryBox from "./CategoryBox";

const Categories = () => {
  const category = categories;
  return (
    <div className="flex justify-between mt-4 overflow-x-auto">
      {category.map((item, index) => (
        <CategoryBox
          key={index}
          label={item.label}
          icon={item.icon}
          selected={category === item.label}
        ></CategoryBox>
      ))}
    </div>
  );
};

export default Categories;
