import { Button, Card, CardHeader, Divider, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import type { Project } from "../types";
import { getYoutubeThumbnail } from "../util";

interface PreviewProject {
    project: Project;
}

export const Preview = ({ project }: PreviewProject) => {
    console.log(project)
    return (
        <Card
            maxW={"sm"}
            direction={"column"}
            overflow="hidden"
            variant="outline"
        >
            {/* <Image width={"full"} src={getYoutubeThumbnail(project.videoUrl)} /> */}
            <Stack direction={"column"}>
                <Heading size="md">{project.projectName}</Heading>
                {project.students.map((student) => (
                    <Stack direction={"row"} key={student.name}>
                        <Heading size="sm">{student.name}</Heading>
                        <Text size="sm">{student.department}</Text>
                    </Stack>
                ))}
            </Stack>
            <Divider />
            <Stack direction={"row"}>
                <Button>Github</Button>
                <Button>Youtube</Button>
            </Stack>
        </Card>
    );
};
