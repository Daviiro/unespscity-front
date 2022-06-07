import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/styled-components/form-button";
import { ContainerBase, ContainerColumn } from "./styles";

const AnimaisPerdidosOpcoes = () => {
    return (
        <>
            <ContainerBase style = {{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                <ContainerColumn>
                    <Link to = "/animais_perdidos_novo">
                        <Button text = "Cadastrar novo animal perdido" />
                    </Link>
                    <Link to = "/animais_perdidos_lista">
                        <Button text = "Ver lista de animais perdidos" />
                    </Link>
                </ContainerColumn>
            </ContainerBase>
        </>
    );
};
export default AnimaisPerdidosOpcoes;