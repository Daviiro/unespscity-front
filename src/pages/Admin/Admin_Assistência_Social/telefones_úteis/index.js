import React from "react";

import {
	ContainerBase,
	Details,
	Form,
	SubHeader,
	ContainerColumn,
	Square,
	InputAddressContainer,
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
import AdminServiceDescription from "../../../../components/StyledComponents/admin-service-description";
import AdminListCard from "../../../../components/AdminListCard";

const AdminTelefones = () => {
	return (
		<>
			<ContainerBase>
				<Header />
				<SubHeader>
					<MiniCard
						source="/assets/img/home_assistencia_social.png"
						titulo="Assistência Social"
					/>
					<ContainerColumn>
						<h1> Telefones Úteis </h1>
						<Line />
					</ContainerColumn>
				</SubHeader>
				<Square>
					<ServiceDescription description="Cadastre aqui telefones que sejam úteis para a população, como os números de secretarias, edifícios públicos (como hospitais), linhas de apoio ao cidadão, entre outros." />
					<Form>
						<InputAddressContainer>
							<Input title="Nome do Local:" width="32vw" />
							<Input title="Telefone" width="11vw" />
						</InputAddressContainer>
						<DescriptionInput
							title="Descrição:"
							placeholder="Nos conte em detalhes sobre o Local."
						/>
						<InputPhotos />
						<Button text="Enviar" />
					</Form>
					<AdminServiceDescription description="Aqui está a lista de todos os telefones úteis cadastrados até o momento." />
					<Details>
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
export default AdminTelefones;
