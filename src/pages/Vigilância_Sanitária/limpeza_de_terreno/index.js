import React from "react";

import { ContainerBase, SubHeader, ContainerColumn, InputAddressContainer, Square, Details } from "./styles";

import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import Line from "../../../components/line";
import ServiceDescription from "../../../components/service-description";
import Input from "../../../components/input";
import DescriptionInput from "../../../components/description-input";
import Button from '../../../components/form-button';
import Footer from "../../../components/footer";
import InputPhotos from "../../../components/input-photos";
import InputLocalization from "../../../components/input-localization";

const Terreno = () => {
    return (
        <>
            <ContainerBase>
                <Header/>
                <SubHeader>
                    <MiniCard
                        source = "/assets/img/home_vigilancia_sanitaria.png"
                        titulo = "Vigilância Sanitária"
                    />
                    <ContainerColumn>
                        <h1> Limpeza de Terreno </h1>
                        <Line />
                    </ContainerColumn>
                </SubHeader>
                <Square>
                    <ServiceDescription 
                        description = "Utilize este serviço para solicitar a limpeza de terrenos públicos pertencentes ao município."
                    />
                    <Details>
                        <InputLocalization/>
                        <p>OU</p>
                        <InputAddressContainer>
                            <Input title="Endereço:" width="36vw"/>
                            <Input title="Nº" width="7vw"/>
                        </InputAddressContainer>
                        <Input title="Ponto de Referência:" placeholder="Opcional"/>
                        <DescriptionInput/>
                        <InputPhotos/>
                        <Button text="Enviar"/>
                    </Details> 
                </Square>
                <Footer/>
            </ContainerBase>
        </>
    )
};
export default Terreno;