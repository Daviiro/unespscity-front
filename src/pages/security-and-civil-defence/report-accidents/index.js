import React from "react";
// import PagesPieChart from "../../../charts/types/donut";

import {
  ContainerBase,
  SubHeader,
  ContainerColumn,
  Square,
  // ChartContainer,
} from "./styles";

import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import { StyledHr } from "../../../components/styled-components/StyledHr";
import ServiceDescription from "../../../components/service-description";
import GrayLine from "../../../components/styled-components/gray-line";
import Footer from "../../../components/footer";
import Form from "../../../components/forms";

const OcorrenciaAcidentes = () => {
  // posteriormente passar o número de solicitados e de resolvidos por parâmetro //
  // const totalSolicitados = 48;
  // const totalResolvidos = 47;
  return (
    <>
      <ContainerBase>
        <Header />
        <SubHeader>
          <MiniCard
            source="/assets/img/home_seguranca_defesa_civil.png"
            titulo="Segurança e Defesa Civil"
            linkItems={[
              {
                id: 1,
                name: "Vítimas de Violência Doméstica",
                link: "/violencia_domestica",
              },
              {
                id: 2,
                name: "Registro de Ocorrências de Acidentes",
                link: "/ocorrencia_acidentes",
              },
              {
                id: 3,
                name: "Registro de Ocorrências de Furto/Roubo",
                link: "/ocorrencia_furto_roubo",
              }
            ]}
          />
          <ContainerColumn>
            <h1> Reportar Acidentes </h1>
            <StyledHr />
          </ContainerColumn>
        </SubHeader>
        <Square>
          <ServiceDescription description="Utilize este serviço para reportar acidentes." />
          <Form />
        </Square>
        <GrayLine />
        {/* <ChartContainer>
          <h3>
            {" "}
            Acidentes ocorridos:{" "}
          </h3>
          <PagesPieChart
            solved={totalResolvidos}
            unsolved={totalSolicitados}
          />
        </ChartContainer> */}
        <Footer />
      </ContainerBase>
    </>
  );
};
export default OcorrenciaAcidentes;