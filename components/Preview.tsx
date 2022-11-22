import {
    AspectRatio,
    Box,
    Button,
    Card,
    CardBody,
    Divider,
    Heading,
    Stack,
    Text,
} from "@chakra-ui/react";
import Image from "next/image";
import type { Project } from "../types";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";

interface PreviewProject {
    project: Project;
}

const getImageSrc = (videoUrl: string) =>
    `https://img.youtube.com/vi/${videoUrl.split("v=")[1]}/maxresdefault.jpg`;

export const Preview = ({ project }: PreviewProject) => {
    console.log(project);
    return (
        <Card
            width={"full"}
            direction={"column"}
            variant="elevated"
            overflow={"hidden"}
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
                    <Text fontSize={26} fontWeight={700}>
                        {project.projectName}
                    </Text>
                    <Text>프로젝트 설명을 위한 Placeholder 입니다.</Text>
                    <Divider />
                    {project.students.map((student) => (
                        <Stack direction={"row"} key={student.name}>
                            <Text size="sm" fontWeight={600}>
                                {student.name}
                            </Text>
                            <Text size="sm">{student.department}</Text>
                        </Stack>
                    ))}
                    <Divider />
                    <Stack direction={"row"}>
                        <Button
                            width="50%"
                            colorScheme={"github"}
                            variant="solid"
                            leftIcon={<AiFillGithub />}
                            onClick={() => window.open(project.repositoryUrl)}
                        >
                            Github
                        </Button>
                        <Button
                            width="50%"
                            colorScheme={"red"}
                            variant="solid"
                            leftIcon={<AiFillYoutube />}
                            onClick={() => window.open(project.videoUrl)}
                        >
                            Youtube
                        </Button>
                    </Stack>
                </Stack>
            </CardBody>
        </Card>
    );
};
