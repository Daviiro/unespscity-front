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
import TimePicker from "@material-ui/lab/TimePicker";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import { Typography } from "@mui/material";

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

		console.log("Hora Inicio: ", openingHour);
		console.log("Hora Fim: ", closingHour);
	}, [operating_days]);

	const current = new Date();
	const FormatMonth = () => {
		if (current.getMonth() < 9) {
			return "-0";
		} else {
			return "-";
		}
	};
	const FormatDay = () => {
		if (current.getDate() < 9) {
			return "-0";
		} else {
			return "-";
		}
	};
	const [value, setValue] = useState(
		new Date(
			`${current.getFullYear()}${FormatMonth()}${
				current.getMonth() + 1
			}${FormatDay()}${current.getDate()}T00:00:00.000Z`
		)
	);
	const [openingHour, setOpeningHour] = useState(
		new Date(
			`${current.getFullYear()}${FormatMonth()}${
				current.getMonth() + 1
			}${FormatDay()}${current.getDate()}T00:00:00.000Z`
		)
	);
	const [closingHour, setClosingHour] = useState(
		new Date(
			`${current.getFullYear()}${FormatMonth()}${
				current.getMonth() + 1
			}${FormatDay()}${current.getDate()}T00:00:00.000Z`
		)
	);

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
				<div
					style={{
						width: "100%",
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<div>
						<Typography variant="body2">
							Horário de Início
						</Typography>
						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<TimePicker
								ampm={false}
								value={openingHour}
								onChange={setOpeningHour}
								renderInput={(params) => (
									<TextField {...params} />
								)}
							/>
						</LocalizationProvider>
					</div>
					<div>
						<Typography variant="body2">
							Horário de Término
						</Typography>
						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<TimePicker
								ampm={false}
								value={closingHour}
								onChange={setClosingHour}
								renderInput={(params) => (
									<TextField {...params} />
								)}
							/>
						</LocalizationProvider>
					</div>
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
							location: {
								lat: clickedCoordinates.lat,
								lng: clickedCoordinates.lng,
							},
							openingHour,
							closingHour,
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
