import { useState } from "react";
import { Container } from "./styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";

const CardOffer = (props) => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		setOpen(false);
	};

	return (
		<Container>
			<img width="100" height="130" src={props.img}></img>
			<div>
				<h4>{props.title}</h4>

				<h5>R${props.price}</h5>

				<div className="description-style">
					<span>{props.description}</span>
				</div>
			</div>
			<div>
				<h5>Loja: {props.store}</h5>
				<span>Rua:{props.street}</span>
				<br />
				<span>N: {props.streetNumber} </span>
				<br />
				<a
					href={
						"https://maps.google.com/?q=<" +
						props.street +
						">" +
						"<" +
						props.store +
						">"
					}
				>
					Rotas
				</a>
				<br />
				{props.admin ? (
					<div>
						<Button variant="contained" onClick={handleClickOpen}>
							Excluir
						</Button>

						<Dialog
							open={open}
							onClose={handleClose}
							aria-labelledby="alert-dialog-title"
							aria-describedby="alert-dialog-description"
						>
							<DialogTitle id="alert-dialog-title">
								{"Excluir Arquivo?"}
							</DialogTitle>
							<DialogContent>
								<DialogContentText id="alert-dialog-description">
									Você deseja excluir o arquivo
									permanentemente?
								</DialogContentText>
							</DialogContent>
							<DialogActions>
								<Button onClick={handleClose}>Cancelar</Button>
								<Button
									onClick={() => {
										props.HandleDelOffer(props.id);
										handleClose();
									}}
									autoFocus
								>
									Excluir
								</Button>
							</DialogActions>
						</Dialog>
					</div>
				) : (
					<></>
				)}
			</div>
		</Container>
	);
};

export default CardOffer;
