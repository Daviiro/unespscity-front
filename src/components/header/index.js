import React from "react";
import {
	HeaderContainer,
	LoginButton,
	ContainerActions,
	ContainerLogo,
	ContainerCenter,
} from "./styles";
import { Link } from "react-router-dom";

const Header = () => {
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
		</HeaderContainer>
	);
};

export default Header;
