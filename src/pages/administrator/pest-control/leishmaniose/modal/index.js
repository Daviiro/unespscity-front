import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

const LeishmanioseModal = (props) => {
	//modal para adicao de um novo local
	const { open, locations, handleClose, handleAdd, clickedCoordinates } =
		props;
	const [opening_hours, setOpeningHours] = useState("");
	const [phone, setPhone] = useState("");
	const [place, setPlace] = useState("");
	const handlePlaceChange = (event) => {
		setPlace(event.target.value);
	};
	const handlePhoneChange = (event) => {
		setPhone(event.target.value);
	};
	const handleOpeningHoursChange = (event) => {
		setOpeningHours(event.target.value);
	};

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Adicionar Novo Local:</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Para adicionar um ponto de vacinação de cães, por 
					favor, insira as informações requeridas abaixo.
				</DialogContentText>
				<TextField
					fullWidth
					autoFocus
					margin="dense"
					id="outlined-basic"
					label="Lugar:"
					variant="standard"
					onChange={handlePlaceChange}
					value={place}
				/>
				<TextField
					fullWidth
					autoFocus
					margin="dense"
					id="outlined-basic"
					label="Telefone:"
					variant="standard"
					onChange={handlePhoneChange}
					value={phone}
				/>
				<TextField
					fullWidth
					autoFocus
					margin="dense"
					id="outlined-basic"
					label="Horário de Funcionamento:"
					variant="standard"
					onChange={handleOpeningHoursChange}
					value={opening_hours}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancelar</Button>
				<Button
					onClick={() =>
						handleAdd({
							id: locations[locations.length - 1].id + 1,
							name: place,
							imgsrc: "/assets/img/leishmaniose-vaccination-icon.png",
							phone: phone,
							opening_hours: opening_hours,
							location: {
								lat: clickedCoordinates.lat,
								lng: clickedCoordinates.lng,
							},
						})
					}
				>
					Adicionar
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default LeishmanioseModal;