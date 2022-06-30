import React from "react";

import {
	ContainerBase,
	SubHeader,
	ContainerColumn,
	Square,
	Details,
} from "../../public-administration/know-city-managers/styles";

import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import { StyledHr } from "../../../components/styled-components/StyledHr";
import ServiceDescription from "../../../components/service-description";
import Footer from "../../../components/footer";

const Monitoring = () => {
    return (
        <>
			<ContainerBase>
				<Header />
				<SubHeader>
					<MiniCard
						source = "/assets/img/home_meio_ambiente.png"
						titulo = "Meio Ambiente"
						linkItems={[
							{
                                id: 1,
                                name: "Adoção de Áreas Públicas",
                                link: "/adocao_areas_opcoes",
                            },
                            {
                                id: 2,
                                name: "Monitoramento do Tempo",
                                link: "/monitoramento",
                            },
						]}
					/>
					<ContainerColumn>
						<h1> Monitoramento do Tempo </h1>
						<StyledHr />
					</ContainerColumn>
				</SubHeader>
				<Square>
					<ServiceDescription description = "Aqui você pode checar o monitoramento do tempo em tempo real. " />
					<Details>
			
					</Details>
				</Square>
				<Footer />
			</ContainerBase>
		</>
    )
}

export default Monitoring;