import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../../components/styled-components/form-button";
import { ContainerBase, ContainerColumn } from "../components/styles";

const VigilanciaSanitariaOpcoes = () => {
    return (
        <>
            <ContainerBase>
                <ContainerColumn>
                    <Link to = "/admin/limpeza_de_piscinas">
                        <Button text = "Limpeza de Piscinas" />
                    </Link>
                    <Link to = "/admin/limpeza_de_terreno">
                        <Button text = "Limpeza de Terreno" />
                    </Link>
                    <Link to = "/admin/restaurantes">
                        <Button text = "Restaurantes/Ambientes Irregulares" />
                    </Link>
                </ContainerColumn>
            </ContainerBase>
        </>
    );
};
export default VigilanciaSanitariaOpcoes;