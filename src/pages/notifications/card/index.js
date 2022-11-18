import React, { useState } from "react";
import { Typography } from "@mui/material";
import { Container, SubContainer } from "./styles";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { Collapse } from "react-collapse";

const NotificationCard = (props) => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(!open);
	};
	return (
		<Container onClick={() => handleOpen()}>
			<SubContainer>
				<div>
					<Typography variant="subtitle1">
						Serviço: {props.data.serviceName}
					</Typography>
					<Typography variant="subtitle1">
						Descrição: {props.data.description}
					</Typography>
					<Typography variant="subtitle1">
						{props.data.status === 1 && (
							<span>Status: Não atendido </span>
						)}
						{props.data.status === 2 && (
							<span>Status: Em andamento</span>
						)}
						{props.data.status === 3 && (
							<span>Status: Concluído</span>
						)}
					</Typography>
				</div>
				<div>
					{!open ? (
						<BiDownArrow style={{ color: "LightGray" }} />
					) : (
						<BiUpArrow style={{ color: "LightGray" }} />
					)}
				</div>
			</SubContainer>

			<div style={{ width: "100%" }}>
				<Collapse isOpened={open}>
					<SubContainer style={{ padding: 0 }}>
						<div className="collapsed">
							<Typography variant="subtitle1">
								Rua: {props.data.street}, Número:{" "}
								{props.data.streetNumber}
							</Typography>
							<Typography variant="subtitle1">
								Data da requisição:
								<span>{props.data.date.getUTCDate()}</span>/
								<span>{props.data.date.getUTCMonth() + 1}</span>
								/<span>{props.data.date.getUTCFullYear()}</span>
							</Typography>
						</div>
					</SubContainer>
				</Collapse>
			</div>
		</Container>
	);
};

export default NotificationCard;
