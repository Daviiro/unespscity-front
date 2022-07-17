import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "../../components/styled-components/form-button";
import { Context } from "../../context/Auth/AuthContext";

import {
	ContainerBase,
	Square,
	GrayLine,
	Form,
	LoginSignupSpan,
	TopContainer,
	MidContainer,
	BottomContainer,
} from "./styles";

const Login = () => {
    const navigate = useNavigate();
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [toggle, setToggle] = useState(true);
	const [titleLoginColor, setTitleLoginColor] = useState("var(--secondary)");
	const [titleSignupColor, setTitleSignupColor] = useState("#000000");
	const { handleLogin } = useContext(Context);

    async function handleSubmitLogin(e) {
        e.preventDefault();

        const data = {
            email, 
            password
        }

        await handleLogin(data);
        navigate('/');
    }

	async function handleSubmitRegister(e) {
        e.preventDefault();
        navigate('/');
    }

	useEffect(() => {
		if (toggle) {
			setTitleLoginColor("#000000");
			setTitleSignupColor("var(--secondary)");
		} else {
			setTitleLoginColor("var(--secondary)");
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
							<Form  onSubmit={handleSubmitLogin}>
								<TextField
									fullWidth
									id="outlined-basic"
									label="E-mail"
									variant="outlined"
									value={email}
									onChange={(event) => setEmail(event.target.value)}
								/>
								<br />
								<TextField
									fullWidth
									id="outlined-basic"
									label="Senha"
									variant="outlined"
									type="password"
									value={password}
									onChange={(event) => setPassword(event.target.value)}
								/>
								<Button text="Entrar" />
							</Form>
						) : (
							<Form  onSubmit={handleSubmitRegister}>
								<TextField
									fullWidth
									id="outlined-basic"
									label="Nome"
									variant="outlined"
									value={user}
									onChange={(event) => setUser(event.target.value)}
								/>
								<br />
								<TextField
									fullWidth
									id="outlined-basic"
									label="E-mail"
									variant="outlined"
									value={email}
									onChange={(event) => setEmail(event.target.value)}
								/>
								<br />
								<TextField
									fullWidth
									id="outlined-basic"
									label="Senha"
									variant="outlined"
									type="password"
									value={password}
									onChange={(event) => setPassword(event.target.value)}
								/>
								<Button text="Cadastrar" />
							</Form>
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
						<a
							style={{
								textDecoration: "none",
								color: "#000000",
								fontWeight: "550",
								fontSize: "14px",
							}}
							href="mailto:unespscity@unesp.br"
						>
							Deseja se tornar um administrador na plataforma para
							sua cidade?
						</a>
					</BottomContainer>
				</Square>
			</ContainerBase>
		</>
	);
};
export default Login;
