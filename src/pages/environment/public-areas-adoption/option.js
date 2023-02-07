import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/styled-components/form-button";
import { ContainerBase, ContainerColumn } from "./styles";

const AdocaoAreasOpcoes = () => {
    return (
        <>
            <ContainerBase style = {{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                <ContainerColumn>
                    <Link to = "/adocao_areas_disponiveis">
                        <Button text = "Ver áreas disponíveis no município" />
                    </Link>
                    <Link to = "/adocao_areas_adotadas">
                        <Button text = "Ver áreas já adotadas no município" />
                    </Link>
                    <Link to = "/adocao_areas_regras">
                        <Button text = "Ver legislação" />
                    </Link>
                </ContainerColumn>
            </ContainerBase>
        </>
    );
};
export default AdocaoAreasOpcoes;