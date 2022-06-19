import React, { useState } from "react";
import Button from "../../components/styled-components/form-button";
import { ContainerBase, Square, GrayLine, TopContainer } from "../login/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const PasswordReset = () => {
	const [email, setEmail] = useState("");

	const handleChange = (event) => {
		setEmail(event.target.value);
		console.log(email);
	};

	return (
		<ContainerBase>
			<Square className="teste">
				<TopContainer>
					<h4>Esqueceu a senha? </h4>
				</TopContainer>
				<GrayLine />
				<span></span>
				<Typography variant="body2" gutterBottom>
					Coloque abaixo o e-mail referente a conta da qual você
					esqueceu a senha. <br />
					Um e-mail será enviado para você com uma nova senha.
				</Typography>
				<GrayLine />
				<TextField
					fullWidth
					id="outlined-basic"
					label="E-mail"
					variant="outlined"
					value={email}
					onChange={handleChange}
				/>
				<Button text="Confirmar" />
			</Square>
		</ContainerBase>
	);
};

export default PasswordReset;
