import * as RESTAPI from "./axios";

export const totalVotes = () => RESTAPI.GET("/api/totalvotes");
export const LoginMember = (data) => RESTAPI.POST("/api/login", data);
export const ListEligibleElections = (token) => RESTAPI.GET("/api/election", token);
export const getElection = (election_id, token) => RESTAPI.GET(`/api/election/${election_id}`, token);
export const voteCandidate = (candidate_id, token) => RESTAPI.POST(`/api/vote/${candidate_id}`,{}, token);

