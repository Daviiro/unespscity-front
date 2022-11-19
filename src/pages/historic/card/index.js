import React, { useState } from "react";
import { Typography } from "@mui/material";
import { Container, SubContainer, ButtonsContainer } from "./styles";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import Button from "@mui/material/Button";
import { Collapse } from "react-collapse";
import { api } from "../../../services/api";
import { TextField } from "@mui/material";

import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@mui/material";

const UserHistoricCard = (props) => {
	const [open, setOpen] = useState(false);
	const [openDialog, setOpenDialog] = useState(false);
	const [newNumber, setNewNumber] = useState(props.data.streetNumber);
	const [newStatus, setNewStatus] = useState(props.data.serviceStatus);
	const [newReferencePoint, setNewReferencePoint] = useState("");
	const [newStreet, setNewStreet] = useState(props.data.street);
	const [newDescription, setNewDescription] = useState(
		props.data.description
	);

	const handleOpen = () => {
		setOpen(!open);
	};

	const handleClickOpen = () => {
		setOpenDialog(true);
	};

	const handleClose = () => {
		setOpenDialog(false);
	};

	const formatDate = (input) => {
		var datePart = input.match(/\d+/g),
			year = datePart[0].substring(2), // get only two digits
			month = datePart[1],
			day = datePart[2];

		return day + "/" + month + "/" + year;
	};

	const handleEdit = () => {
		let adress;
		if (props.data.serviceName === "Problemas na Iluminação Publica") {
			adress = "/street_lighting";
		}
		if (props.data.serviceName === "Problemas com Monumentos") {
			adress = "/monument";
		}
		if (props.data.serviceName === "Problemas com Pavimentação") {
			adress = "/paviment";
		}

		try {
			const res2 = api.put(`${adress}/${props.data._id}`, {
				data: {
					id: props.data._id,
					serviceName: props.data.serviceName,
					description: newDescription,
					street: newStreet,
					referencePoint: newReferencePoint,
					latitude: -1,
					longitude: -1,
					streetNumber: newNumber,
					//serviceStatus: props.data.serviceStatus,
					images: [],
				},
			});
			console.log(res2);
		} catch (e) {
			console.log(e);
		}

		handleClose();
	};

	const handleNewNumberChange = (evt) => {
		setNewNumber(evt.target.value);
	};
	const handleNeStreetChange = (evt) => {
		setNewStreet(evt.target.value);
	};
	const handleNewDescriptionChange = (evt) => {
		setNewDescription(evt.target.value);
	};
	const handleNewReferencePointChange = (evt) => {
		setNewReferencePoint(evt.target.value);
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
								<span>{formatDate(props.data.date)}</span>
							</Typography>
						</div>
					</SubContainer>
					<ButtonsContainer>
						<Button
							variant="contained"
							onClick={() => setOpenDialog(true)}
						>
							Editar
						</Button>
					</ButtonsContainer>
				</Collapse>
			</div>
			<Dialog
				open={openDialog}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{"Escreva abaixo os novos dados"}
				</DialogTitle>
				<DialogContent>
					<TextField
						fullWidth
						autoFocus
						margin="dense"
						type="text"
						id="outlined-basic"
						label="Descrição"
						variant="standard"
						onChange={handleNewDescriptionChange}
						value={newDescription}
					/>
					<TextField
						fullWidth
						autoFocus
						margin="dense"
						type="text"
						id="outlined-basic"
						label="Rua e bairro"
						variant="standard"
						onChange={handleNeStreetChange}
						value={newStreet}
					/>
					<TextField
						fullWidth
						autoFocus
						margin="dense"
						type="number"
						id="outlined-basic"
						label="Número"
						variant="standard"
						onChange={handleNewNumberChange}
						value={newNumber}
					/>
					<TextField
						fullWidth
						autoFocus
						margin="dense"
						type="text"
						id="outlined-basic"
						label="Ponto de Referência"
						variant="standard"
						onChange={handleNewReferencePointChange}
						value={newReferencePoint}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => handleEdit()}>Confirmar</Button>
					<Button onClick={handleClose}>Cancelar</Button>
				</DialogActions>
			</Dialog>
		</Container>
	);
};

export default UserHistoricCard;
