import React from "react";
import { PopupBackground, Container, Title, DescriptionInput } from "./styles";
import Button from "@mui/material/Button";

const AdminListCardPopUp = (props) => {
    return (
        <PopupBackground>
            <Container>
                <Title> Descrição da atualização do serviço solicitado: </Title>
                <DescriptionInput
                    placeholder = "Descreva o que e por quem foi feito a atulização."
                    rows = {7}
                />
                <div style = {{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <div style = {{ display: "flex", flexDirection: "column" }}>
                        <Title> Data: </Title>
                        <input type = "date"
                            style = {{ height: "5.25vh", width: "12.5vw", border: "none", 
                            outline: "0.25vh solid lightgray", borderRadius: "5px", marginTop: "2.2vh", 
                            marginBottom: "2.2vh", textAlign: "center", fontSize: "16px", color: "#1b262c"}}
                        />
                    </div>
                    <Button onClick = {() => props.setTrigger(false)} 
                    variant = "contained"
                    style = {{ height: "5.25vh", width: "12.5vw", marginTop: "4.5vh", marginLeft: "7.5vw" }}>
                        Atualizar
                    </Button>
                </div>
            </Container>
        </PopupBackground>
    );
}

export default AdminListCardPopUp;