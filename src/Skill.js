import React from "react";
import "./index.css";

function Skill({ name, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{name}</span>
      <span>
        {level === "mid" && "👾"}
        {level === "pro" && "💯"}
        {level === "newbie" && "😿"}
      </span>
    </div>
  );
}
export default Skill;
