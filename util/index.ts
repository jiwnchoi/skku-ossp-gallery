import axios from "axios";

export const getYoutubeThumbnail = (videoURL: string) => {
    const videoid = videoURL.split("v=")[1];
    return `https://img.youtube.com/vi/${videoid}/maxresdefault.jpg`;
};

export const fetchData = async () => {
    const { data } = await axios.get("https://github.com/jason-choi/skku-ossp-gallery/data/mockup.json");
    return data;
}
