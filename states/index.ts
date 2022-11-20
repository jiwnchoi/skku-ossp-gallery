import { selector } from "recoil";
import { Project } from "../types";
import { fetchData } from "../util";

export const dataSelector = selector<Project[]>({
    key: "dataSelector",
    get: async ({ get }) => {
        const data = await fetchData();
        console.log(data)
        return data;
    },
});
