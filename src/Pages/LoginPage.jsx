import React, { useEffect, useState, useContext } from "react";
import Button from "../Component/Button";
import { Input } from "@nextui-org/react";
import GlugFooter from "../Component/GlugFooter";
import NitDgpHeader from "../Component/NitDgpHeader";
import { useNavigate } from "react-router-dom";
import { LoginMember, totalVotes } from "../Services/api";
import Authcontext from "../Context/AuthContext";


function LoginPage() {
  const navigate = useNavigate();
  let {authToken, setAuthToken, setUserDetails}=useContext(Authcontext);
  const [voteCnt, setVoteCnt] = useState()
  const [username,setUserName] = useState();
  const [pass,setPass] = useState();
  const [errorMsg, setErrMsg] = useState(" ");

  useEffect(()=>{
    if(authToken){
      navigate("/dashboard");
    }  
    getTotalVotes();
  },[authToken]);

  const getTotalVotes = async () => {
    const res = await totalVotes();
  
    if(res.metadata.success){
      setVoteCnt(res.payload.total_votes);
    }
  }

  const loadData= async ()=>{
    const data ={
      "username": username,
      "password" : pass
    };
    console.log(data)
    const res = await LoginMember(data);
    if(res.metadata.success===true){
      setAuthToken(res.payload.access);
      setUserDetails(res.payload.data);
      navigate("/dashboard");
    }
    else{
      setErrMsg(JSON.stringify(res.payload.data.message));
      console.log(res);
    }
    
  }
  return (
    <div className=" w-screen h-screen flex flex-col md:flex-row">
      <div className=" md:w-3/5 w-full h-screen flex flex-col gap-6 py-5 relative ">
        <NitDgpHeader />
        <p className=" text-4xl md:text-2xl text-center">
          GymKhana Election Portal
        </p>
        <div className=" w-3/4 rounded-xl bg-amber-100/20 mx-auto shadow-lg   py-10 px-5">
          <p className=" text-3xl text-center">Log In To your Account</p>

          <div className=" w-3/4 mx-auto py-10 flex flex-col gap-0">
            <div className=" my-3">
              <div>Your Roll Number </div>
              <Input
                type="text"
                placeholder=" Enter your Roll Number "
                description="Eg : 21EE8015"
                required
              onChange={(e)=>{setUserName(e.target.value)}} />
            </div>
            <div className=" my-3">
              <div>Your Password </div>
              <Input
                type="password"
                placeholder=" Enter your password "
                description="Eg : f45#&ha*"
                required
                onChange={(e)=>{setPass(e.target.value)}}
              />
            </div>
            <div className=" text-red-500">
            {errorMsg}
            </div>
            <Button
              className={" my-3"}
              onClick={() => {
                loadData()
              }}
            >
              Sign In
            </Button>
          </div>
        </div>
        <GlugFooter />
      </div>
      <div className=" md:w-2/5 w-full hidden h-screen md:block bg-primary">
        <div className=" flex items-center justify-center flex-col h-full">
          <p className=" text-3xl">Total Votes Casted</p>
          <p className=" text-xl">{voteCnt}</p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
