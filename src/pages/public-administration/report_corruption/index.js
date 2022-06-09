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

const ViolenciaDomestica = () => {
  // posteriormente passar o número de solicitados e de resolvidos por parâmetro //
  // const totalSolicitados = 48;
  // const totalResolvidos = 47;
  return (
    <>
      <ContainerBase>
        <Header />
        <SubHeader>
          <MiniCard
            source="/assets/img/home_administracao_publica.png"
            titulo="Administração Pública"
            linkItems={[
              {
                id: 1,
                name: "Conheça os Gestores",
                link: "/conheca_os_gestores",
              },
              {
                id: 2,
                name: "Consultar as propostas apresentadas e aprovadas",
                link: "/consultar_propostas",
              },
              {
                id: 3,
                name: "Central Anticorrupção",
                link: "/denuncia_corrupcao",
              },
            ]}
          />
          <ContainerColumn>
            <h1> Vítimas de Violência Doméstica </h1>
            <StyledHr />
          </ContainerColumn>
        </SubHeader>
        <Square>
          <ServiceDescription description="Utilize este serviço para registrar ocorrências de violência doméstica." />
          <Form />
        </Square>
        <GrayLine />
        {/* <ChartContainer>
          <h3>
            {" "}
            Ocorrências de violência doméstica:{" "}
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
export default ViolenciaDomestica;
