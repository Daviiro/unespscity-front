import React from "react";
import { ContainerBase, SubHeader, ContainerColumn, ContainerRow } from "./styles";
import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import Line from "../../../components/line";
import Footer from "../../../components/footer";

const Parques = () => {
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
                        <h1> Parques </h1>
                        <Line />
                    </ContainerColumn>
                </SubHeader>
                <Footer/>
            </ContainerBase>
        </>
    )
};
export default Parques;