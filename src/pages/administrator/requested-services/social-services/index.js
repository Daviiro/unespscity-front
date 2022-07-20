import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../../components/styled-components/form-button";
import { ContainerBase, ContainerColumn } from "../components/styles";

const ServicosSociaisOpcoes = () => {
    return (
        <>
            <ContainerBase>
                <ContainerColumn>
                    <Link to = "/admin/feiras_livres">
                        <Button text = "Feiras Livres" />
                    </Link>
                    <Link to = "/admin/diaristas">
                        <Button text = "Diaristas" />
                    </Link>
                </ContainerColumn>
            </ContainerBase>
        </>
    );
};
export default ServicosSociaisOpcoes;