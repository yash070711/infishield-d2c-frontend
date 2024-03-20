import { CustomerProvider } from "@/context/customerContext";
import { APP_INFO } from "@/environments";
import "@/styles/globals.css";
import "@/styles/Header.scss";
import "@/styles/Slider.css";
import "@/styles/Plans.css";
import "@/styles/Networks.css";
import "@/styles/OurPartner.css";
import "@/styles/InfyAbout.css";
import "@/styles/Footer.css";
import "@/styles/Login.scss";
import "@/styles/mycart.css";
import "@/styles/OurProducts.css";
import "@/styles/trackmyservice.css";
import "@/styles/Plan.css"
import "@/styles/Benfits.css"
import favicon from '@/assets/images/InfinityLogo.png'
import type { AppProps } from "next/app";
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import store from "@/store/store";
import { Provider } from "react-redux";
export default function App({ Component, pageProps }: AppProps) {

	useEffect(() => {
		require("bootstrap/dist/js/bootstrap.bundle.min.js");
	}, []);	

	return (
		<Provider store={store}>
			<Head>
				<title>{APP_INFO.TITLE}</title>
				<meta name="description" content={APP_INFO.DESCRIPTION} />
				<link rel="shortcut icon" href={favicon.src} />
			</Head>
			<CustomerProvider>
				<ToastContainer />
				<Component {...pageProps} />
			</CustomerProvider>
		</Provider>
	);
}
