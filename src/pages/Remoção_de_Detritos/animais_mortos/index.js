import React from "react";
import { ContainerBase, SubHeader, ContainerColumn, ContainerRow } from "./styles";
import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import Line from "../../../components/line";
import Footer from "../../../components/footer";

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
                <Footer/>
            </ContainerBase>
        </>
    )
};
export default Animais_Mortos;