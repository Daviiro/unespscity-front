import { useState } from "react";
import Header from "../../../components/header";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	DescriptionText,
	MidContentContainer,
} from "../../../components/styled-components/PageStyles";
import MiniCard from "../../../components/mini-card";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import Typography from "@mui/material/Typography";
import { StyledHr } from "../../../components/styled-components/StyledHr";
import Footer from "../../../components/footer";
import Map from "./map";

const RefuseCollection = () => {
	const [isFavorite, setIsFavorite] = useState(false);
	const handleFavorite = () => {
		setIsFavorite(!isFavorite);
		console.log("você favoritou este serviço");
	};

	const routes = [
		{
			id: 1,
			points: [
				{
					lat: -22.131951,
					lng: -51.40933,
				},
				{
					lat: -22.09763957730908,
					lng: -51.41680879940989,
				},
				{
					lat: -22.092304090035935,
					lng: -51.40159869150531,
				},
			],
			id: 2,
			points: [
				{
					lat: -22.131951,
					lng: -51.40933,
				},
				{
					lat: -22.09764,
					lng: -51.416807,
				},
				{
					lat: -22.0923,
					lng: -51.401594,
				},
			],
		},
	];

	return (
		<ContainerBase>
			<Header />
			<ContentContainer>
				<TopContentContainer>
					<MiniCard
						source="/assets/img/home_meio_ambiente.png"
						titulo="Meio Ambiente"
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
							{
								id: 3,
								name: "Coleta de Lixo",
								link: "/coleta-de-lixo",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">Coleta de Lixo</Typography>
						</div>
						<DescriptionText>
							Neste serviço você terá informações sobre as rotas e
							horários de circulação de cada um dos caminhões de
							lixo. Assim, os usuários poderão inserir a
							localização de sua estadia (CEP ou
							georreferenciamento) e a plataforma calculará e
							retornará os dias e horários aproximados em que um
							caminhão passará para fazer coleta no local,
							informando também se o mesmo é de lixo orgânico,
							reciclável ou ambos.
						</DescriptionText>
					</div>
					{isFavorite ? (
						<span>
							<AiFillStar
								style={{
									cursor: "pointer",
									margin: ".8rem",
									stroke: "black",
									strokeWidth: "5",
								}}
								color={"yellow"}
								size={25}
								onClick={() => handleFavorite()}
							/>
						</span>
					) : (
						<AiOutlineStar
							style={{
								cursor: "pointer",
								margin: ".8rem",
								stroke: "black",
								strokeWidth: "5",
							}}
							size={25}
							onClick={() => handleFavorite()}
						/>
					)}
					<StyledHr />
				</TopContentContainer>
				<MidContentContainer>
					<Map routes={routes} />
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};

export default RefuseCollection;
