import React from "react";
import { Link } from "react-router-dom";
import { PopupBackground, PopupContainer } from "../styles";
import MiniCard from "../mini-card";
import Button from "@mui/material/Button";

const RuralConservationPopUp = (props) => {
    return (props.trigger) ? (
        <PopupBackground>
            <PopupContainer style = {{ width: "45%" }} >
                <Link to = "/parques" style={{ textDecoration: "none", color: "#1b262c" }}>
                    <MiniCard
						source="/assets/img/home_meio_ambiente.png"
						titulo="Parques"
                    />
                </Link>
                <Link to = "/pontes_em_estradas_rurais" style={{ textDecoration: "none", color: "#1b262c" }}>
                    <MiniCard
						source="/assets/img/home_pontes_estradas_rurais.png"
						titulo="Pontes em estradas rurais"
                    />
                </Link>
                <Link to = "/pracas" style={{ textDecoration: "none", color: "#1b262c" }}>
                    <MiniCard
						source="/assets/img/home_pracas.png"
						titulo="Praças"
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

export default RuralConservationPopUp;