import React from "react";
import { Link } from "react-router-dom";
import { PopupBackground, PopupContainer } from "../styles";
import MiniCard from "../mini-card";
import Button from "@mui/material/Button";

const PublicAdministrationPopUp = (props) => {
    return (props.trigger) ? (
        <PopupBackground>
            <PopupContainer style = {{ width: "45%" }} >
                <Link to = "/conheca_os_gestores" style={{ textDecoration: "none", color: "#1b262c" }}>
                    <MiniCard
						source="/assets/img/home_conheca_os_gestores.png"
						titulo="Conheça os Gestores"
                    />
                </Link>
                <Link to = "/consultar-propostas-de-leis" style={{ textDecoration: "none", color: "#1b262c" }}>
                    <MiniCard
						source="/assets/img/home_noticias.png"
						titulo="Consultar as propostas dos vereadores"
                    />
                </Link>
                <Link to = "/central-anticorrupcao" style={{ textDecoration: "none", color: "#1b262c" }}>
                    <MiniCard
						source="/assets/img/home_administracao_publica.png"
						titulo="Central Anticorrupção"
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

export default PublicAdministrationPopUp;