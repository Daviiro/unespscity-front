import React from "react";
import { ContainerBase, SubHeader, ContainerColumn, ContainerRow } from "./styles";
import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import Line from "../../../components/line";
import Footer from "../../../components/footer";

const Feiras = () => {
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
                <Footer/>
            </ContainerBase>
        </>
    )
};
export default Feiras;