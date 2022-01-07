import { useState } from "react";

function GridPractice() {
  return (
    <div className="flex-col items-center justify-center bg-blue-400 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-screen h-screen md:m-0 gap-10 p-10">
        <div
          className={`p-3 border border-black bg-indigo-500 flex items-center justify-center lg:col-span-2 lg:row-span-2 hover:bg-blue-400 transition-all ease-in-out duration-300`}
        >
          content
        </div>
        <div className="box hover:bg-blue-400 bg-indigo-300 transition-all ease-in-out duration-300 lg:col-span-2">
          content
        </div>
        <div className="box lg:col-span-2">content</div>
        <div className="box bg-indigo-300 hover:bg-indigo-400 transition-all ease-in-out duration-300 lg:col-span-4">
          hello
        </div>
        <div className="box lg:col-span-4">content</div>
      </div>
    </div>
  );
}

export default GridPractice;
