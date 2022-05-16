import React from "react";

import { ContainerBase, SubHeader, ContainerColumn, Square, Details } from "./styles";

import Header from "../../../../components/header";
import MiniCard from "../../../../components/mini-card";
import Line from "../../../../components/line";
import ServiceDescription from "../../../../components/service-description";
import Footer from "../../../../components/footer";

const AdminFeiras = () => {
    return (
        <>
            <ContainerBase>
                <Header/>
                <SubHeader>
                    <MiniCard
                        source = "/assets/img/home_servicos_sociais.png"
                        titulo = "Serviços Sociais"
                    />
                    <ContainerColumn>
                        <h1> Feiras Livres </h1>
                        <Line />
                    </ContainerColumn>
                </SubHeader>
                <Square>
                    <ServiceDescription 
                        description = "Consulte a listagem das feiras livres da cidade com suas respectivas localizações, dias e horários!"
                    />
                    <Details>
                    
                    </Details> 
                </Square>
                <Footer/>
            </ContainerBase>
        </>
    )
};
export default AdminFeiras;