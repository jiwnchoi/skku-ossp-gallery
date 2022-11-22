import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Preview } from "../components/Preview";
import { Project } from "../types";

export default function Home() {
    const [dataState, setDataState] = useState<Project[]>([]);
    const [loadingState, setLoadingState] = useState<boolean>(true);

    useEffect(() => {
        (async () => {
            const { data }: { data: Project[] } = await axios.get(
                "https://raw.githubusercontent.com/Jason-Choi/skku-ossp-gallery/main/data/mockup.json"
            );
            setDataState(data);
            setLoadingState(false);
        })();
    }, []);

    return (
        <>
            <Head>
                <title>SKKU OSSP Gallery</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {loadingState ? (
                <Box>Loading</Box>
            ) : (
                <Container maxW={{ base: "container.sm", lg : "container.lg", xl: "container.xl" }}>
                    <SimpleGrid
                        my={20}
                        columns={{ base: 2, lg: 3, xl: 4 }}
                        spacing={4}
                    >
                        <Preview project={dataState[0]}></Preview>
                        <Preview project={dataState[0]}></Preview>
                        <Preview project={dataState[0]}></Preview>
                        <Preview project={dataState[0]}></Preview>
                        <Preview project={dataState[0]}></Preview>
                        <Preview project={dataState[0]}></Preview>
                    </SimpleGrid>
                </Container>
            )}
            <Header />
            <Footer />
        </>
    );
}
