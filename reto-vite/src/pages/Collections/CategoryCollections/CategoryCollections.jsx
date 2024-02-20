import React, { useState } from "react";
import "../CSS/Collections.scss";

const CategoryCollections = () => {
  const arr_category = ["吃", "景點", "住宿"];
  const arr_category_class = ["eat_category","fun_category","accommodation_category"];
  return (
    <section className="area_category">
      <div className="box_category">
        <div className="category">
          <ul>
            {arr_category.map((category, index) => (
              <li key={index} className={arr_category_class[index]}>
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CategoryCollections;
