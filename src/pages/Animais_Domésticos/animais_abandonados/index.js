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

const AnimaisAbandonados = () => {  // posteriormente passar o número de solicitados e de resolvidos por parâmetro //
    const totalSolicitados = 79;
    const totalResolvidos = 12;
    return (
        <>
            <ContainerBase>
                <Header/>
                <SubHeader>
                    <MiniCard
                        source = "/assets/img/home_animais_domesticos.png"
                        titulo = "Animais Domésticos"
                    />
                    <ContainerColumn>
                        <h1> Animais Abandonados </h1>
                        <Line />
                    </ContainerColumn>
                </SubHeader>
                <Square>
                    <ServiceDescription 
                        description = "Utilize este serviço para informar o último local em que o animal foi avistado para que assim seja feito o resgate do animal. "
                    />
                    <Details>
                        <InputLocalization/>
                        <p>OU</p>
                        <InputAddressContainer>
                            <Input title="Endereço:" width="36vw"/>
                            <Input title="Nº" width="7vw"/>
                        </InputAddressContainer>
                        <Input title="Ponto de referência:" placeholder="Um local de referência proximo"/>
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
                    <h3> Resgastes solicitados e resolvidos: </h3>
                    <HomePieChart solved = {totalResolvidos} unsolved = {totalSolicitados} />
                </ChartContainer>
                <Footer/>
            </ContainerBase>
        </>
    )
};
export default AnimaisAbandonados;