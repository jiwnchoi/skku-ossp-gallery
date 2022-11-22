import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "pretendard/dist/web/variable/pretendardvariable.css";
import "@fontsource/rajdhani";

import theme from "../styles";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}
