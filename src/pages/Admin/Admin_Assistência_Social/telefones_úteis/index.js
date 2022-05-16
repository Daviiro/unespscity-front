import React from "react";

import { ContainerBase, Details, SubHeader, ContainerColumn, Square, InputAddressContainer } from "./styles";

import Header from "../../../../components/header";
import MiniCard from "../../../../components/mini-card";
import Line from "../../../../components/line";
import ServiceDescription from "../../../../components/service-description";
import Footer from "../../../../components/footer";
import InputPhotos from "../../../../components/input-photos";
import Input from "../../../../components/input";
import DescriptionInput from "../../../../components/description-input";
import Button from '../../../../components/form-button';

const AdminTelefones = () => {
    return (
        <>
            <ContainerBase>
                <Header/>
                <SubHeader>
                    <MiniCard
                        source = "/assets/img/home_assistencia_social.png"
                        titulo = "Assistência Social"
                    />
                    <ContainerColumn>
                        <h1> Telefones Úteis </h1>
                        <Line />
                    </ContainerColumn>
                </SubHeader>
                <Square>
                    <ServiceDescription 
                        description = "Cadastre aqui telefones que sejam úteis para a população, como os números de secretarias, edifícios públicos (como hospitais), linhas de apoio ao cidadão, entre outros."
                    />
                    <Details>
                        <InputAddressContainer>
                            <Input title="Nome do Local:" width="32vw"/>
                            <Input title="Telefone" width="11vw"/>
                        </InputAddressContainer>
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
export default AdminTelefones;