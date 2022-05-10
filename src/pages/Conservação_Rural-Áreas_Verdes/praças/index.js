import React from "react";
import { ContainerBase, SubHeader, ContainerColumn, ContainerRow } from "./styles";
import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import Line from "../../../components/line";
import Footer from "../../../components/footer";

const Pracas = () => {
    return (
        <>
            <ContainerBase>
                <Header/>
                <SubHeader>
                    <MiniCard
                        source = "/assets/img/home_conservacao_rural.png"
                        titulo = "Áreas Verdes"
                    />
                    <ContainerColumn>
                        <h1> Praças </h1>
                        <Line />
                    </ContainerColumn>
                </SubHeader>
                <Footer/>
            </ContainerBase>
        </>
    )
};
export default Pracas;