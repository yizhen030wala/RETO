import React from "react";
import "../CSS/Collections.scss";

const CategoryCollections = ({ handleBoxTurnClick, currentIndex }) => {
  const arr_category = ["吃", "住宿", "景點"];
  const arr_category_class = [
    "eat_category",
    "accommodation_category",
    "fun_category",
  ];
  // const categoryRefs = arr_category.map(() => useRef(null));
  // ref={categoryRefs[index]}

  return (
    <section className="area_category">
      <div className="box_category">
        <div className="category">
          <ul>
            {arr_category.map((category, index) => (
              <li
                key={index}
                className={`${arr_category_class[index]} ${
                  currentIndex === index ? "active" : ""
                }`}
                onClick={() => handleBoxTurnClick(index)}
              >
                <button>{category}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CategoryCollections;
