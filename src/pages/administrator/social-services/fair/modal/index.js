import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

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
	const handleDayChange = (event) => {
		const { name, checked } = event.target;
		setOperating_days({
			...operating_days,
			[name]: checked,
		});
	};
	useEffect(() => {
		console.log("valor do dia Domingo: " + operating_days.dom);
		console.log("valor do dia Segundo: " + operating_days.seg);
		console.log("valor do dia Terça: " + operating_days.ter);
		console.log("valor do dia Quarta: " + operating_days.qua);
		console.log("valor do dia Quinta: " + operating_days.qui);
		console.log("valor do dia Sexta: " + operating_days.sex);
		console.log("valor do dia Sábado: " + operating_days.sab);
	}, [operating_days]);

	const [value, setValue] = useState("2018-01-01T00:00:00.000Z");

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
					label="Título da Feira"
					variant="standard"
					onChange={handleTitleChange}
					value={title}
				/>
				<div style={{ display: "flex", flexDirection: "row" }}>
					<FormGroup aria-label="position" column>
						<FormControlLabel
							checked={operating_days.dom}
							control={
								<Switch
									name="dom"
									checked={operating_days.dom}
									onChange={handleDayChange}
									inputProps={{ "aria-label": "controlled" }}
								/>
							}
							label="Domingo"
						/>
						<FormControlLabel
							control={
								<Switch
									name="seg"
									checked={operating_days.seg}
									onChange={handleDayChange}
									inputProps={{ "aria-label": "controlled" }}
								/>
							}
							label="Segunda"
						/>
					</FormGroup>
					<FormGroup aria-label="position" column>
						<FormControlLabel
							control={
								<Switch
									name="ter"
									checked={operating_days.ter}
									onChange={handleDayChange}
									inputProps={{ "aria-label": "controlled" }}
								/>
							}
							label="Terça"
						/>
						<FormControlLabel
							control={
								<Switch
									name="qua"
									checked={operating_days.qua}
									onChange={handleDayChange}
									inputProps={{ "aria-label": "controlled" }}
								/>
							}
							label="Quarta"
						/>
					</FormGroup>
					<FormGroup aria-label="position" column>
						<FormControlLabel
							control={
								<Switch
									name="qui"
									checked={operating_days.qui}
									onChange={handleDayChange}
									inputProps={{ "aria-label": "controlled" }}
								/>
							}
							label="Quinta"
						/>
						<FormControlLabel
							control={
								<Switch
									name="sex"
									checked={operating_days.sex}
									onChange={handleDayChange}
									inputProps={{ "aria-label": "controlled" }}
								/>
							}
							label="Sexta"
						/>
					</FormGroup>
					<FormGroup aria-label="position" column>
						<FormControlLabel
							control={
								<Switch
									name="sab"
									checked={operating_days.sab}
									onChange={handleDayChange}
									inputProps={{ "aria-label": "controlled" }}
								/>
							}
							label="Sábado"
						/>
					</FormGroup>
				</div>
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
