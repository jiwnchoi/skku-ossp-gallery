import { atom } from "recoil";
import { Project } from "../types";

const dataState = atom<Project[]>({
  key: "dataState",
  default: [],
});

export { dataState }