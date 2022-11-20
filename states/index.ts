import axios from "axios";
import { selector } from "recoil";
import { Project } from "../types";

export const dataSelector = selector<Project[]>({
    key: "dataSelector",
    get: async ({ get }) => {
        const { data }: { data: Project[] } = await axios.get(
            "https://raw.githubusercontent.com/Jason-Choi/skku-ossp-gallery/main/data/mockup.json"
        );
        return data;
    },
});
