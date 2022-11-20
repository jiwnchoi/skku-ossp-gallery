import Head from "next/head";
import { useRecoilValue } from "recoil";
import { Preview } from "../components/Preview";
import { dataSelector } from "../states";

export default function Home() {
    const data = useRecoilValue(dataSelector);
    return (
        <div>
            <Head>
                <title>SKKU OSSP Gallery</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Preview project={data[0]}></Preview>
        </div>
    );
}
