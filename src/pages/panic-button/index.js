import React, { useContext, useState, useEffect } from "react";
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
import { api } from '../../services/api';
//import useWebSocket from 'react-use-websocket';
import { Context } from "../../context/Auth/AuthContext";
import { fetchLocation } from "../../services/GoogleMaps";

const PanicButton = (props) => {
    const { user, handleUpdatePanicButton } = useContext(Context);
    /*     
    const socketUrl = 'ws://localhost:3334';
    const { sendMessage } = useWebSocket(socketUrl);        */
    const [isFavorite, setIsFavorite] = useState(false);
    const [open, setOpen] = useState(false);
    const [panicButtonPhone, setPanicButtonPhone] = useState('');
    const [message, setMessage] = useState('');
    const [notifyPolice, setNotifyPolice] = useState(false);
    const [street, setStreet] = useState('');
    const [streetNumber, setStreetNumber] = useState(0);
    const [panicButtonIsActive, setPanicButtonIsActive] = useState(false);
    const [center, setCenter] = useState({ lat: 0, lng: 0 });

    const CustomButton = styled(Button)({
        padding: '50px 100px',
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        setOpen(false);
    }

    const handleCreatePanicButton = async (e) => {
        e.preventDefault();
        try {
            /* await api.put('/update_cidadao', {
                id: user.userId
            }) */
            await handleUpdatePanicButton();

            await api.post('/panic_button', {
                data: {
                    userId: user.userId,
                    message,
                    panicButtonPhone,
                    notifyPolice: true,
                    notifyAmbulance: true,
                }
            })
            alert("Botão de Panico Cadastrado com Sucesso! Para usar, saia e volte a página!")
        }
        catch (e) {
            console.log(e);
        }

    }

    const handlePanicButton = async () => {
        let numero, rua, bairro;

        try {
            navigator.geolocation.getCurrentPosition((location) => {
                fetchLocation(
                    location.coords.latitude,
                    location.coords.longitude
                ).then((data) => {
                    console.log(data)
                    let parts = data.results[0].address_components;
                    console.log(parts[0].long_name)
                    numero = parts[0].long_name;
                    rua = parts[1].long_name;
                    bairro = parts[2].long_name;

                    const link = JSON.stringify(message).replace(/\\n/g, '%0a')
                    const text = JSON.parse(link)

                    if (notifyPolice) {
                        api.post('/call_panic_button', {
                            message: `${message}===${bairro}===${rua}===${numero}`
                        })
                        //sendMessage(message)
                    }
                    window.open(`https://web.whatsapp.com/send?phone=+55${panicButtonPhone}&text=${text}`, "_blank");
                    setOpen(false);
                });
            });

        } catch (e) {
            console.log(e);
        }
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

    useEffect(() => {
        async function getData() {
            try {
                console.log(user.userId)
                const { data } = await api.get('/panic_button',
                    {
                        params: {
                            //userId: 3,
                            userId: user.userId,
                        },
                    });
                console.log(data)
                setPanicButtonPhone(data[0].panicButtonPhone);
                setMessage(data[0].message);
                setNotifyPolice(data[0].notifyPolice);
                setStreet(data[0].street);
                setStreetNumber(data[0].streetNumber);
                setPanicButtonIsActive(true)
            } catch (e) {
                console.log(e);
            }
        }

        if (true) {
            getData();
        }
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
                            <form
                                className="inputs"
                                onSubmit={handleCreatePanicButton}
                            >
                                <Stack spacing={2} direction="row">
                                    <TextField
                                        fullWidth
                                        id="outlined-basic"
                                        label="Número"
                                        variant="outlined"
                                        value={panicButtonPhone}
                                        onChange={(e) =>
                                            setPanicButtonPhone(e.target.value)
                                        }
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
                                        value={message}
                                        onChange={(e) =>
                                            setMessage(e.target.value)
                                        }
                                    />
                                </Stack>
                                <br />
                                <Button
                                    fullWidth variant="contained"
                                    type="submit"
                                >
                                    Cadastrar
                                </Button>
                            </form>
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
                    <button onClick={handlePanicButton} autoFocus>
                        Acionar
                    </button>
                </DialogActions>
            </Dialog>
        </ContainerBase>
    );
};

export default PanicButton;
