import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "../../components/styled-components/form-button";

import {
	ContainerBase,
	Square,
	GrayLine,
	InputField,
	LoginSignupSpan,
	TopContainer,
	MidContainer,
	BottomContainer,
} from "./styles";

const Login = () => {
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [toggle, setToggle] = useState(true);
	const [titleLoginColor, setTitleLoginColor] = useState("var(--secondary)");
	const [titleSignupColor, setTitleSignupColor] = useState("#000000");

	useEffect(() => {
		if (toggle) {
			setTitleLoginColor("#000000");
			setTitleSignupColor("var(--secondary)");
		} else {
			setTitleLoginColor("var(--secondary)");
			setTitleSignupColor("#000000");
		}
	});

	const handleUserChange = (event) => {
		setUser(event.target.value);
		console.log(email);
	};
	const handleEmailChange = (event) => {
		setEmail(event.target.value);
		console.log(email);
	};
	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
		console.log(email);
	};

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
								<TextField
									fullWidth
									id="outlined-basic"
									label="E-mail"
									variant="outlined"
									value={email}
									onChange={handleEmailChange}
								/>
								<br />
								<TextField
									fullWidth
									id="outlined-basic"
									label="Senha"
									variant="outlined"
									type="password"
									value={password}
									onChange={handlePasswordChange}
								/>
								<Button text="Entrar" />
							</>
						) : (
							<>
								<TextField
									fullWidth
									id="outlined-basic"
									label="Nome"
									variant="outlined"
									value={user}
									onChange={handleUserChange}
								/>
								<br />
								<TextField
									fullWidth
									id="outlined-basic"
									label="E-mail"
									variant="outlined"
									value={email}
									onChange={handleEmailChange}
								/>
								<br />
								<TextField
									fullWidth
									id="outlined-basic"
									label="Senha"
									variant="outlined"
									type="password"
									value={password}
									onChange={handlePasswordChange}
								/>
								<Button text="Cadastrar" />
							</>
						)}
					</MidContainer>
					<GrayLine />
					<BottomContainer>
						<Link
							to="/password-reset"
							style={{ textDecoration: "none" }}
						>
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
