import React from "react";
import { Link } from "react-router-dom";
import { PopupBackground, PopupContainer } from "../styles";
import MiniCard from "../mini-card";
import Button from "@mui/material/Button";

const CommunicationPopUp = (props) => {
    return (props.trigger) ? (
        <PopupBackground>
            <PopupContainer style = {{ width: "35%" }} >
                <Link to = "/noticias" style={{ textDecoration: "none", color: "#1b262c" }}>
                    <MiniCard
						source="/assets/img/home_noticias.png"
						titulo="Notícias da Cidade"
                    />
                </Link>
                <Link to = "/sugestoes" style={{ textDecoration: "none", color: "#1b262c" }}>
                    <MiniCard
						source="/assets/img/home_notificacao_comunicacao.png"
						titulo="Sugestões e/ou Reclamações"
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

export default CommunicationPopUp;