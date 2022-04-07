import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import TodasRotas from "./todasrotas";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/todas-rotas" element={<TodasRotas />} />
			</Routes>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
