import React, { useState, useEffect } from "react";
import {
	HeaderContainer,
	ContainerActions,
	ContainerLogo,
	ContainerCenter,
} from "./styles";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import * as FaIcons from "react-icons/fa";
import { BsFillGearFill } from "react-icons/bs";
import { BiUser } from "react-icons/bi";

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

		if (window.innerWidth >= 958) {
			setSidebar(false);
		}

		return () => {
			window.removeEventListener("resize", detectSize);
		};
	}, [windowDimenion]);

	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => {
		setSidebar(!sidebar);
		//console.log("clicado");
	};
	//console.log(sidebar);

	return (
		<>
			<Sidebar sidebar={sidebar} showSidebar={showSidebar} />
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
							<Link
								to="/login"
								style={{ textDecoration: "none" }}
							>
								<BiUser
									style={{ cursor: "pointer" }}
									color={"white"}
									size={30}
									className="glow-effect"
								/>
							</Link>
						</div>
						<div>
							<Link
								to="/sistema"
								style={{ textDecoration: "none" }}
							>
								<BsFillGearFill
									style={{ cursor: "pointer" }}
									color={"white"}
									size={30}
									className="glow-effect"
								/>
							</Link>
						</div>
					</ContainerActions>
				) : (
					<ContainerActions>
						<div></div>
						<FaIcons.FaBars
							style={{ cursor: "pointer" }}
							color={"white"}
							size={25}
							onClick={() => showSidebar()}
						/>
					</ContainerActions>
				)}
			</HeaderContainer>
		</>
	);
};

export default Header;
