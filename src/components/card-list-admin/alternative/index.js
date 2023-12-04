import React, { useState } from 'react';
import {
  Button,
  ButtonDiv,
  ContainerColumn,
  InfoContainer,
  ListCardContainer,
} from '../styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const AdminListCardAlt = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  return (
    <ListCardContainer>
      <InfoContainer>
        <div style={{ display: 'block', margin: '1rem' }}>
          <img
            style={{ height: '24vh', width: 'auto', marginRight: '2vw' }}
            src={process.env.PUBLIC_URL + props.source}
            alt={props.titulo}
          />
        </div>
        <ContainerColumn>
          <h2> {props.nome} </h2>
          <h3> {props.sobrenome} </h3>
          <h4> {props.descricao} </h4>
        </ContainerColumn>
      </InfoContainer>
      <ButtonDiv>
        {props.report ? (
          <Button variant="outlined" onClick={handleClickOpen}>
            Arrumado
          </Button>
        ) : (
          <>
            <Button variant="outlined">Editar</Button>
            <Button variant="outlined" onClick={handleClickOpen}>
              Excluir
            </Button>
          </>
        )}

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {'Excluir Arquivo?'}
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
export default AdminListCardAlt;
