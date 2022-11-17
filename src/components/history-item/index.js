import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Container, SubContainer } from "./styles";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { Collapse } from "react-collapse";

const HistoryItem = (props) => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(!open);
	};
	return (
		<>
			<Container onClick={() => handleOpen()}>
				<SubContainer>
					<div>
						<Typography variant="subtitle1">
							Serviço: {props.data.serviceName}
						</Typography>
						<Typography variant="subtitle1">
							Data da requisição:
							<span>{props.data.date.getUTCDate()}</span>/
							<span>{props.data.date.getUTCMonth() + 1}</span>/
							<span>{props.data.date.getUTCFullYear()}</span>
						</Typography>
						<Typography variant="subtitle1">
							{props.data.isResolved === 1 && (
								<span>Status: Requisição enviada</span>
							)}
							{props.data.isResolved === 2 && (
								<span>Status: Requisição recebida</span>
							)}
							{props.data.isResolved === 3 && (
								<span>Status: Requisição realizada</span>
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
									Descrição: {props.data.description}
								</Typography>
								<Typography variant="subtitle1">
									Rua: {props.data.street}, Número:{" "}
									{props.data.streetNumber}
								</Typography>
							</div>
						</SubContainer>
					</Collapse>
				</div>
			</Container>
		</>
	);
};

export default HistoryItem;
