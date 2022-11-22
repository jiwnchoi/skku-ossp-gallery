import { Center, Flex, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

export const Footer = () => (
    <Center
        as="footer"
        role="footerinfo"
        px={4}
        py={8}
        position="relative"
        backgroundColor="white"
        boxShadow="xs"
    >
        <Stack
            direction={"row"}
            w={{ base: "full", xl: "container.xl" }}
            justifyContent={"space-between"}
        >
            <Stack
                direction={"column"}
                justify="left"
                alignContent="left"
                spacing={0}
            >
                <Link href="https://idclab.skku.edu">
                    <Flex>
                        <Text
                            fontFamily="idc"
                            fontWeight={600}
                            color="gray.600"
                            fontSize="24"
                        >
                            IDC
                        </Text>
                        <Text
                            fontFamily="idc"
                            fontSize="24"
                            color="gray.600"
                        >
                            Lab
                        </Text>
                    </Flex>
                </Link>
                <Link href="https://skkuu.edu">
                    <Text color="gray.600">Sungkyunkwan University</Text>
                </Link>
                <Link href="https://cs.skku.edu">
                    <Text color="gray.600">
                        College of Computing and Informatics
                    </Text>
                </Link>
            </Stack>
        </Stack>
    </Center>
);
