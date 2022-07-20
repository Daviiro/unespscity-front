import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/styled-components/form-button";
import { ContainerBase, ContainerColumn } from "./styles";

const DiaristasOpcoes = () => {
    return (
        <>
            <ContainerBase style = {{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                <ContainerColumn>
                    <Link to = "/diaristas_novo">
                        <Button text = "Cadastro" />
                    </Link>
                    <Link to = "/diaristas_lista">
                        <Button text = "Ver lista de diaristas" />
                    </Link>
                </ContainerColumn>
            </ContainerBase>
        </>
    );
};
export default DiaristasOpcoes;