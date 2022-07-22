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

const AdminTumulos = () => {
	return (
		<>
			<ContainerBase>
				<Header />
				<SubHeader>
					<MiniCard
						source="/assets/img/home_assistencia_social.png"
						titulo="Assistência Social"
						linkItems={[
							{
								id: 1,
								name: "Locais Úteis",
								link: "/admin/locais_uteis",
							},
							{
								id: 2,
								name: "Telefones Úteis",
								link: "/admin/telefones_uteis",
							},
							{
								id: 3,
								name: "Programação Cultural",
								link: "/admin/programacao_cultural",
							},
							{
								id: 4,
								name: "Cadastro de Túmulos e Falecidos",
								link: "/admin/tumulos",
							},
							{
								id: 3,
								name: "Programação Cultural",
								link: "/admin/programacao_cultural",
							},
						]}
					/>
					<ContainerColumn>
						<h1> Cadastro de Túmulos e Falecidos  </h1>
						<StyledHr />
					</ContainerColumn>
				</SubHeader>
				<Square>
					<ServiceDescription description = "Lista com todos as notas de túmulos e falecidos cadastrados no sistema." />
					<Details>
						<AdminListCard
							source="/assets/img/home_assistencia_social.png"
							nome = "Nome do Falecido"
							sobrenome = "Cemitério x, Túmulo y"
							descricao = "Falecido em xx/yy/zzzz."
						/>
						<AdminListCard
							source="/assets/img/home_assistencia_social.png"
							nome = "Nome do Falecido"
							sobrenome = "Cemitério x, Túmulo y"
							descricao = "Falecido em xx/yy/zzzz."
						/>
						<AdminListCard
							source="/assets/img/home_assistencia_social.png"
							nome = "Nome do Falecido"
							sobrenome = "Cemitério x, Túmulo y"
							descricao = "Falecido em xx/yy/zzzz."
						/>
						<AdminListCard
							source="/assets/img/home_assistencia_social.png"
							nome = "Nome do Falecido"
							sobrenome = "Cemitério x, Túmulo y"
							descricao = "Falecido em xx/yy/zzzz."
						/>
						<AdminListCard
							source="/assets/img/home_assistencia_social.png"
							nome = "Nome do Falecido"
							sobrenome = "Cemitério x, Túmulo y"
							descricao = "Falecido em xx/yy/zzzz."
						/>
						<AdminListCard
							source="/assets/img/home_assistencia_social.png"
							nome = "Nome do Falecido"
							sobrenome = "Cemitério x, Túmulo y"
							descricao = "Falecido em xx/yy/zzzz."
						/>
					</Details>
				</Square>
				<Footer />
			</ContainerBase>
		</>
	);
};
export default AdminTumulos;