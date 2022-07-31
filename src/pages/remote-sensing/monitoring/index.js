import { useState, useEffect } from "react";
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
import Favorites from "../../../components/favorites";

const Monitoring = (props) => {
	const [isFavorite, setIsFavorite] = useState(false);
	useEffect(() => {
		props.data.find(
			(favoriteX) => favoriteX.id === 50 && setIsFavorite(true)
		);
	}, []);
	const handleFavorite = () => {
		if (!isFavorite) {
			props.handleAddFavorite({
				id: 50,
				name: "Monitoramento Remoto",
				img: "/assets/img/home_sensoriamento_movel_participativo.png",
				link: "/monitoramento-pessoas-veiculos",
			}); //se favoritou o servico
		} else {
			props.handleSubFavorite({
				id: 50,
				name: "Monitoramento Remoto",
				img: "/assets/img/home_sensoriamento_movel_participativo.png",
				link: "/monitoramento-pessoas-veiculos",
			}); //se desfavoritou o servico
		}
		setIsFavorite(!isFavorite);
	};

	return (
		<ContainerBase>
			<Header />
			<Favorites data={props.data} />
			<ContentContainer>
				<TopContentContainer>
					<MiniCard
						source="/assets/img/home_sensoriamento_movel_participativo.png"
						titulo="Sensoriamento Móvel Participativo"
						linkItems={[
							{
								id: 1,
								name: "Monitoramento do Guardinha",
								link: "/monitoramento-guardinha",
							},
							{
								id: 2,
								name: "Monitoramento de Pessoas ou veiculos",
								link: "/monitoramento-pessoas-veiculos",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Monitoramento Remoto
							</Typography>
						</div>
						<DescriptionText>
							Neste serviço você terá informações sobre o
							monitoramento da movimentação diária de pessoas em
							todos os meios de transporte da cidade para fins de
							pesquisa, análise e monitoramento da qualidade do
							transporte, além de proporcionar informações sobre
							trânsito e congestionamento, principalmente em
							horários de pico
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
				<MidContentContainer></MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};

export default Monitoring;
