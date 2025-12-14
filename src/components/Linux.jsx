import { X } from "lucide-react";
import React from "react";

const Linux = () => {
  return (
    <div className="box bg-[#181818] min-w-[300px] w-fit h-fit flex content-center items-center  shadow-xl/70">
      <div className=" flex flex-row justify-between items-center gap-3 py-3 px-3">
        <img
          className="w-10"
          src="https://imgs.search.brave.com/4EeHjatg1EO041d2y7ulC8532QFmX7rNaAsX4IOqUbI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzgvMi9saW51eC10/dXgtbG9nby1wbmdf/c2Vla2xvZ28tODQ1/MDkucG5n"
          alt=""
        />
        <h1>Linux</h1>
      </div>

      <div className="w-3/4">{/* blank div for space */}</div>

      <div className="px-5">
        <X size={20} />
      </div>
    </div>
  );
};

export default Linux;
