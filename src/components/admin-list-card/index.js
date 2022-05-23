import React, { useState } from "react";
import { Button, ButtonDiv, ContainerColumn, InfoContainer, ListCardContainer } from "./styles";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const AdminListCard = (props) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <ListCardContainer>
            <InfoContainer>
                <img
                    src = {process.env.PUBLIC_URL + props.source}
                    alt = {props.titulo}
                />
                <ContainerColumn>
                    <h2> {props.nome} </h2>
                    <h3> {props.sobrenome} </h3>
                    <h4> {props.descricao} </h4>
                </ContainerColumn>
            </InfoContainer>
            <ButtonDiv>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Editar
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                    </DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                    </DialogActions>
                </Dialog>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Excluir
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                    </DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                    </DialogActions>
                </Dialog>
            </ButtonDiv>
        </ListCardContainer>
    );
};
export default AdminListCard;