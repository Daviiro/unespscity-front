import React, { useState, useEffect, useContext } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import LocalContext from "../../../user-location/Context";

const OfferModal = (props) => {
	//modal para adicao de uma nova arvore
	const { open, locations, handleClose, handleAdd, clickedCoordinates } =
		props;
	const [price, setPrice] = useState(0);
	const [store, setStore] = useState("");
	const [title, setTitle] = useState("");
	const [street, setStreet] = useState("");
	const [streetNumber, setStreetNumber] = useState(0);
	const [description, setDescription] = useState("");
	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	};
	const handlepriceChange = (event) => {
		setPrice(event.target.value);
	};
	const handleStoreChange = (event) => {
		setStore(event.target.value);
	};
	const handleStreetChange = (event) => {
		setStreet(event.target.value);
	};
	const handleStreetNumberChange = (event) => {
		setStreetNumber(event.target.value);
	};
	const handleDescriptionChange = (event) => {
		setDescription(event.target.value);
	};
	const [formValues, setFormValues] = useContext(LocalContext);

	const [selectedFile, setSelectedFile] = useState();
	const [preview, setPreview] = useState();

	useEffect(() => {
		if (!selectedFile) {
			setPreview(undefined);
			return;
		}

		let reader = new FileReader();
		reader.readAsDataURL(selectedFile);
		console.log(reader.result);

		const objectUrl = URL.createObjectURL(selectedFile);
		setPreview(objectUrl);
		console.log(objectUrl);
		// free memory when ever this component is unmounted
		return () => URL.revokeObjectURL(objectUrl);
	}, [selectedFile]);

	const onSelectFile = (e) => {
		if (!e.target.files || e.target.files.length === 0) {
			setSelectedFile(undefined);
			return;
		}
		setSelectedFile(e.target.files[0]);
	};

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Adicionar Nova Árvore</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Para adicionar uma nova oferta ao sistema, por favor, insira
					as informações requeridas abaixo.
				</DialogContentText>

				<TextField
					fullWidth
					autoFocus
					margin="dense"
					id="outlined-basic"
					label="Produto"
					variant="standard"
					onChange={handleTitleChange}
					value={title}
				/>

				<TextField
					fullWidth
					autoFocus
					inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
					margin="dense"
					id="outlined-basic"
					label="Preço"
					variant="standard"
					onChange={handlepriceChange}
					value={price}
				/>
				<TextField
					fullWidth
					autoFocus
					margin="dense"
					id="outlined-basic"
					label="Loja"
					variant="standard"
					onChange={handleStoreChange}
					value={store}
				/>
				<TextField
					fullWidth
					autoFocus
					margin="dense"
					id="outlined-basic"
					label="Rua"
					variant="standard"
					onChange={handleStreetChange}
					value={street}
				/>
				<TextField
					fullWidth
					autoFocus
					inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
					margin="dense"
					id="outlined-basic"
					label="Número"
					variant="standard"
					onChange={handleStreetNumberChange}
					value={streetNumber}
				/>
				<TextField
					fullWidth
					autoFocus
					margin="dense"
					id="outlined-basic"
					label="Descrição"
					variant="standard"
					onChange={handleDescriptionChange}
					value={description}
				/>
				<br />
				<label>Insira a Foto (Opcional): </label>
				<br />
				<input
					type="file"
					accept="image/*"
					multiple
					onChange={(e) => onSelectFile(e)}
				/>
				{preview && (
					<div>
						<img
							src={preview}
							alt="foto"
							key={preview}
							width="50px"
						/>
					</div>
				)}
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancelar</Button>
				<Button
					onClick={() => {
						handleAdd({
							cityID: formValues.city,
							img: "",
							title: title,
							store: store,
							price: price,
							street: street,
							streetNumber: streetNumber,
							description: description,
						});
						setPrice(0);
						setStore("");
						setTitle("");
						setStreet("");
						setStreetNumber("");
						setDescription("");
					}}
				>
					Adicionar
				</Button>
			</DialogActions>
		</Dialog>
	);
};

/*
cityID: 999,
			img: "",
			title: "Ar condicionado Philco",
			price: 1599,
			store: "Loja do Sao Joaquim",
			street: "Rua Caramelo",
			streetNumber: 43224,
			description: "Eh puta ar",
			latitude: 2423,
			longitude: 9229,
			date: Date, */

export default OfferModal;
