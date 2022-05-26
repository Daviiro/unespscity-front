import React from "react";
import HomePieChart from "../../../charts/donut";

import { ContainerBase, SubHeader, ContainerColumn, InputAddressContainer, Square, Details, ChartContainer } from "./styles";

import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import Line from "../../../components/line";
import ServiceDescription from "../../../components/service-description";
import Input from "../../../components/input";
import DescriptionInput from "../../../components/description-input";
import Button from '../../../components/form-button';
import GrayLine from "../../../components/gray-line";
import Footer from "../../../components/footer";
import InputPhotos from "../../../components/input-photos";
import InputLocalization from "../../../components/input-localization";

const Terreno = () => {  // posteriormente passar o número de solicitados e de resolvidos por parâmetro //
    const totalSolicitados = 37;
    const totalResolvidos = 17;
    return (
        <>
            <ContainerBase>
                <Header/>
                <SubHeader>
                    <MiniCard
                        source = "/assets/img/home_vigilancia_sanitaria.png"
                        titulo = "Vigilância Sanitária"
                    />
                    <ContainerColumn>
                        <h1> Limpeza de Terreno </h1>
                        <Line />
                    </ContainerColumn>
                </SubHeader>
                <Square>
                    <ServiceDescription 
                        description = "Utilize este serviço para solicitar a limpeza de terrenos públicos pertencentes ao município ou para denunciar terrenos baldios particulares com irregularidades."
                    />
                    <Details>
                        <InputLocalization/>
                        <p>OU</p>
                        <InputAddressContainer>
                            <Input title="Endereço:" width="36vw"/>
                            <Input title="Nº" width="7vw"/>
                        </InputAddressContainer>
                        <Input title="Ponto de Referência:" placeholder="Opcional"/>
                        <DescriptionInput
                            title="Descrição:"
                            placeholder='Conte-nos em detalhes sobre o problema encontrado.'
                        />
                        <InputPhotos/>
                        <Button text="Enviar"/>
                    </Details> 
                </Square>
                <GrayLine />
                <ChartContainer>
                    <h3> Limpezas solicitadas e efetuadas: </h3>
                    <HomePieChart solved = {totalResolvidos} unsolved = {totalSolicitados} />
                </ChartContainer>
                <Footer/>
            </ContainerBase>
        </>
    )
};
export default Terreno;