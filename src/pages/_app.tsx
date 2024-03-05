import { CustomerProvider } from "@/context/customerContext";
import { APP_INFO } from "@/environments";
import "@/styles/globals.css";
import "@/styles/Header.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>{APP_INFO.TITLE}</title>
				<meta name="description" content={APP_INFO.DESCRIPTION} />
			</Head>
			<CustomerProvider>
				<Component {...pageProps} />
			</CustomerProvider>
		</>
	);
}
