import React from "react";

const Text = ({ content }) => (
  <div className=" max-w-3xl text-black text-xl bg-[#dcdcdb] py-4 px-6 rounded-xl">
    {content == "loading-spinner" ? <img src="/25.svg" alt="" className=" w-6" /> : content}
  </div>
);

export default Text;
