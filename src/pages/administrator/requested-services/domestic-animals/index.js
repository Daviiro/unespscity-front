import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../../components/styled-components/form-button";
import { ContainerBase, ContainerColumn } from "../components/styles";

const AnimaisDomesticosOpcoes = () => {
    return (
        <>
            <ContainerBase>
                <ContainerColumn>
                    <Link to = "/admin/animais_abandonados">
                        <Button text = "Animais Abandonados" />
                    </Link>
                    <Link to = "/admin/animais_perdidos">
                        <Button text = "Animais Perdidos" />
                    </Link>
                    <Link to = "/admin/maus_tratos">
                        <Button text = "Maus tratos à Animais" />
                    </Link>
                    <Link to = "/admin/adocao_animais">
                        <Button text = "Adoção de Animais" />
                    </Link>
                </ContainerColumn>
            </ContainerBase>
        </>
    );
};
export default AnimaisDomesticosOpcoes;