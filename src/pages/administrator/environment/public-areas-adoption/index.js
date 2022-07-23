import React from "react";

import {
	ContainerBase,
	SubHeader,
	ContainerColumn,
	Square,
	Details,
} from "./styles";

import Header from "../../../../components/header";
import MiniCard from "../../../../components/mini-card";
import { StyledHr } from "../../../../components/styled-components/StyledHr";
import ServiceDescription from "../../../../components/service-description";
import Footer from "../../../../components/footer";
import AdminListCard from "../../../../components/card-list-admin";

const AdminAdocaoAreas = () => {
	return (
		<>
			<ContainerBase>
				<Header />
				<SubHeader>
					<MiniCard
						source="/assets/img/home_meio_ambiente.png"
						titulo="Meio Ambiente"
						linkItems={[
							{
								id: 1,
								name: "Adoção de Áreas Públicas",
								link: "/admin/adocao_areas_publicas",
							},
							{
								id: 2,
								name: "Monitoramento",
								link: "/admin/monitoramento",
							},
							{
								id: 3,
								name: "Coleta de Lixo",
								link: "/admin/coleta-de-lixo",
							},
						]}
					/>
					<ContainerColumn>
						<h1> Adoção de Áreas Públicas </h1>
						<StyledHr />
					</ContainerColumn>
				</SubHeader>
				<Square>
					<ServiceDescription description="Lista com todas as Áreas Públicas passíveis de adoção do município." />
					<Details>
						<AdminListCard
							source="/assets/img/meio_ambiente.png"
							nome="[Nome]"
							sobrenome="[localização]"
							descricao="status: Disponível"
						/>
						<AdminListCard
							source="/assets/img/meio_ambiente.png"
							nome="[Nome]"
							sobrenome="[localização]"
							descricao="status: Disponível"
						/>
						<AdminListCard
							source="/assets/img/meio_ambiente.png"
							nome="[Nome]"
							sobrenome="[localização]"
							descricao="status: Disponível"
						/>
						<AdminListCard
							source="/assets/img/meio_ambiente.png"
							nome="[Nome]"
							sobrenome="[localização]"
							descricao="status: Disponível"
						/>
						<AdminListCard
							source="/assets/img/meio_ambiente.png"
							nome="[Nome]"
							sobrenome="[localização]"
							descricao="status: Adotado"
						/>
						<AdminListCard
							source="/assets/img/meio_ambiente.png"
							nome="[Nome]"
							sobrenome="[localização]"
							descricao="status: Adotado"
						/>
					</Details>
				</Square>
				<Footer />
			</ContainerBase>
		</>
	);
};
export default AdminAdocaoAreas;
