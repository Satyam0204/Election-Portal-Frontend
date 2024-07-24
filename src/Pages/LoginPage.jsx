import React from "react";
import Button from "../Component/Button";
import { Input } from "@nextui-org/react";
import GlugFooter from "../Component/GlugFooter";

function LoginPage() {
  return (
    <div className=" w-screen h-screen flex flex-col md:flex-row">
      <div className=" md:w-3/5 w-full h-screen flex flex-col justify-center gap-6 py-5 relative ">
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
              />
            </div>
            <div className=" my-3">
              <div>Your Password </div>
              <Input
                type="password"
                placeholder=" Enter your password "
                description="Eg : f45#&ha*"
                required
              />
            </div>{" "}
            <Button className={" my-3"}>Sign In</Button>
          </div>
        </div>
        <GlugFooter />
      </div>
      <div className=" md:w-2/5 w-full hidden h-screen md:block bg-primary">
        <div className=" flex items-center justify-center flex-col h-full">
          <p className=" text-3xl">Total Votes Casted</p>
          <p className=" text-xl">253</p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
