import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

const Modal = (props) => {
	const [title, setTitle] = useState("");
	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	};
	return (
		<Dialog open={props.open} onClose={props.handleClose}>
			<DialogTitle>Adicionar Nova Rota</DialogTitle>
			<DialogContentText>
				Para adicionar uma nova Rota ao sistema, por favor, insira um
				titulo para a mesma.
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
			<DialogActions>
				<Button onClick={props.handleClose}>Cancelar</Button>
				{title != undefined ? (
					<Button
						onClick={() => {
							props.handleAddRoute(title);
							setTitle("");
						}}
					>
						Adicionar
					</Button>
				) : (
					<Button disabled>Adicionar</Button>
				)}
			</DialogActions>
		</Dialog>
	);
};

export default Modal;
