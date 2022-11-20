import { Card, CardHeader, Heading } from "@chakra-ui/react";
import type { Project } from "../types";

interface PreviewProject {
    project: Project;
}

export const Preview = ({ project }: PreviewProject) => {
    return (
        <Card
            maxW={"sm"}
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
        >
            <CardHeader>
                <Heading>{project.projectName}</Heading>
            </CardHeader>
        </Card>
    );
};
