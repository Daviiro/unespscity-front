import React, { useState, useContext } from "react";
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
import LocalContext from "../../../../user-location/Context";

const Modal = (props) => {
	const [operatingDays, setoperatingDays] = useState({
		dom: false,
		seg: false,
		ter: false,
		qua: false,
		qui: false,
		sex: false,
		sab: false,
	});
	const { open, locations, handleClose, handleAdd, clickedCoordinates } =
		props;
	const [title, setTitle] = useState("");
	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	};
	const [formValues, setFormValues] = useContext(LocalContext);
	const handleDayChange = (event) => {
		const { name, checked } = event.target;
		setoperatingDays({
			...operatingDays,
			[name]: checked,
		});
	};

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
							checked={operatingDays.dom}
							control={
								<Switch
									name="dom"
									checked={operatingDays.dom}
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
									checked={operatingDays.seg}
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
									checked={operatingDays.ter}
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
									checked={operatingDays.qua}
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
									checked={operatingDays.qui}
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
									checked={operatingDays.sex}
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
									checked={operatingDays.sab}
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
							cityid: formValues.city,
							name: title,
							imgsrc: "/assets/img/fair-icon.png",
							operatingDays: operatingDays,
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
