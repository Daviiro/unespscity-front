import React from "react";

import {
	ContainerBase,
	Details,
	Form,
	SubHeader,
	ContainerColumn,
	Square,
} from "./styles";

import Header from "../../../../components/header";
import MiniCard from "../../../../components/MiniCard";
import Line from "../../../../components/StyledComponents/line";
import ServiceDescription from "../../../../components/ServiceDescription";
import Footer from "../../../../components/footer";
import InputPhotos from "../../../../components/ImagesInput";
import Input from "../../../../components/input";
import DescriptionInput from "../../../../components/DescriptionInput";
import Button from "../../../../components/StyledComponents/form-button";
import AdminListCard from "../../../../components/AdminListCard";
import AdminServiceDescription from "../../../../components/StyledComponents/admin-service-description";

const AdminFeiras = () => {
	return (
		<>
			<ContainerBase>
				<Header />
				<SubHeader>
					<MiniCard
						source="/assets/img/home_servicos_sociais.png"
						titulo="Serviços Sociais"
					/>
					<ContainerColumn>
						<h1> Feiras Livres </h1>
						<Line />
					</ContainerColumn>
				</SubHeader>
				<Square>
					<ServiceDescription description="Cadastre aqui os endereços em que ocorrem as feiras livres na cidade!" />
					<Form>
						<Input
							title="Rua / Bairro:"
							placeholder="Exemplo: Rua General Osório - Vila Dubus"
						/>
						<Input
							title="Dia / Horario:"
							placeholder="Exemplo: Sexta - 6h15 às 12h"
						/>
						<DescriptionInput
							title="Descrição:"
							placeholder="Nos conte em detalhes sobre a feira."
						/>
						<InputPhotos />
						<Button text="Enviar" />
					</Form>
					<AdminServiceDescription description="Aqui está a lista de todos as feiras livres cadastradas até o momento." />
					<Details>
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
					</Details>
				</Square>
				<Footer />
			</ContainerBase>
		</>
	);
};
export default AdminFeiras;
