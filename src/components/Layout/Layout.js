import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = () => {
	return (
		<div>
			<Header></Header>
			<div className="container">
				<Outlet />
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Layout;
