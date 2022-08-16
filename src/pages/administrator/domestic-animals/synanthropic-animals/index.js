import MiniCard from "../../../../components/mini-card";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	MidContentContainer,
	DescriptionText,
} from "../../../../components/styled-components/PageStyles";
import AdminHeader from "../../../../components/header/admin";
import Footer from "../../../../components/footer";
import AdminListCard from "../../../../components/card-list-admin";
import Typography from "@mui/material/Typography";

const AdminSynanthropicAnimals = () => {
	const mockupData = [
		{
			id: 1,
			street: "Rua São Joaquim",
			streetNumber: 189,
			referencePoint: "Veterinario Barbosa",
			latitude: 121223,
			longitude: 123213,
			description:
				"animal da raca tal cor tal foi visto sendo mal tratado por tal",
			images: "",
			isResolved: false,
			date: Date,
		},
		{
			id: 2,
			street: "Rua Maracanã",
			streetNumber: 981,
			referencePoint: "Veterinario Franciso",
			latitude: 121223,
			longitude: 123213,
			description:
				"animal da raca tal cor tal foi visto sendo mal tratado por tal",
			images: "",
			isResolved: true,
			date: Date,
		},
	];

	return (
		<ContainerBase>
			<AdminHeader />
			<ContentContainer>
				<TopContentContainer>
					<MiniCard
						source="/assets/img/home_animais_domesticos.png"
						titulo="Animais Domésticos"
						linkItems={[
							{
								id: 1,
								name: "Animais Abandonados",
								link: "/admin/animais_abandonados",
							},
							{
								id: 2,
								name: "Animais Perdidos",
								link: "/admin/animais_perdidos_opcoes",
							},
							{
								id: 3,
								name: "Maus tratos à Animais",
								link: "/admin/maus_tratos",
							},
							{
								id: 4,
								name: "Animais Sinantrópicos",
								link: "/admin/animais-sinantropicos",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Animais Sinantrópicos
							</Typography>
						</div>
						<DescriptionText>
							Consulte aqui a lista de denúncias contra Animais
							Sinantrópicos.
						</DescriptionText>
					</div>
					<div></div>
				</TopContentContainer>
				<MidContentContainer>
					{mockupData.map((data) => (
						<AdminListCard
							source="/assets/img/home_animais_domesticos.png"
							nome={data.street + ", " + data.streetNumber}
							sobrenome={data.referencePoint}
							descricao={data.description}
						/>
					))}
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};

export default AdminSynanthropicAnimals;
