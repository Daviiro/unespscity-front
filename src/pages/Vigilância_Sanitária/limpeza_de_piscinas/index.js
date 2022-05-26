import React from "react";
import HomePieChart from "../../../charts/donut";

import { ContainerBase, SubHeader, ContainerColumn, InputAddressContainer, Square, Details1, Details2, ChartContainer } from "./styles";

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

const Piscinas = () => {  // posteriormente passar o número de solicitados e de resolvidos por parâmetro //
    const totalSolicitados = 93;
    const totalResolvidos = 27;
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
                        <h1> Limpeza de Piscinas </h1>
                        <Line />
                    </ContainerColumn>
                </SubHeader>
                <Square>
                    <ServiceDescription 
                        description = "Utilize este serviço para solicitar a limpeza/manutenção de piscinas públicas do município. Você também pode checar links externos de como realizar a limpeza/manutenção em piscinas particulares."
                    />
                    <Details1>
                        <InputLocalization />
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
                    </Details1> 
                </Square>
                <Square style = {{height: "50%"}}>
                    <Details2>
                        <p> Como limpar piscinas particulares: </p>
                        <a target = "_blank" href = "https://diario-de-casa.shoptime.com.br/como-limpar-a-piscina/?epar=bp_nb_nb_go_sch_saz_blogs&utm_medium=buscappc&utm_source=google&utm_campaign=marca:shop%3Bmidia:buscappc%3Bformato:nobranding%3Bsubformato:nobranding%3Bidcampanha:sch_saz_blogs&gclid=EAIaIQobChMI2d6X8dTr9wIVzUFIAB2jQA6HEAAYASAAEgJyTfD_BwE"> ⇒ Link Externo 1 </a>
                        <a target = "_blank" href = "https://www.poolpiscina.com/como-limpar-piscina-manual-passo-passo-para-iniciantes/"> ⇒ Link Externo 2 </a>
                        <a target = "_blank" href = "https://www.cleanipedia.com/br/area-externa/como-limpar-piscina.html"> ⇒ Link Externo 3 </a>
                    </Details2>
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
export default Piscinas;