import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/styled-components/form-button";
import { ContainerBase, ContainerColumn } from "./styles";

const AdocaoAnimaisOpcoes = () => {
    return (
        <>
            <ContainerBase style = {{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                <ContainerColumn>
                    <Link to = "/animais_perdidos_novo">
                        <Button text = "Cadastrar animal para doação" />
                    </Link>
                    <Link to = "/animais_perdidos_lista">
                        <Button text = "Ver lista de animais disponíveis para adoção" />
                    </Link>
                </ContainerColumn>
            </ContainerBase>
        </>
    );
};
export default AdocaoAnimaisOpcoes;