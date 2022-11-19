import React from "react";
import { PopupBackground, Container, Title, DescriptionInput } from "./styles";
import Button from "@mui/material/Button";

const HistoricPopUp = (props) => {
	return (
		<PopupBackground>
			<Container>
				<Title> Descrição da atualização do serviço solicitado: </Title>
				<DescriptionInput
					placeholder="Descreva o que e por quem foi feito a atualização."
					rows={7}
				/>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<Button
						onClick={() => props.setTrigger(false)}
						variant="contained"
						style={{
							height: "5.25vh",
							width: "12.5vw",
							marginTop: "4.5vh",
						}}
					>
						Atualizar
					</Button>
					<Button
						onClick={() => props.setTrigger(false)}
						variant="contained"
						style={{
							height: "5.25vh",
							width: "12.5vw",
							marginTop: "4.5vh",
							marginLeft: "7.5vw",
						}}
					>
						Resolvido
					</Button>
				</div>
			</Container>
		</PopupBackground>
	);
};

export default HistoricPopUp;
