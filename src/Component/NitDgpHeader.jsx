import React from "react";

function NitDgpHeader() {
  return (
    <div className=" flex items-center justify-center w-full mb-5 py-2 shadow-xl bg-white">
      <img src="/dgplogo.png" alt="" />
      <div className="  px-3">
        <div className=" text-2xl font-bold">
          National Institute of Technology , Durgapur
        </div>
        <div className=" text-blue-500">
          <a href="https://www.nitdgp.ac.in" target="blank">
            www.nitdgp.ac.in
          </a>
        </div>
        <div>
          An Institute of National Importance under Ministry of Education, Govt.
          of India
        </div>
      </div>
    </div>
  );
}

export default NitDgpHeader;
