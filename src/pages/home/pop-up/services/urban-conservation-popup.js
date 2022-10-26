import React from "react";
import { Link } from "react-router-dom";
import { PopupBackground, PopupContainer } from "../styles";
import MiniCard from "../mini-card";
import Button from "@mui/material/Button";

const UrbanConservationPopUp = (props) => {
    return (props.trigger) ? (
        <PopupBackground>
            <PopupContainer>
                <Link to = "/fiscalizacao_de_instalacoes" style={{ textDecoration: "none", color: "#1b262c" }}>
                    <MiniCard
						source="/assets/img/home_conservacao_urbana.png"
						titulo="Fiscalização de Instalações"
                    />
                </Link>
                <Link to = "/iluminacao_publica" style={{ textDecoration: "none", color: "#1b262c" }}>
                    <MiniCard
						source="/assets/img/home_iluminacao_publica.png"
						titulo="Iluminação Pública"
                    />
                </Link>
                <Link to = "/monumentos_e_chafarizes" style={{ textDecoration: "none", color: "#1b262c" }}>
                    <MiniCard
						source="/assets/img/home_monumentos_chafarizes.png"
						titulo="Monumentos e Chafarizes"
                    />
                </Link>
                <Link to = "/pavimentacao" style={{ textDecoration: "none", color: "#1b262c" }}>
                    <MiniCard
						source="/assets/img/home_pavimentacao.png"
						titulo="Pavimentação"
                    />
                </Link>
                <Link to = "/vias_publicas" style={{ textDecoration: "none", color: "#1b262c" }}>
                    <MiniCard
						source="/assets/img/home_vias_publicas.png"
						titulo="Vias Públicas"
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

export default UrbanConservationPopUp;