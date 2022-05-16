import React from "react";

import { ContainerBase, SubHeader, ContainerColumn, Square, Details } from "./styles";

import Header from "../../../../components/header";
import MiniCard from "../../../../components/mini-card";
import Line from "../../../../components/line";
import ServiceDescription from "../../../../components/service-description";
import Footer from "../../../../components/footer";
import Input from "../../../../components/input";
import DescriptionInput from "../../../../components/description-input";
import InputPhotos from "../../../../components/input-photos";
import Button from '../../../../components/form-button';

const AdminGestores = () => {
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
                        description = "Cadastre aqui todas as informações do Gestor para que fique disponível à população!"
                    />
                    <Details>
                        <Input title="Nome do Gestor:" />
                        <DescriptionInput
                            title="Descrição:"
                            placeholder='Nos conte em detalhes sobre o Gestor e seu Cargo.'
                        />
                        <InputPhotos/>
                        <Button text="Enviar"/>
                    </Details> 
                </Square>
                <Footer/>
            </ContainerBase>
        </>
    )
};
export default AdminGestores;