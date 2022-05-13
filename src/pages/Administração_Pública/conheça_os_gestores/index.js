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

const Gestores = () => {
    return (
        <>
            <ContainerBase>
                <Header/>
                <SubHeader>
                    <MiniCard
                        source = "/assets/img/home_administracao_publica.png"
                        titulo = "Administração Pública"
                    />
                    <ContainerColumn>
                        <h1> Conheça os Gestores </h1>
                        <Line />
                    </ContainerColumn>
                </SubHeader>
                <Square>
                    <ServiceDescription 
                        description = "Conheça os atuais gestores que trabalham diariamente servindo às necessidades da sua grande cidade!"
                    />
                    <Details>
                        <InputAddressContainer>
                            <Input title="Endereço:" width="36vw"/>
                            <Input title="Nº" width="7vw"/>
                        </InputAddressContainer>
                        <Input title="Ponto de Referência:" placeholder="Opcional"/>
                        <DescriptionInput/>
                        <Button text="Enviar"/>
                    </Details> 
                </Square>
                <Footer/>
            </ContainerBase>
        </>
    )
};
export default Gestores;