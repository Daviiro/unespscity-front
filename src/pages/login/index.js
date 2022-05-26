import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Button from "../../components/StyledComponents/form-button";

import {
	ContainerBase,
	Square,
	GrayLine,
	ContainerColumn,
	InputField,
	LoginSignupSpan,
	TopContainer,
	MidContainer,
	BottomContainer,
} from "./styles";

const Login = () => {
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	const [toggle, setToggle] = useState(true);
	const [titleLoginColor, setTitleLoginColor] = useState("#3282b8");
	const [titleSignupColor, setTitleSignupColor] = useState("#000000");

	useEffect(() => {
		if (toggle) {
			setTitleLoginColor("#000000");
			setTitleSignupColor("#3282b8");
		} else {
			setTitleLoginColor("#3282b8");
			setTitleSignupColor("#000000");
		}
	});

	return (
		<>
			<ContainerBase>
				<Square>
					<TopContainer>
						<div
							style={{ cursor: "pointer" }}
							onClick={() =>
								toggle ? setToggle(!toggle) : <></>
							}
						>
							<LoginSignupSpan toggle={titleLoginColor}>
								{" "}
								Cadastrar{" "}
							</LoginSignupSpan>
						</div>
						<div
							style={{ cursor: "pointer" }}
							onClick={() =>
								toggle ? <></> : setToggle(!toggle)
							}
						>
							<LoginSignupSpan toggle={titleSignupColor}>
								{" "}
								Entrar{" "}
							</LoginSignupSpan>
						</div>
					</TopContainer>
					<GrayLine />
					<MidContainer>
						{toggle ? (
							<>
								<InputField type="email" placeholder="E-mail" />
								<InputField
									type="password"
									placeholder="Senha"
								/>
								<Button text="Entrar" />
							</>
						) : (
							<>
								<InputField type="nome" placeholder="Nome" />
								<InputField type="email" placeholder="E-mail" />
								<InputField
									type="password"
									placeholder="Senha"
								/>
								<Button text="Cadastrar" />
							</>
						)}
					</MidContainer>
					<GrayLine />
					<BottomContainer>
						<Link to="/" style={{ textDecoration: "none" }}>
							{" "}
							<h4> Esqueceu sua senha? </h4>{" "}
						</Link>
					</BottomContainer>
				</Square>
			</ContainerBase>
		</>
	);
};
export default Login;
