import { Button, Center, Flex, Stack, Text } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { RiSurveyFill } from "react-icons/ri";
import { ImLab } from "react-icons/im";
import SKKULogo from "../public/skku.svg";

export const Header = () => {
    return (
        <Center
            as="nav"
            role={"navigation"}
            minH="16"
            width="full"
            px={4}
            position={"fixed"}
            top={0}
            backgroundColor="white"
            boxShadow={"xs"}
        >
            <Stack
                direction={"row"}
                mt={1}
                w={{ base: "full", xl: "container.xl" }}
                justifyContent={"space-between"}
                verticalAlign="center"
            >
                <Center>
                    <SKKULogo width="30" />
                    <Flex direction={"column"} marginLeft={4}>
                        <Text
                            fontSize={{ base: "xs", sm: "md" }}
                            color="gray.500"
                        >
                            성균관대학교 소프트웨어학과
                        </Text>
                        <Text
                            fontSize={{ base: "sm", sm: "md" }}
                            fontWeight={600}
                            color="gray.500"
                        >
                            오픈소스 소프트웨어 실습
                        </Text>
                    </Flex>
                </Center>
                <Center>
                    <Stack direction={{ base: "row", sm: "row" }} align="start">
                        <Button
                            py={4}
                            variant={"solid"}
                            colorScheme="gray"
                            leftIcon={<ImLab />}
                            size={{ base: "xs", md: "sm" }}
                            px={4}
                            onClick={() =>
                                window.open("https://idclab.skku.edu")
                            }
                        >
                            <Flex>
                                <Text
                                    fontSize={"md"}
                                    fontFamily="idc"
                                    fontWeight={600}
                                >
                                    IDC
                                </Text>
                                <Text
                                    fontSize={"md"}
                                    fontFamily="idc"
                                    fontWeight={500}
                                >
                                    Lab
                                </Text>
                            </Flex>
                        </Button>
                        <Button
                            py={4}
                            variant={"solid"}
                            colorScheme="green"
                            leftIcon={<RiSurveyFill />}
                            size={{ base: "xs", md: "sm" }}
                            px={4}
                            onClick={() =>
                                window.open(
                                    "https://docs.google.com/forms/d/e/1FAIpQLSfu9JBNfNYu4KXPRTCnULin6Zg70BqsKsbFYz3IZbYU3wFv7g/viewform"
                                )
                            }
                        >
                            Survey
                        </Button>
                    </Stack>
                </Center>
            </Stack>
        </Center>
    );
};
