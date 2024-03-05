import { APP_INFO } from "@/environments";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>{APP_INFO.TITLE}</title>
        <meta name="description" content={APP_INFO.DESCRIPTION} />
			</Head>
			<Component {...pageProps} />
		</>
	);
}
