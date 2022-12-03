import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Preview } from "../components/Preview";
import { Project } from "../types";
import mockupState from "../data/mockup.json";
import axios from "axios";

export default function Home() {
    const [dataState, setDataState] = useState<Project[]>([]);
    const [loadingState, setLoadingState] = useState<boolean>(true);

    const shuffle = (array: Project[]) => array.sort(() => Math.random() - 0.5);

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(
                "https://raw.githubusercontent.com/Jason-Choi/skku-ossp-gallery/main/data/2022fall.json"
            );
            const shuffledData = shuffle(result.data);
            setDataState(shuffledData);
            setLoadingState(false);
        }
        fetchData();
    }, []);

    return (
        <Box backgroundColor={"gray.50"}>
            <Head>
                <title>SKKU OSSP Gallery</title>
                <link
                    type="image/png"
                    rel="icon"
                    href="https://www.skku.edu/_res/skku/img/common/favicon.png"
                />
            </Head>

            <Container
                pt={16}
                pb={20}
                maxW={{
                    base: "container.sm",
                    lg: "container.lg",
                    xl: "container.xl",
                }}
            >
                <Heading size="md" my={4}>
                    2022학년도 가을학기
                </Heading>
                {loadingState ? null : (
                    <SimpleGrid columns={{ base: 2, lg: 3, xl: 4 }} spacing={4}>
                        {Array(32)
                            .fill(0)
                            .map((_, i) => (
                                <Preview
                                    project={dataState[i]}
                                    key={i}
                                ></Preview>
                            ))}
                    </SimpleGrid>
                )}
            </Container>
            <Header />
            <Footer />
        </Box>
    );
}
