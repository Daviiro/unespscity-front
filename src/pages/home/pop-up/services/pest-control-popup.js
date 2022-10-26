import React from "react";
import { Link } from "react-router-dom";
import { PopupBackground, PopupContainer } from "../styles";
import MiniCard from "../mini-card";
import Button from "@mui/material/Button";

const PestControlPopUp = (props) => {
    return (props.trigger) ? (
        <PopupBackground>
            <PopupContainer style = {{ width: "55%" }} >
                <Link to = "/foco_de_escorpiao" style={{ textDecoration: "none", color: "#1b262c" }}>
                    <MiniCard
						source="/assets/img/home_foco_escorpiao.png"
						titulo="Foco de Escorpião"
                    />
                </Link>
                <Link to = "/insetos_roedores_caramujos" style={{ textDecoration: "none", color: "#1b262c" }}>
                    <MiniCard
						source="/assets/img/home_controle_pragas.png"
						titulo="Insetos, Roedores e Caramujos"
                    />
                </Link>
                <Link to = "/leishmaniose" style={{ textDecoration: "none", color: "#1b262c" }}>
                    <MiniCard
						source="/assets/img/home_leishmaniose.png"
						titulo="Leishmaniose"
                    />
                </Link>
                <Link to = "/radar_da_dengue" style={{ textDecoration: "none", color: "#1b262c" }}>
                    <MiniCard
						source="/assets/img/home_radar_dengue.png"
						titulo="Radar da Dengue"
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

export default PestControlPopUp;