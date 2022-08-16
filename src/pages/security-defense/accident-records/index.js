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
import ServiceOrderInformation from "../../../components/forms/ServiceOrderInformation";
import Footer from "../../../components/footer";
import Favorites from "../../../components/favorites";

const AccidentRecords = (props) => {
	const [isFavorite, setIsFavorite] = useState(false);
	useEffect(() => {
		props.data.find(
			(favoriteX) => favoriteX.id === 42 && setIsFavorite(true)
		);
	}, []);
	const handleFavorite = () => {
		if (!isFavorite) {
			props.handleAddFavorite({
				id: 42,
				name: "Registro de Acidentes",
				img: "/assets/img/home_seguranca_defesa_civil.png",
				link: "/registro-acidentes",
			}); //se favoritou o servico
		} else {
			props.handleSubFavorite({
				id: 42,
				name: "Registro de Acidentes",
				img: "/assets/img/home_seguranca_defesa_civil.png",
				link: "/registro-acidentes",
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
								Registro de Acidentes
							</Typography>
						</div>
						<DescriptionText>
							Neste serviço você poderá realizar o registro de um
							acidente através da plataforma web ou aplicação
							mobile, indicando hora, local e envolvidos, buscando
							facilitar o socorro.
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
						srcaddress="accidentrecords"
						descriptionHelperText="Conte-nos acima a natureza do acidente, e se possível relate se houve vítimas."
					/>
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};

export default AccidentRecords;
