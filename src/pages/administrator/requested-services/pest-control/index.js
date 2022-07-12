import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../../components/styled-components/form-button";
import { ContainerBase, ContainerColumn } from "../components/styles";

const ControlePragasOpcoes = () => {
    return (
        <>
            <ContainerBase>
                <ContainerColumn>
                    <Link to = "/admin/foco_de_escorpiao">
                        <Button text = "Foco de Escorpião" />
                    </Link>
                    <Link to = "/admin/insetos_roedores_caramujos">
                        <Button text = "Insetos Roedores e Caramujos" />
                    </Link>
                    <Link to = "/admin/leishmaniose">
                        <Button text = "Leishmaniose" />
                    </Link>
                    <Link to = "/admin/radar_da_dengue">
                        <Button text = "Radar da Dengue" />
                    </Link>
                </ContainerColumn>
            </ContainerBase>
        </>
    );
};
export default ControlePragasOpcoes;