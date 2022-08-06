import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import MiniCard from "../../components/mini-card";
import Button from "@mui/material/Button";
import Footer from "../../components/footer";
import Typography from "@mui/material/Typography";
import {
    ContainerBase,
    ContentContainer,
    TopContentContainer,
    DescriptionText,
    MidContentContainer,
} from "../../components/styled-components/PageStyles";
import { Container, ButtonContainer } from "./styles";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { StyledHr } from "../../components/styled-components/StyledHr";
import Favorites from "../../components/favorites";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { styled } from '@mui/material/styles';

const PanicButton = (props) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [open, setOpen] = useState(false);
    const [panicButtonIsActive, setPanicButtonIsActive] = useState(false);

    const CustomButton = styled(Button)({
        padding: '50px 100px',
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        setOpen(false);
    }

    const handleFavorite = () => {
        if (!isFavorite) {
            props.handleAddFavorite({
                id: 33,
                name: "Botão de Pânico",
                img: "/assets/img/home_botao_panico.png",
                link: "/botao_panico",
            }); //se favoritou o servico
        } else {
            props.handleSubFavorite({
                id: 33,
                name: "Botão do Pânico",
                img: "/assets/img/home_botao_panico.png",
                link: "/botao_panico",
            }); //se desfavoritou o servico
        }
        setIsFavorite(!isFavorite);
    };

    useEffect(() => {
        props.data.find(
            (favoriteX) => favoriteX.id === 33 && setIsFavorite(true)
        );
    }, []);

    return (
        <ContainerBase>
            <Header />
            <Favorites data={props.data} />
            <ContentContainer>
                <TopContentContainer>
                    <MiniCard
                        source="/assets/img/home_botao_panico.png"
                        titulo="Botão do Pânico"
                        linkItems={[]}
                    />
                    <div style={{ marginTop: "14px" }}>
                        <div style={{ textAlign: "center" }}>
                            <Typography variant="h4">
                                Botão do Pânico
                            </Typography>
                        </div>
                        <DescriptionText>
                            Cadastre aqui o número de telefone caso seja necessário enviar alguma mensagem para um familiar seu!
                        </DescriptionText>
                    </div>
                    {isFavorite ? (
                        <span>
                            <AiFillStar
                                style={{
                                    cursor: "pointer",
                                    margin: ".8rem",
                                    stroke: "black",
                                    strokeWidth: "5",
                                }}
                                color={"yellow"}
                                size={25}
                                onClick={() => handleFavorite()}
                            />
                        </span>
                    ) : (
                        <AiOutlineStar
                            style={{
                                cursor: "pointer",
                                margin: ".8rem",
                                stroke: "black",
                                strokeWidth: "5",
                            }}
                            size={25}
                            onClick={() => handleFavorite()}
                        />
                    )}
                    <StyledHr />
                </TopContentContainer>
                <MidContentContainer>
                    {panicButtonIsActive ? (
                        <ButtonContainer>
                            <CustomButton variant="contained" color="error" onClick={handleClickOpen}>
                                Estou em Pânico!
                            </CustomButton>
                        </ButtonContainer>
                    ) : (
                        <Container>
                            <div className="inputs">
                                <Stack spacing={2} direction="row">
                                    <TextField
                                        fullWidth
                                        id="outlined-basic"
                                        label="Número"
                                        variant="outlined"
                                    />
                                </Stack>
                                <br />
                                <Stack spacing={2} direction="row">
                                    <TextField
                                        fullWidth
                                        id="outlined-basic"
                                        label="Mensagem à Enviar"
                                        variant="outlined"
                                        multiline
                                        rows={5}
                                    />
                                </Stack>
                                <br />
                                <Button
                                    fullWidth variant="contained"
                                >
                                    Enviar
                                </Button>
                            </div>
                        </Container>
                    )}
                </MidContentContainer>
            </ContentContainer>
            <Footer />

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Acionar Botão do Pânico?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Você Realmente Quer Acionar o Botão do Pânico?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <button onClick={handleClose}>Cancelar</button>
                    <button onClick={handleClose} autoFocus>
                        Excluir
                    </button>
                </DialogActions>
            </Dialog>
        </ContainerBase>
    );
};

export default PanicButton;
