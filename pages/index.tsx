import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react"
import Head from "next/head"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Preview } from "../components/Preview"
import dataState from "../data/mockup.json"

export default function Home() {
    return (
        <Box backgroundColor={"gray.50"}>
            <Head>
                <title>SKKU OSSP Gallery</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container pt={16} pb={20} maxW={{ base: "container.sm", lg: "container.lg", xl: "container.xl" }}>
                <Heading size="md" my={4}>
                    2022학년도 가을학기
                </Heading>
                <SimpleGrid columns={{ base: 2, lg: 3, xl: 4 }} spacing={4}>
                    {Array(32)
                        .fill(0)
                        .map((_, i) => (
                            <Preview project={dataState[0]} key={i}></Preview>
                        ))}
                </SimpleGrid>
            </Container>
            <Header />
            <Footer />
        </Box>
    )
}
