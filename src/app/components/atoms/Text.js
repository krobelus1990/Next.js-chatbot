import React from "react";
import Typewriter from "typewriter-effect";

const Text = ({ content }) => (
  <div className=" max-w-3xl text-white">
    <Typewriter
      // typeSpeed={0.1}
      onInit={(typewriter) => {
        typewriter
          .typeString(content)
          .callFunction(() => {
            console.log("String typed out!");
          })
          .pauseFor(500)
          // .deleteAll()
          .callFunction(() => {
            console.log("All strings were deleted");
          })
          .start();
      }}
      options={{
        delay: 30,
      }}
    />
  </div>
);

export default Text;
