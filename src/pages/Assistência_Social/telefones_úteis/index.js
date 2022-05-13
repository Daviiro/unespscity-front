import React from "react";

import { ContainerBase, Details, SubHeader, ContainerColumn, Square } from "./styles";

import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import Line from "../../../components/line";
import ServiceDescription from "../../../components/service-description";
import Footer from "../../../components/footer";
import UsefulPhoneCard from "../../../components/useful-phone-card";

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
                <Square>
                    <ServiceDescription 
                        description = "Confira a listagem de telefones úteis ao cidadão, como os números de secretarias, edifícios públicos (como hospitais), linhas de apoio ao cidadão, entre muitas outros:"
                    />
                    <Details>
                        <UsefulPhoneCard name="Policia Militar" phone="190" text="Sempre ligue pra Policia quando alguem te encher o saco"/>
                        <UsefulPhoneCard name="Secretaria Do Meio Ambiente" phone="3903-1920" text="Ligue quando tiver problemas relacionado ao meio ambiente"/>
                        <UsefulPhoneCard name="Secretaria X" phone="xxxx-xxxx" text="Ligue se xxxxxxxxxxxxxxxxx."/>
                        <UsefulPhoneCard name="Secretaria Y" phone="yyyy-yyyy" text="yyyyyyyyyyy"/>
                    </Details>
                </Square>
                <Footer/>
            </ContainerBase>
        </>
    )
};
export default Telefones;