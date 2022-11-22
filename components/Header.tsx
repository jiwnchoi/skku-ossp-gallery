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
            py={2}
            px={4}
            position={"fixed"}
            top={0}
            backgroundColor="white"
            boxShadow={"xs"}
        >
            <Stack
                direction={"row"}
                w={{ base: "full", xl: "container.xl" }}
                justifyContent={"space-between"}
            >
                <Flex direction={"row"}>
                    <SKKULogo width="32" />
                    <Flex direction={"column"} marginLeft={4}>
                        <Text fontSize={"md"} color="gray.600">
                            성균관대학교 소프트웨어학과
                        </Text>
                        <Text fontSize={"lg"} fontWeight={600} color="gray.600">
                            오픈소스 소프트웨어 실습
                        </Text>
                    </Flex>
                </Flex>
                <Stack direction={"row"}>
                    <Button
                        variant={"ghost"}
                        leftIcon={<ImLab />}
                        size="lg"
                        px={3}
                        onClick={() => window.open("https://idclab.skku.edu")}
                    >
                        <Flex>
                            <Text
                                fontFamily="Rajdhani"
                                fontWeight={600}
                                fontSize="20"
                            >
                                IDC
                            </Text>
                            <Text fontFamily="Rajdhani" fontSize="20">
                                Lab
                            </Text>
                        </Flex>
                    </Button>
                    <Button
                        variant={"ghost"}
                        leftIcon={<AiFillGithub />}
                        size="lg"
                        px={3}
                        onClick={() => window.open("https://github.com/jason-choi/skku-ossp-gallery")}
                    >
                        Github
                    </Button>
                </Stack>
            </Stack>
        </Center>
    );
};
