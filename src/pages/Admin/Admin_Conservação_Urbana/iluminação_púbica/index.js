import React from "react";

import { ContainerBase, SubHeader, ContainerColumn, Square, Details } from "./styles";

import Header from "../../../../components/header";
import MiniCard from "../../../../components/mini-card";
import Line from "../../../../components/line";
import ServiceDescription from "../../../../components/service-description";
import Footer from "../../../../components/footer";

const AdminIluminacao = () => {
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
                    <ServiceDescription 
                        description = "Utilize este serviço para informar ocorrências com a iluminação de áreas públicas da cidade, como postes e outras fontes de luz queimadas, danificadas, oscilando e/ou irregulares."
                    />
                    <Details>
                        
                    </Details> 
                </Square>
                <Footer/>
            </ContainerBase>
        </>
    )
};
export default AdminIluminacao;