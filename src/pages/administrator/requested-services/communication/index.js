import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../../components/styled-components/form-button";
import { ContainerBase, ContainerColumn } from "../components/styles";

const ComunicacaoOpcoes = () => {
    return (
        <>
            <ContainerBase>
                <ContainerColumn>
                    <Link to = "/admin/noticias">
                        <Button text = "Notícias" />
                    </Link>
                </ContainerColumn>
            </ContainerBase>
        </>
    );
};
export default ComunicacaoOpcoes;