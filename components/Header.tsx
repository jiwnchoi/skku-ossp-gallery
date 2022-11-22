import { Button, Center, Flex, Stack, Text } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { ImLab } from "react-icons/im";
import SKKULogo from "../assets/skku.svg";

export const Header = () => {
    return (
        <Center
            as="nav"
            role={"navigation"}
            minH="16"
            width="full"
            px={4}
            mt={1}
            position={"fixed"}
            top={0}
            backgroundColor="white"
            boxShadow={"xs"}
        >
            <Stack
                direction={"row"}
                w={{ base: "full", xl: "container.xl" }}
                justifyContent={"space-between"}
                verticalAlign="center"
            >
                <Center>
                    <SKKULogo width="30" />
                    <Flex direction={"column"} marginLeft={4}>
                        <Text fontSize={"sm"} color="gray.600">
                            성균관대학교 소프트웨어학과
                        </Text>
                        <Text fontSize={"md"} fontWeight={600} color="gray.600">
                            오픈소스 소프트웨어 실습
                        </Text>
                    </Flex>
                </Center>
                <Center>
                    <Stack direction={{ base: "column", sm: "row" }} spacing={0}>
                        <Button
                            variant={"ghost"}
                            leftIcon={<ImLab />}
                            size={{ base: "sm", md: "xl" }}
                            px={4}


                            onClick={() => window.open("https://idclab.skku.edu")}
                        >
                            <Flex>
                                <Text
                                    fontFamily="Rajdhani"
                                    fontWeight={600}
                                >
                                    IDC
                                </Text>
                                <Text fontFamily="Rajdhani">
                                    Lab
                                </Text>
                            </Flex>
                        </Button>
                        <Button
                            variant={"ghost"}
                            leftIcon={<AiFillGithub />}
                            size={{ base: "sm", md: "xl" }}
                            px={4}

                            onClick={() => window.open("https://github.com/jason-choi/skku-ossp-gallery")}
                        >
                            Github
                        </Button>
                    </Stack>
                </Center>
            </Stack>
        </Center>
    );
};
