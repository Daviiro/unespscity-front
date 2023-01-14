import React from "react";
import { Link } from "react-router-dom";
import { PopupBackground, PopupContainer } from "../../../home/pop-up/styles";
import MiniCard from "../../../home/pop-up/mini-card";
import Button from "@mui/material/Button";

const PanicButtonPopUp = (props) => {
    return (props.trigger) ? (
        <PopupBackground>
            <PopupContainer style = {{ width: "25%" }} >
                <Link to = "/admin/botao_panico" style={{ textDecoration: "none", color: "#1b262c" }}>
                    <MiniCard
						source="/assets/img/home_botao_panico.png"
						titulo="Botão do Pânico"
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

export default PanicButtonPopUp;