import { X } from "lucide-react";
import React from "react";

const Python = () => {
  return (
    <div className="box bg-[#181818] lg:min-w-[300px] w-fit lg:h-16 flex content-center items-center  shadow-xl/70 min-w-5 px-5 py-2 rounded-2xl">
      <div className=" flex flex-row justify-between items-center gap-3 py-3 px-2">
        <img
          className="w-10"
          src="https://imgs.search.brave.com/omPwIknEWmqzT-V8gUg5EgVzw5BOHJGig6iZXYyEuYM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MTAvUHl0aG9uLUVt/YmxlbS03MDB4Mzk0/LnBuZw"
          alt=""
        />
        <h1>Python</h1>
      </div>

      <div className="lg:w-3/4 w-10">{/* blank div for space */}</div>

      <div className="px-5">
        <X size={20} />
      </div>
    </div>
  );
};

export default Python;
