import { X } from "lucide-react";
import React from "react";

const Blender = () => {
  return (
    <div>
      <div className="box bg-[#181818] lg:min-w-[300px] w-fit lg:h-16 flex content-center items-center  shadow-xl/70 min-w-5 px-5 py-2 rounded-2xl">
        <div className=" flex flex-row justify-between items-center gap-3 py-3 px-3">
          <img
            className="lg:max-w-10 max-w-8"
            src="https://imgs.search.brave.com/OswlnvIh2UFCWYdnXfvPbGlo839JFjQdRAAEec1xsFk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDUvQmxlbmRlci1F/bWJsZW0tNTAweDI4/MS5wbmc"
            alt=""
          />
          <h1>Blender</h1>
        </div>

        <div className="lg:w-3/4 w-10">{/* blank div for space */}</div>

        <div className="px-5">
          <X size={20} />
        </div>
      </div>
    </div>
  );
};

export default Blender;
