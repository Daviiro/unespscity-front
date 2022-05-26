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

const Dengue = () => {  // posteriormente passar o número de solicitados e de resolvidos por parâmetro //
    const totalSolicitados = 93;
    const totalResolvidos = 22;
    return (
        <>
            <ContainerBase>
                <Header/>
                <SubHeader>
                    <MiniCard
                        source = "/assets/img/home_controle_pragas.png"
                        titulo = "Controle de Pragas"
                    />
                    <ContainerColumn>
                        <h1> Radar da Dengue </h1>
                        <Line />
                    </ContainerColumn>
                </SubHeader>
                <Square>
                    <ServiceDescription 
                        description = "Utilize este serviço para informar a localização de focos do mosquito transmissor da Dengue, o pernilongo-rajado (Aedes aegypti)."
                    />
                    <Details>
                        <a style = {{textDecoration: "none"}} target = "_blank" href = "https://www.google.com.br/search?q=aedes+aegypti&hl=pt-BR&tbm=isch&source=hp&biw=1496&bih=723&ei=iTmGYrWrF6-G5OUPuI-OuAs&iflsig=AJiK0e8AAAAAYoZHmWnZNcrsQDAjrtAqUIf5D7XKHlYE&oq=aedes+&gs_lcp=CgNpbWcQAxgAMggIABCABBCxAzILCAAQgAQQsQMQgwEyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoICAAQsQMQgwFQAFjHCGChEmgAcAB4AIABqwGIAZYGkgEDMS41mAEAoAEBqgELZ3dzLXdpei1pbWc&sclient=img">
                            <MiniCard
                                    source = "/assets/img/Radar_da_Dengue.png"
                                    titulo = "Aedes aegypti"
                                />
                        </a>
                        <InputAddressContainer>
                            <Input title="Endereço:" width="36vw"/>
                            <Input title="Nº" width="7vw"/>
                        </InputAddressContainer>
                        <Input title="Ponto de Referência:" placeholder="Opcional"/>
                        <DescriptionInput placeholder = "Conte-nos em detalhes sobre o problema encontrado." />
                        <Button text="Enviar"/>
                    </Details> 
                </Square>
                <GrayLine />
                <ChartContainer>
                    <h3> Eliminações solicitadas e efetuadas: </h3>
                    <HomePieChart solved = {totalResolvidos} unsolved = {totalSolicitados} />
                </ChartContainer>
                <Footer/>
            </ContainerBase>
        </>
    )
};
export default Dengue;