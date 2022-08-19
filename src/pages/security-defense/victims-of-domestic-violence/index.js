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
import ServiceOrderInformation from "../../../components/forms/ServiceOrderInformation";
import Favorites from "../../../components/favorites";

const VictimsOfDomesticViolence = (props) => {
	const [isFavorite, setIsFavorite] = useState(false);
	useEffect(() => {
		props.data.find(
			(favoriteX) => favoriteX.id === 44 && setIsFavorite(true)
		);
	}, []);
	const handleFavorite = () => {
		if (!isFavorite) {
			props.handleAddFavorite({
				id: 44,
				name: "Vítimas de violência doméstica",
				img: "/assets/img/home_seguranca_defesa_civil.png",
				link: "/violencia-domestica",
			}); //se favoritou o servico
		} else {
			props.handleSubFavorite({
				id: 44,
				name: "Vítimas de violência doméstica",
				img: "/assets/img/home_seguranca_defesa_civil.png",
				link: "/violencia-domestica",
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
						source="/assets/img/home_seguranca_defesa_civil.png"
						titulo="Segurança e Defesa Civil"
						linkItems={[
							{
								id: 1,
								name: "Registro de Acidentes",
								link: "/registro-acidentes",
							},
							{
								id: 2,
								name: "Registro de Roubos e Furtos",
								link: "/registro_roubos",
							},
							{
								id: 3,
								name: "Vítimas de violência doméstica",
								link: "/violencia-domestica",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Vítimas de violência doméstica
							</Typography>
						</div>
						<DescriptionText>
							Neste serviço você poderá realizar denúncia de
							violência doméstica através da plataforma web ou
							aplicação mobile, recebendo mais informações sobre
							como oficializar a denúncia nos meios jurídicos
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
					<ServiceOrderInformation
						srcaddress="/victims-of-domestic-violence"
						descriptionHelperText="Conte-nos em detalhes a denúncia de violência doméstica acima."
					/>
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};

export default VictimsOfDomesticViolence;
