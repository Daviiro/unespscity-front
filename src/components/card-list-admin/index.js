import React, { useState } from "react";
import { Button, ButtonDiv, ContainerColumn, InfoContainer, ListCardContainer } from "./styles";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ImageCarousel from "../images-carousel";

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
                <ImageCarousel 
                    images={["https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg", 
                "https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg",
                "https://thumbs.dreamstime.com/b/paisagem-vertical-no-por-do-sol-63763253.jpg"]}
                />
                <ContainerColumn>
                    <h2> {props.nome} </h2>
                    <h3> {props.sobrenome} </h3>
                    <h4> {props.descricao} </h4>
                </ContainerColumn>
            </InfoContainer>
            <ButtonDiv>
                <Button variant="outlined">
                    Editar
                </Button>

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
                    {"Excluir Arquivo?"}
                    </DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Você deseja excluir o arquivo permanentemente?
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={handleClose} autoFocus>
                        Excluir
                    </Button>
                    </DialogActions>
                </Dialog>
            </ButtonDiv>
        </ListCardContainer>
    );
};
export default AdminListCard;