import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import theme from "../styles";
import "pretendard/dist/web/variable/pretendardvariable.css";
import { Suspense } from "react";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <ChakraProvider theme={theme}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Component {...pageProps} />
                </Suspense>
            </ChakraProvider>
        </RecoilRoot>
    );
}
