import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../../components/styled-components/form-button";
import { ContainerBase, ContainerColumn } from "../components/styles";

const ConservacaoRuralOpcoesOpcoes = () => {
    return (
        <>
            <ContainerBase>
                <ContainerColumn>
                    <Link to = "/admin/parques">
                        <Button text = "Parques" />
                    </Link>
                    <Link to = "/admin/pontes_em_estradas_rurais">
                        <Button text = "Pontes em estradas rurais" />
                    </Link>
                    <Link to = "/admin/pracas">
                        <Button text = "Praças" />
                    </Link>
                </ContainerColumn>
            </ContainerBase>
        </>
    );
};
export default ConservacaoRuralOpcoesOpcoes;