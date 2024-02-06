import React, { useState } from "react";
import "../CSS/Collections.scss";

const CategoryCollections = () => {
  const arr_category = ["吃", "景點", "住宿"];
  return (
    <section className="area_category">
      <div className="box_category">
        <div className="category">
          <ul>
            {arr_category.map((category, index) => (
              <li key={index}>
                <a href="">{category}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CategoryCollections;
