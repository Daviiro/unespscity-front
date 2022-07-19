import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

const TreesModal = (props) => {
	//modal para adicao de uma nova arvore
	const { open, locations, handleClose, handleAdd, clickedCoordinates } =
		props;
	const [age, setAge] = useState(0);
	const [specie, setSpecie] = useState("");
	const [title, setTitle] = useState("");
	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	};
	const handleAgeChange = (event) => {
		setAge(event.target.value);
	};
	const handleSpecieChange = (event) => {
		setSpecie(event.target.value);
	};

	const [newTree, setNewTree] = useState({});

	useEffect(() => {
		setNewTree({
			id: locations[locations.length - 1].id + 1,
			name: title,
			imgsrc: "/assets/img/default-tree.png",
			specie: specie,
			age: age,
			location: {
				lat: clickedCoordinates.lat,
				lng: clickedCoordinates.lng,
			},
		});
	}, [clickedCoordinates]);

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Adicionar Nova Árvore</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Para adicionar uma nova árvore ao sistema, por favor, insira
					as informações requeridas abaixo.
				</DialogContentText>
				<TextField
					fullWidth
					autoFocus
					margin="dense"
					id="outlined-basic"
					label="Título"
					variant="standard"
					value={title}
					onChange={handleTitleChange}
				/>
				<TextField
					fullWidth
					autoFocus
					margin="dense"
					id="outlined-basic"
					label="Espécie"
					variant="standard"
					value={specie}
					onChange={handleSpecieChange}
				/>
				<TextField
					fullWidth
					autoFocus
					type="number"
					margin="dense"
					id="outlined-basic"
					label="Idade"
					variant="standard"
					value={age}
					onChange={handleAgeChange}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancelar</Button>
				<Button onClick={() => handleAdd(newTree)}>Adicionar</Button>
			</DialogActions>
		</Dialog>
	);
};

export default TreesModal;
