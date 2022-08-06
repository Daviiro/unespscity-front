import React from "react";
import Header from "../../../../components/header";
import MiniCard from "../../../../components/mini-card";
import { StyledHr } from "../../../../components/styled-components/StyledHr";
import ServiceDescription from "../../../../components/service-description";
import Footer from "../../../../components/footer";
import AdminListCard from "../../../../components/card-list-admin";
import Typography from "@mui/material/Typography";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	DescriptionText,
	MidContentContainer,
} from "../../../../components/styled-components/PageStyles";

const AdminVias = () => {
	return (
		<ContainerBase>
			<Header />
			<ContentContainer>
				<TopContentContainer>
					<MiniCard
						source="/assets/img/home_conservacao_urbana.png"
						titulo="Conservação Urbana"
						linkItems={[
							{
								id: 1,
								name: "Fiscalização de Instalações",
								link: "/admin/fiscalizacao_de_instalacoes",
							},
							{
								id: 2,
								name: "Iluminação Pública",
								link: "/admin/iluminacao_publica",
							},
							{
								id: 3,
								name: "Monumentos e Chafarizes",
								link: "/admin/monumentos_e_chafarizes",
							},
							{
								id: 4,
								name: "Pavimentação",
								link: "/admin/pavimentacao",
							},
							{
								id: 5,
								name: "Vias Públicas",
								link: "/admin/vias_publicas",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">Vias Públicas</Typography>
						</div>
						<DescriptionText>
							Lista com todas as vias publicas em situações ruins
							relatadas pelos usuarios.
						</DescriptionText>
					</div>
					<div></div>
				</TopContentContainer>
				<MidContentContainer>
					<AdminListCard
						source="/assets/img/home_assistencia_social.png"
						nome="Nome"
						sobrenome="Telefone"
						click="showDeleteConfirm"
						descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
					/>
					<AdminListCard
						source="/assets/img/home_assistencia_social.png"
						nome="Nome"
						sobrenome="Telefone"
						descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
					/>
					<AdminListCard
						source="/assets/img/home_assistencia_social.png"
						nome="Nome"
						sobrenome="Telefone"
						descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
					/>
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};
export default AdminVias;
