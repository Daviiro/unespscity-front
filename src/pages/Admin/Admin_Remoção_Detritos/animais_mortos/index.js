import React from "react";

import { ContainerBase, Details, SubHeader, ContainerColumn, Square } from "./styles";

import Header from "../../../../components/header";
import MiniCard from "../../../../components/mini-card";
import Line from "../../../../components/line";
import ServiceDescription from "../../../../components/service-description";
import Footer from "../../../../components/footer";


const AdminAnimaisMortos = () => {
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
                        
                    </Details> 
                </Square>
                <Footer/>
            </ContainerBase>
        </>
    )
};
export default AdminAnimaisMortos;