import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

const routes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/admin/:username" element={<Home />} />
				<Route path="/admin/:username/dashboard" element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	);
};

export default routes;
