import React, { useState } from "react";
import { Button, ButtonDiv, ContainerColumn, InfoContainer, ListCardContainer } from "./styles";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ImageCarousel from "../images-carousel";
import { api } from "../../services/api";

const AdminListCard = (props) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDeleteProblem = async (event, reason) => {
        try {
            await api.delete(`/${props.url}/${props.id}`);
            props.setRefresh((prev) => prev + 1);
        }
        catch (e) {
            console.log(e);
        }
        setOpen(false);
    }

    return (
        <ListCardContainer>
            <InfoContainer>
                <ImageCarousel
                    images={props.source}
                />
                <ContainerColumn>
                    <h2> {props.nome} </h2>
                    <h3> {props.sobrenome} </h3>
                    <h4> {props.descricao} </h4>
                </ContainerColumn>
            </InfoContainer>
            <ButtonDiv>

                {
                    props.report ? (
                        <Button variant="outlined" onClick={handleClickOpen}>
                            <h3>Arrumado</h3>
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
                    )
                }

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
                            Você deseja excluir o arquivo permanentemente?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancelar</Button>
                        <Button onClick={handleDeleteProblem} autoFocus>
                            Excluir
                        </Button>
                    </DialogActions>
                </Dialog>
            </ButtonDiv>
        </ListCardContainer>
    );
};
export default AdminListCard;