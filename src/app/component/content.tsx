import React from "react";

const Contents = () => {
  return (
    <div className="flex flex-row  gap-[20px]">
      <div className="flex flex-col w-[50%] h-[700px] gap-2  ">
        <div className="bg-[#ffffff] h-[400px] rounded-[20px] p-[10px]">
          <h1>Average Charts</h1>
        </div>
        <div className="bg-[#ffffff] h-[400px] rounded-[20px]  p-[10px]">
          {" "}
          <h1>Map</h1>
        </div>
      </div>
      <div className="flex flex-col w-[50%]  gap-2 h-[700px] ">
        <div className="bg-[#ffffff] h-[200px] rounded-[20px] p-[10px]">
          {" "}
          Calculation
        </div>
        <div className="flex flex-row gap-2">
          <div className="bg-[#ffffff] h-[350px] w-[70%] rounded-[20px] p-[10px]">
            {" "}
            Analitycal
          </div>
          <div className="bg-[#ffffff] h-[350px] w-[30%] rounded-[20px] p-[10px]">
            {" "}
            Lorem ipsum dolor
          </div>
        </div>
        <div className="bg-[#ffffff] rounded-[20px] h-[150px] p-[10px]">
          {" "}
          Recent Update
        </div>
      </div>
    </div>
  );
};

export default Contents;
