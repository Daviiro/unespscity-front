import React, { useState } from "react";
import {
	Button,
	ButtonDiv,
	ContainerColumn,
	InfoContainer,
	ListCardContainer,
	StatusContainer,
	StatusContainerButtons,
} from "./styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ImageCarousel from "../images-carousel";
import { api } from "../../services/api";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";

const AdminListCard = (props) => {
	const [open, setOpen] = useState(false);
	const [openStatus, setOpenStatus] = useState(false);
	const [newDesc, setNewDesc] = useState("");
	const handleNewDescChange = (evt) => {
		setNewDesc(evt.target.value);
		console.log(newDesc);
	};
	const handleClickOpen = () => {
		setOpen(true);
	};
	const [status, setStatus] = useState();

	const handleClose = () => {
		setOpen(false);
	};

	const handleDeleteProblem = async (event, reason) => {
		try {
			await api.delete(`/${props.url}/${props.id}`);
			props.setRefresh((prev) => prev + 1);
		} catch (e) {
			console.log(e);
		}
		setOpen(false);
	};

	const handleStatusOpen = () => {
		setOpenStatus(true);
	};

	const handleStatusClose = () => {
		setOpenStatus(false);
	};

	const handleChangeStatus = (evt) => {
		setStatus(evt.target.value);
		console.log(status);
	};

	const updateDatabaseStatus = () => {
		try {
			api.put(`/${props.url_put_status}`, {
				data: {
					id: props.id,
					serviceStatus: status,
					isRead: 1,
					userId: props.userId,
					serviceName: props.serviceName,
					description: newDesc,
					street: props.nome,
					streetNumber: props.streetNumber,
				},
			}).then((response) => {
				console.log(response);
				toast.success("Alteração de status realizada com sucesso", {
					position: toast.POSITION.TOP_RIGHT,
				});
			});
		} catch (e) {
			console.log(e);
			if (e.response.status === 404) {
				toast.error(
					"Erro 404 ocorreu, servidor não pôde ser encontrado!",
					{
						position: toast.POSITION.TOP_RIGHT,
					}
				);
			}
		}
		setOpenStatus(false);
	};
	//const handleUpdateResolved = async (evt, res) => {};
	const returnFormatedStatus = (status) => {
		if (status === 1) {
			return "Não Atendido";
		}
		if (status === 2) {
			return "Em Andamento";
		}
		if (status === 3) {
			return "Concluido";
		}
	};

	return (
		<ListCardContainer>
			<ToastContainer autoClose={5000} hideProgressBar={true} />
			<InfoContainer>
				<ImageCarousel images={props.source} />
				<ContainerColumn>
					<h2> {props.nome} </h2>
					<h3> {props.sobrenome} </h3>
					<h4> {props.descricao} </h4>

					{props.status && props.problemStatus ? (
						<h4>
							Status: {returnFormatedStatus(props.problemStatus)}
						</h4>
					) : (
						<></>
					)}
				</ContainerColumn>
			</InfoContainer>
			<ButtonDiv>
				{props.report ? (
					<Button variant="outlined" onClick={handleClickOpen}>
						<h3>Deletar</h3>
					</Button>
				) : (
					<>
						<Button variant="outlined">
							<h3>Editar</h3>
						</Button>
						<Button variant="outlined" onClick={handleClickOpen}>
							<h3>Excluir</h3>
						</Button>
					</>
				)}
				{props.status ? (
					<Button variant="outlined" onClick={handleStatusOpen}>
						<h3>Atualizar Status</h3>
					</Button>
				) : (
					<></>
				)}

				<Dialog
					open={open}
					onClose={handleClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">
						{"O serviço solicitado foi realizado?"}
					</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							O Serviço solicitado pelo usuario foi concluido?
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose}>Cancelar</Button>
						<Button onClick={handleDeleteProblem} autoFocus>
							Confirmar
						</Button>
					</DialogActions>
				</Dialog>

				<Dialog
					open={openStatus}
					onClose={handleStatusClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<StatusContainer>
						<FormControl>
							<FormLabel id="demo-radio-buttons-group-label">
								Status
							</FormLabel>
							<RadioGroup
								aria-labelledby="demo-radio-buttons-group-label"
								defaultValue={props.problemStatus.toString()}
								name="radio-buttons-group"
								onChange={handleChangeStatus}
							>
								<FormControlLabel
									value={1}
									control={<Radio />}
									label="Não atendido"
								/>
								<FormControlLabel
									value={2}
									control={<Radio />}
									label="Em andamento "
								/>
								<FormControlLabel
									value={3}
									control={<Radio />}
									label="Resolvido"
								/>
							</RadioGroup>
						</FormControl>
						<div>
							<TextField
								fullWidth
								autoFocus
								margin="dense"
								type="text"
								id="outlined-basic"
								label="Descrição do que foi feito"
								variant="standard"
								onChange={handleNewDescChange}
								value={newDesc}
							/>
						</div>
						<StatusContainerButtons>
							<Button
								variant="outlined"
								onClick={handleStatusClose}
							>
								<h3>Cancelar</h3>
							</Button>
							<Button
								variant="outlined"
								onClick={updateDatabaseStatus}
							>
								<h3>Confirmar</h3>
							</Button>
						</StatusContainerButtons>
					</StatusContainer>
				</Dialog>
			</ButtonDiv>
		</ListCardContainer>
	);
};
export default AdminListCard;
