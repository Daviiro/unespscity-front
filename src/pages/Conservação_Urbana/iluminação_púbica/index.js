import React from "react";
import { ContainerBase, SubHeader, ContainerColumn, ContainerRow, Square } from "./styles";

import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import Line from "../../../components/line";
import ServiceDescription from "../../../components/service-description";
import DescriptionInput from "../../../components/description-input";
import InputAddress from "../../../components/input-address";
import Button from '../../../components/form-button';
import Footer from "../../../components/footer";

const Iluminacao = () => {
    return (
        <>
            <ContainerBase>
                <Header/>
                <SubHeader>
                    <MiniCard
                        source = "/assets/img/home_conservacao_urbana.png"
                        titulo = "Conservação Urbana"
                    />
                    <ContainerColumn>
                        <h1> Iluminação Pública </h1>
                        <Line />
                    </ContainerColumn>
                </SubHeader>
                <Square>
                    <InputAddress />
                    <DescriptionInput/>
                    <Button text="Enviar"/> 
                </Square>
                <Footer/>
            </ContainerBase>
        </>
    )
};
export default Iluminacao;