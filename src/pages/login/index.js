import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ContainerBase, Square, ContainerRow, GrayLine, ContainerColumn, InputField, LoginButton } from './styles';

const Login = () => {
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	return (
		<>
			<ContainerBase>
				<Square>
					<ContainerRow>
						<Link to = "/" style = {{ textDecoration: "none" }}> <h4> Voltar </h4> </Link>
						<Link to = "/" style = {{ textDecoration: "none" }}> <h4> Não tem uma conta? Cadastre-se </h4> </Link>
					</ContainerRow>
					<GrayLine/>
					<ContainerColumn>
						<h2> Login </h2>
						<InputField type = "email" placeholder = "e-mail"/>
						<InputField type = "password" placeholder = "senha"/>
						<LoginButton>
							<h3> Entrar </h3>
						</LoginButton>
						<GrayLine/>
						<Link to = "/" style = {{ textDecoration: "none" }}> <h4> Esqueceu sua senha? </h4> </Link>
					</ContainerColumn>
				</Square>
			</ContainerBase>
		</>
	);
};
export default Login;
