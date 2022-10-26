import React from "react";
import { Link } from "react-router-dom";
import { PopupBackground, PopupContainer } from "../styles";
import MiniCard from "../mini-card";
import Button from "@mui/material/Button";

const DomesticAnimalsPopUp = (props) => {
    return (props.trigger) ? (
        <PopupBackground>
            <PopupContainer>
                <Link to = "/animais_abandonados" style={{ textDecoration: "none", color: "#1b262c" }}>
                    <MiniCard
						source="/assets/img/home_animais_domesticos.png"
						titulo="Animais Abandonados"
                    />
                </Link>
                <Link to = "/animais_perdidos_opcoes" style={{ textDecoration: "none", color: "#1b262c" }}>
                    <MiniCard
						source="/assets/img/home_animais_perdidos.png"
						titulo="Animais Perdidos"
                    />
                </Link>
                <Link to = "/maus_tratos" style={{ textDecoration: "none", color: "#1b262c" }}>
                    <MiniCard
						source="/assets/img/home_maus_tratos.png"
						titulo="Maus tratos à Animais"
                    />
                </Link>
                <Link to = "/animais-sinantropicos" style={{ textDecoration: "none", color: "#1b262c" }}>
                    <MiniCard
						source="/assets/img/home_animais_sinantropicos.png"
						titulo="Animais Sinantrópicos"
                    />
                </Link>
                <Link to = "/adocao_animais_opcoes" style={{ textDecoration: "none", color: "#1b262c" }}>
                    <MiniCard
						source="/assets/img/home_adocao_animais.png"
						titulo="Adoção de Animais"
                    />
                </Link>
                <Button onClick = {() => props.setTrigger(false)} 
                variant = "contained" 
                style = {{ position: "absolute", bottom: "2vh", right: "2vh" }}>
                    Fechar
                </Button>
            </PopupContainer>
        </PopupBackground>
    ) : "";
}

export default DomesticAnimalsPopUp;