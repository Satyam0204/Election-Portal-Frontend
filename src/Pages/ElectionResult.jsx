import React, { useEffect, useState, useContext } from "react";
import NitDgpHeader from "../Component/NitDgpHeader";
import Button from "../Component/Button";
import AuthContext from "../Context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { getResult } from "../Services/api";
// import { candidates } from "../helpers";

const ElectionResult = () => {
  const navigate = useNavigate();
  let { authToken, logout } = useContext(AuthContext);
  let { id } = useParams();

  const [postition, setPosition] = useState();
  const [candidateArray, setCandidateArray] = useState([]);
  useEffect(() => {
    electionDetails(id);
  }, [id]);

  const electionDetails = async (id) => {
    const res = await getResult(id, authToken);

    if (res.metadata.success) {
      let data = res.payload;
      setPosition(data.role);
      setCandidateArray(data.Candidates);
    }
  };

  return (
    <div>
      <div
        className=" bg-amber-50 h-screen overflow-y-scroll relative"
        onContextMenu={(e) => {
          if (process.env.REACT_APP_PROD === "true") e.preventDefault();
        }}
      >
        <NitDgpHeader />
        <div className="ml-5 font-bold text-2xl"> ADMIN SIDE</div>
        <div className="flex justify-end">
          {" "}
          <Button
            className=" bg-red-500 mr-2"
            onClick={() => {
              logout();
              navigate("/login");
            }}
          >
            Logout
          </Button>
        </div>
        <div className=" capitalize my-3 w-4/5 mx-auto font-bold text-3xl">
          {postition} Candidates :
        </div>
        <div className=" ">
          {candidateArray &&
            candidateArray.length > 0 &&
            candidateArray.map((ele, index) => {
              return (
                <div
                  key={index}
                  className={` rounded-xl shadow-xl px-5 py-4 w-4/5 ${
                    index === 0 ? " bg-green-300" : "bg-primary-300"
                  } mx-auto flex items-center my-3`}
                >
                  <div>
                    <img
                      src={process.env.REACT_APP_API_URL + ele.image}
                      className=" h-12 w-16 rounded-full"
                      alt=""
                    />
                  </div>
                  <div className=" w-1/2  ps-4">
                    <span className=" text-xl font-semibold">{ele.name}</span>{" "}
                    <br /> <span>{ele.department}</span>
                    <br /> <span>{ele.Roll}</span>
                  </div>
                  <div className=" w-full flex justify-end font-extrabold text-3xl">
                    {ele.votes}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ElectionResult;
