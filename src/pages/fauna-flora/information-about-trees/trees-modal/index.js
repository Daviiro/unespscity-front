import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

const TreesModal = (props) => {
	//modal para adicao de uma nova arvore
	return (
		<Dialog open={props.open} onClose={props.handleClose}>
			<DialogTitle>Adicionar Nova Árvore</DialogTitle>
			<DialogContent>
				<DialogContentText>
					To subscribe to this website, please enter your email
					address here. We will send updates occasionally.
				</DialogContentText>
				<TextField
					autoFocus
					margin="dense"
					id="name"
					label="Email Address"
					type="email"
					fullWidth
					variant="standard"
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={props.handleClose}>Cancel</Button>
				<Button onClick={props.handleClose}>Subscribe</Button>
			</DialogActions>
		</Dialog>
	);
};

export default TreesModal;
