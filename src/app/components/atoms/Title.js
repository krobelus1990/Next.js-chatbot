import React from "react";

const Title = ({ text, color }) => (
  <h1
    style={{ color }}
    className=" flex justify-center items-center text-3xl font-bold"
  >
    {text}
  </h1>
);

export default Title;
