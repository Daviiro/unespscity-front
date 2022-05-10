import React from "react";
import { ContainerBase, SubHeader, ContainerColumn, ContainerRow } from "./styles";
import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import Line from "../../../components/line";
import Footer from "../../../components/footer";

const Telefones = () => {
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
                <Footer/>
            </ContainerBase>
        </>
    )
};
export default Telefones;