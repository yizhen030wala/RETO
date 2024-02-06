import React, { useState } from "react";
import "../CSS/Collections.scss";

const Location = () => {
  const arr_location = ["台北", "台南", "台中", "花蓮"];
  const num_class = [1, 2, 3, 4];
  return (
    <div className="locate">
      <ul>
        {arr_location.map((location, index) => (
          <li className={`label${num_class[index]}`} key={index}>
            <a href="#">{location}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Location;
