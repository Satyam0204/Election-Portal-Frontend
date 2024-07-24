import React from "react";
import NitDgpHeader from "../Component/NitDgpHeader";
import Button from "../Component/Button";
import { useNavigate } from "react-router-dom";

function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className=" bg-amber-50 h-screen overflow-y-scroll">
      <NitDgpHeader />
      <div className=" flex flex-col justify-center items-center gap-5">
        <div className=" text-2xl font-semibold">Hey , 21EE8015</div>
        <div>
          Your Eligible Voting Polls are available below. Please Click on
          <strong> Continue</strong> to start your voting.
        </div>
      </div>
      <div className=" grid grid-cols-3 gap-10 py-10">
        {[
          "President ",
          "Vice President ",
          "General Secretary",
          "Sports Secretary",
          "Departmental Representative",
        ].map((ele, index) => {
          return (
            <div
              key={index}
              className=" h-48 rounded-xl shadow-lg px-5 py-4 w-4/5 bg-primary mx-auto flex flex-col justify-center"
            >
              <div className=" text-xl font-bold text-center"> {ele}</div>
            </div>
          );
        })}
      </div>
      <div className=" flex justify-end w-full px-5 mb-10">
        <Button
          onClick={() => {
            navigate("/dashboard/vote");
          }}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

export default DashboardPage;
