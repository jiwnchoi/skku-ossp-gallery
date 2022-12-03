import {
    AspectRatio,
    Button,
    Card,
    CardBody,
    Divider,
    Stack,
    Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { AiFillGithub, AiFillHome, AiFillYoutube } from "react-icons/ai";
import type { Project } from "../types";

interface PreviewProject {
    project: Project;
}

const getImageSrc = (videoUrl: string) =>
    `https://img.youtube.com/vi/${videoUrl.split("v=")[1]}/hqdefault.jpg`;

export const Preview = ({ project }: PreviewProject) => {
    return (
        <Card
            width={"full"}
            height={"fit-content"}
            direction={"column"}
            variant="elevated"
            overflow={"hidden"}
            backgroundColor={"white"}
        >
            <AspectRatio width={"full"} ratio={16 / 9}>
                <Image
                    fill
                    src={getImageSrc(project.videoUrl)}
                    alt={`${project.projectName} thumbnail`}
                />
            </AspectRatio>
            <CardBody>
                <Stack direction={"column"} spacing={2}>
                    <Text fontSize={{ base: 20, md: 24 }} fontWeight={700}>
                        {project.projectName}
                    </Text>
                    <Text fontSize={{ base: "xs", md: "sm" }}>
                        {project.description}
                    </Text>
                    <Divider />
                    {project.students.map((student) => (
                        <Stack direction={"row"} key={student.name}>
                            <Text
                                fontSize={{ base: "sm", md: "sm" }}
                                fontWeight={600}
                            >
                                {student.name}
                            </Text>
                            <Text fontSize={{ base: "sm", md: "sm" }}>
                                {student.department}
                            </Text>
                        </Stack>
                    ))}
                    <Divider />
                    <Stack direction={{ base: "column", sm: "row" }}>
                        <Button
                            size={{ base: "sm", md: "md" }}
                            width={{ base: "100%", md: "50%" }}
                            colorScheme={"github"}
                            variant="solid"
                            leftIcon={<AiFillGithub />}
                            onClick={() => window.open(project.repositoryUrl)}
                        >
                            <Text fontSize={{ base: "sm", md: "md" }}>
                                Github
                            </Text>
                        </Button>
                        <Button
                            size={{ base: "sm", md: "md" }}
                            width={{ base: "100%", md: "50%" }}
                            colorScheme={"red"}
                            variant="solid"
                            leftIcon={<AiFillYoutube />}
                            onClick={() => window.open(project.videoUrl)}
                        >
                            <Text fontSize={{ base: "sm", md: "md" }}>
                                Youtube
                            </Text>
                        </Button>
                    </Stack>
                    {project.liveDemoUrl !== "" ? (
                        <Button
                            size={{ base: "sm", md: "md" }}
                            width={{ base: "100%", md: "100%" }}
                            colorScheme={"blue"}
                            variant="solid"
                            leftIcon={<AiFillHome />}
                            onClick={() => window.open(project.liveDemoUrl)}
                        >
                            <Text fontSize={{ base: "sm", md: "md" }}>
                                Web Demo
                            </Text>
                        </Button>
                    ) : null}
                </Stack>
            </CardBody>
        </Card>
    );
};
