import React from "react";
import { Link } from "react-router-dom";
import { PopupBackground, PopupContainer } from "../../../home/pop-up/styles";
import MiniCard from "../../../home/pop-up/mini-card";
import Button from "@mui/material/Button";

const SocialCarePopUp = (props) => {
    return (props.trigger) ? (
        <PopupBackground>
            <PopupContainer style = {{ width: "55%" }} >
                <Link to = "/admin/locais_uteis" style={{ textDecoration: "none", color: "#1b262c" }}>
                    <MiniCard
						source="/assets/img/home_conservacao_urbana.png"
						titulo="Locais Úteis"
                    />
                </Link>
                <Link to = "/admin/telefones_uteis" style={{ textDecoration: "none", color: "#1b262c" }}>
                    <MiniCard
						source="/assets/img/home_telefones_uteis.png"
						titulo="Telefones Úteis"
                    />
                </Link>
                <Link to = "/admin/programacao_cultural" style={{ textDecoration: "none", color: "#1b262c" }}>
                    <MiniCard
						source="/assets/img/home_noticias.png"
						titulo="Programação Cultural"
                    />
                </Link>
                <Link to = "/admin/tumulos" style={{ textDecoration: "none", color: "#1b262c" }}>
                    <MiniCard
						source="/assets/img/home_cadastro_tumulos_falecidos.png"
						titulo="Cadastro de Túmulos e Falecidos"
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

export default SocialCarePopUp;