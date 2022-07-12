import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../../components/styled-components/form-button";
import { ContainerBase, ContainerColumn } from "../components/styles";

const ConservacaoUrbanaOpcoes = () => {
    return (
        <>
            <ContainerBase>
                <ContainerColumn>
                    <Link to = "/admin/fiscalizacao_de_instalacoes">
                        <Button text = "Fiscalização de Instalações" />
                    </Link>
                    <Link to = "/admin/iluminacao_publica">
                        <Button text = "Iluminação Pública" />
                    </Link>
                    <Link to = "/admin/monumentos_e_chafarizes">
                        <Button text = "Monumentos e Chafarizes" />
                    </Link>
                    <Link to = "/admin/pavimentacao">
                        <Button text = "Pavimentação" />
                    </Link>
                    <Link to = "/admin/vias_publicas">
                        <Button text = "Vias Públicas" />
                    </Link>
                </ContainerColumn>
            </ContainerBase>
        </>
    );
};
export default ConservacaoUrbanaOpcoes;