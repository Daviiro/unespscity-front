import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../../components/styled-components/form-button";
import { ContainerBase, ContainerColumn } from "../components/styles";

const RemocaoDetritosOpcoes = () => {
    return (
        <>
            <ContainerBase>
                <ContainerColumn>
                    <Link to = "/admin/animais_mortos">
                        <Button text = "Animais Mortos" />
                    </Link>
                    <Link to = "/admin/residuos_solidos">
                        <Button text = "Resíduos Sólidos" />
                    </Link>
                </ContainerColumn>
            </ContainerBase>
        </>
    );
};
export default RemocaoDetritosOpcoes;