import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "../../components/styled-components/form-button";
import { Context } from "../../context/Auth/AuthContext";
import { api } from '../../services/api';

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
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

const Login = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [toggle, setToggle] = useState(true);
	const [titleLoginColor, setTitleLoginColor] = useState("var(--secondary)");
	const [titleSignupColor, setTitleSignupColor] = useState("#000000");
	const { handleLogin } = useContext(Context);
	const [state, setState] = React.useState({
		open: false,
		vertical: 'top',
		horizontal: 'center',
	});

	const handleClose = () => {
		setState({ ...state, open: false });
	};

	async function handleSubmitLogin(e) {
		e.preventDefault();
		const data = {
			email,
			password
		}

		const status = await handleLogin(data);
		console.log(status)
		if (status === 200) {
			navigate('/');
		}
	}

	async function handleSubmitRegister(e) {
		e.preventDefault();

		try {
			api.post('/cidadao', {
				name: user,
				password,
				email,
				mobilePhone: phone,
				cityId: 1,
				panicButton: false,
				isAdmin: false
			});
		}
		catch (e) {
			console.log(e);
		}
		setUser('')
		setPassword('')
		setEmail('')
		setPhone('')
		setState({ ...state, open: true});

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
							<Form onSubmit={handleSubmitLogin}>
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
							<Form onSubmit={handleSubmitRegister}>
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
								<br />
								<TextField
									fullWidth
									id="outlined-basic"
									label="Telefone"
									variant="outlined"
									type="string"
									value={phone}
									onChange={(event) => setPhone(event.target.value)}
								/>
								<Button text="Cadastrar" />
							</Form>
						)}
					</MidContainer>
				</Square>
			</ContainerBase>
			<Snackbar
				open={state.open}
				onClose={handleClose}
				message= "Cadastro realizado com Sucesso! Vá em 'Entrar' e entre com sua conta!"
				key={state.vertical + state.horizontal}
			/>
		</>
	);
};
export default Login;
