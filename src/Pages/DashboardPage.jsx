import React, { useContext, useEffect, useState } from "react";
import NitDgpHeader from "../Component/NitDgpHeader";
import Button from "../Component/Button";
import { useNavigate } from "react-router-dom";
import { ListEligibleElections } from "../Services/api";
import AuthContext from "../Context/AuthContext";

function DashboardPage() {
  const navigate = useNavigate();
  const [elections, setElections] = useState()
  let {authToken, userDetails, logout}=useContext(AuthContext)
  useEffect(()=>{
    getElections()
  },[])

  const getElections = async () =>{
    const res = await ListEligibleElections(authToken)
    if(res.metadata.status.status===401) {
      logout();
      navigate("/login");
    }
    if(res.metadata.success){
      setElections(res.payload)
    }
  }
  return (
    <div className=" bg-amber-50 h-screen overflow-y-scroll">
      <NitDgpHeader />
      <div className=" flex flex-col justify-center items-center gap-5">
        <div className=" text-2xl font-semibold">Hey , {userDetails.username}</div>
        <div>
          Your Eligible Voting Polls are available below. Please Click on
          <strong> Continue</strong> to start your voting.
        </div>
      </div>
      <div className=" grid grid-cols-3 gap-10 py-10">
        {elections?.map((ele, index) => {
          return (
            <div
              key={index}
              className=" h-48 rounded-xl shadow-lg px-5 py-4 w-4/5 bg-primary mx-auto flex flex-col justify-center"
            >
              <div className=" text-xl font-bold text-center"> {ele.title}</div>
              <div className=" text-md text-center"> Role: {ele.role}</div>
              <div className=" text-md text-center"> Dept: {ele.department}</div>
            </div>
          );
        })}
      </div>
      <div className=" flex justify-end w-full px-5 mb-10">
        <Button
          onClick={() => {
            navigate(`/dashboard/vote/${elections[0].id}`, { state: { elections } });
          }}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

export default DashboardPage;
