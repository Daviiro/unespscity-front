import React, { useState, useEffect } from "react";
import {
	HeaderContainer,
	LoginButton,
	ContainerActions,
	ContainerLogo,
	ContainerCenter,
} from "./styles";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";
import * as FaIcons from "react-icons/fa";

const Header = () => {
	const [windowDimenion, detectHW] = useState({
		winWidth: window.innerWidth,
		winHeight: window.innerHeight,
	});

	const detectSize = () => {
		detectHW({
			winWidth: window.innerWidth,
			winHeight: window.innerHeight,
		});
	};
	useEffect(() => {
		window.addEventListener("resize", detectSize);

		return () => {
			window.removeEventListener("resize", detectSize);
		};
	}, [windowDimenion]);
	return (
		<HeaderContainer>
			<ContainerLogo>
				<Link to="/">
					{" "}
					<img
						src={
							process.env.PUBLIC_URL +
							"/assets/img/home_logo_temporario.png"
						}
						alt="Logo"
					/>
				</Link>
			</ContainerLogo>
			<ContainerCenter>
				<h1 style={{ cursor: "default" }}> UnespSCity </h1>
			</ContainerCenter>

			{windowDimenion.winWidth >= 958 ? (
				<ContainerActions>
					<div>
						<Link to="/login" style={{ textDecoration: "none" }}>
							<LoginButton style={{ textDecoration: "none" }}>
								<span>Login </span>
							</LoginButton>
						</Link>
					</div>
					<div>
						<img
							src={
								process.env.PUBLIC_URL +
								"/assets/img/home_engrenagem.png"
							}
							alt="Logo"
						/>
					</div>
				</ContainerActions>
			) : (
				<ContainerActions>
					<div></div>
					<FaIcons.FaBars color={"white"} size={20} />
				</ContainerActions>
			)}
		</HeaderContainer>
	);
};

export default Header;
