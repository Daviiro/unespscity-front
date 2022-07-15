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

const Sugestoes = () => {
	const [isFavorite, setIsFavorite] = useState(false);
	const handleFavorite = () => {
		setIsFavorite(!isFavorite);
		console.log("você favoritou este serviço");
	};
	return (
		<ContainerBase>
			<Header />
			<ContentContainer>
				<TopContentContainer>
					<MiniCard
						source="/assets/img/home_notificacao_comunicacao.png"
						titulo="Notificação e Comunicação"
						linkItems={[
							{
                                id: 1,
                                name: "Notícias da Cidade",
                                link: "/noticias",
                            },
                            {
                                id: 2,
                                name: "Sugestões e/ou Reclamações",
                                link: "/sugestoes",
                            },
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Fiscalização de Instalações
							</Typography>
						</div>
						<DescriptionText>
							Utilize este serviço para sugerir melhorias ou
							relatar alguma reclamação.
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

export default Sugestoes;
