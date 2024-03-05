import React, { ReactNode, useEffect, useState } from "react";
import styles from './styles/Layout.module.scss';
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
