import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/styled-components/form-button";
import {
	ContainerBase,
	ContentContainer,
} from "../../components/styled-components/PageStyles";

const FamiliasCarentesOpcoes = () => {
    return (
        <>
            <ContainerBase style = {{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                <ContentContainer>
                    <Link to = "/familias_carentes_registro">
                        <Button text = "Registrar uma Familia Carente" />
                    </Link>
                    <Link to = "/familias_carentes_lista">
                        <Button text = "Ver familias carentes para ajudar" />
                    </Link>
                </ContentContainer>
            </ContainerBase>
        </>
    );
};
export default FamiliasCarentesOpcoes;