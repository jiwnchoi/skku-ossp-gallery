import {
    Container, SimpleGrid
} from "@chakra-ui/react";
import Head from "next/head";
import { useRecoilValue } from "recoil";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Preview } from "../components/Preview";
import { dataSelector } from "../states";

export default function Home() {
    const data = useRecoilValue(dataSelector);
    return (
        <>
            <Head>
                <title>SKKU OSSP Gallery</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxW={{ base: "container.sm", xl: "container.xl" }}>
                <SimpleGrid my={20} columns={{ base: 2, xl: 4 }} spacing="10">
                    <Preview project={data[0]}></Preview>
                    <Preview project={data[0]}></Preview>
                    <Preview project={data[0]}></Preview>
                    <Preview project={data[0]}></Preview>
                    <Preview project={data[0]}></Preview>
                    <Preview project={data[0]}></Preview>
                </SimpleGrid>
            </Container>

            <Header />
            <Footer />
        </>
    );
}
