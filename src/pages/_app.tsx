import { BottomBar } from "@/components/footer";
import { TopBar } from "@/components/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRef } from "react";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Rasa Tak Terbuang</title>
                <meta name="og:title" content="Rasa Tak Terbuang" />
                <meta
                    name="og:description"
                    content="Rasa Tak Terbuang adalah description goes here brr"
                />
                <meta name="og:image" content="./logo-desc-big-nobg.png" />
                <link rel="shortcut icon" href="./logo-desc-big-nobg.png" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="./logo-desc-big-nobg.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="./logo-desc-big-nobg.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="./logo-desc-big-nobg.png"
                />
            </Head>
            {/* <TopBar /> */}
            {/* <div className="cursor-style" ref={cursor}></div> */}
            <Component {...pageProps} />
            <BottomBar />
        </>
    );
}
