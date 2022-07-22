import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

const Modal = (props) => {
	const [operating_days, setOperating_days] = useState({
		dom: false,
		seg: false,
		ter: false,
		qua: false,
		qui: false,
		sex: false,
		sab: false,
	});
	const [newFair, setNewFair] = useState({});
	const { open, locations, handleClose, handleAdd, clickedCoordinates } =
		props;
	const [title, setTitle] = useState("");
	const [operating_time, setOperating_time] = useState({
		open: 0,
		close: 0,
	});
	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	};
	const handleOperatingDaysChange = (event) => {
		const { name, value } = event.target;
		setOperating_days((prevState) => {
			return {
				...prevState,
				[name]: value,
			};
		});
	};

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Adicionar Nova Feira</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Para adicionar uma nova feira ao sistema, por favor, insira
					as informações requeridas abaixo.
				</DialogContentText>
				<TextField
					fullWidth
					autoFocus
					margin="dense"
					id="outlined-basic"
					label="Título"
					variant="standard"
					onChange={handleTitleChange}
					value={title}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancelar</Button>
				<Button
					onClick={() => {
						handleAdd({
							id: locations[locations.length - 1].id + 1,
							name: title,
							imgsrc: "/assets/img/fair-icon.png",
							operating_days: operating_days,
							operating_time: operating_time,
							location: {
								lat: clickedCoordinates.lat,
								lng: clickedCoordinates.lng,
							},
						});
					}}
				>
					Adicionar
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default Modal;
