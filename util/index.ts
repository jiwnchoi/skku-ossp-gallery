import axios from "axios";
import { Project } from "../types";

export const getYoutubeThumbnail = (videoURL: string) => {
    const videoid = videoURL.split("v=")[1];
    return `https://img.youtube.com/vi/${videoid}/maxresdefault.jpg`;
};

export const fetchData = async () => {
    const { data }: { data: string } = await axios.get(
        "https://raw.githubusercontent.com/Jason-Choi/skku-ossp-gallery/main/data/mockup.json",
        {
            headers: {
                "Cache-Control": "no-store",
                Pragma: "no-store",
                Expires: "0",
            },
        }
    );
    
    
    console.log(JSON.parse(data));
    return JSON.parse(data);
};
