import React, { useEffect, useState } from "react";
import NitDgpHeader from "../Component/NitDgpHeader";
import { useNavigate } from "react-router-dom";
import { candidates } from "../helpers";
import Button from "../Component/Button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import GlugFooter from "../Component/GlugFooter";

function ElectionPollPage() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [postition, setPosition] = useState(candidates[currentIdx].position);
  const [candidateArray, setCandidateArray] = useState([]);
  const [selectedCandidate, setselectedCandidate] = useState(null);
  const navigate = useNavigate();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    const arrObj = candidates.filter((obj) => obj.position === postition);
    setCandidateArray(arrObj[0].candidates);
  }, [postition]);
  useEffect(() => {
    setPosition(candidates[currentIdx].position);
  }, [currentIdx]);
  return (
    <div className=" bg-amber-50 h-screen overflow-y-scroll relative">
      {console.log(currentIdx)}
      {console.log(postition)}
      <NitDgpHeader />
      <div className=" flex flex-col justify-center items-center gap-5">
        <div className=" text-2xl font-semibold">Hey , 21EE8015</div>
        <div>Click on your preferrend candidate to vote.</div>
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
                className=" rounded-xl shadow-xl px-5 py-4 w-4/5 bg-primary mx-auto flex items-center my-3"
              >
                <div>
                  <img
                    src={ele.image}
                    className=" h-12 w-16 rounded-full"
                    alt=""
                  />
                </div>
                <div className=" w-1/2  ps-4">
                  <span className=" text-xl font-semibold">{ele.name}</span>{" "}
                  <br /> <span>{ele.rollNumber}</span>
                </div>
                <div className=" w-full flex justify-end">
                  <Button
                    onClick={() => {
                      setselectedCandidate(ele);
                      onOpen();
                    }}
                  >
                    {" "}
                    Vote
                  </Button>
                </div>
              </div>
            );
          })}
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={"2xl"}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Confirm your Vote
              </ModalHeader>
              <ModalBody>
                <div className=" rounded-xl shadow-lg bg-amber-100/30 px-5 py-4 w-full  mx-auto flex items-center my-3">
                  <div>
                    <img
                      src={selectedCandidate.image}
                      className=" h-12 w-16 rounded-full"
                      alt=""
                    />
                  </div>
                  <div className=" w-1/2  ps-4">
                    <span className=" text-xl font-semibold">
                      {selectedCandidate.name}
                    </span>{" "}
                    <br /> <span>{selectedCandidate.rollNumber}</span>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button onPress={onClose}>Close</Button>
                <Button
                  onClick={() => {
                    if (currentIdx + 1 === candidates.length) {
                      navigate("/login");
                    } else {
                      setCurrentIdx(currentIdx + 1);
                      onClose();
                    }
                  }}
                  color="primary"
                  onPress={onClose}
                >
                  Vote and Continue
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <GlugFooter />
    </div>
  );
}

export default ElectionPollPage;
