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
import InputLocalization from "../../../components/input-localization";
import InputPhotos from "../../../components/input-photos";

const Animais_Mortos = () => {
    return (
        <>
            <ContainerBase>
                <Header/>
                <SubHeader>
                    <MiniCard
                        source = "/assets/img/home_remocao_detritos.png"
                        titulo = "Remoção de Detritos"
                    />
                    <ContainerColumn>
                        <h1> Animais Mortos </h1>
                        <Line />
                    </ContainerColumn>
                </SubHeader>
                <Square>
                    <ServiceDescription 
                        description = "Utilize este serviço para solicitar a remoção de corpos de animais mortos localizados dentro dos limites do município."
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
export default Animais_Mortos;