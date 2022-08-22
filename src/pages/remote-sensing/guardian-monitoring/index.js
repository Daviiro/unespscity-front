import { useState, useEffect, useContext } from "react";
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
import Map from "./map";
import { fetchCityForID } from "../../../services/IBGE";
import { fetchLatLong } from "../../../services/GoogleMaps";
import LocalContext from "../../user-location/Context";

const GuardianMonitoring = (props) => {
	const google = window.google;
	const [formValues, setFormValues] = useContext(LocalContext);
	const [isFavorite, setIsFavorite] = useState(false);
	useEffect(() => {
		props.data.find(
			(favoriteX) => favoriteX.id === 51 && setIsFavorite(true)
		);
	}, []);
	const handleFavorite = () => {
		if (!isFavorite) {
			props.handleAddFavorite({
				id: 51,
				name: "Monitoramento do Guardinha",
				img: "/assets/img/home_sensoriamento_movel_participativo.png",
				link: "/monitoramento-guardinha",
			}); //se favoritou o servico
		} else {
			props.handleSubFavorite({
				id: 51,
				name: "Monitoramento do Guardinha",
				img: "/assets/img/home_sensoriamento_movel_participativo.png",
				link: "/monitoramento-guardinha",
			}); //se desfavoritou o servico
		}
		setIsFavorite(!isFavorite);
	};
	const [cityName, setCityName] = useState("");
	const [center, setCenter] = useState({ lat: 0, lng: 0 });
	fetchCityForID(formValues.city).then((city) => {
		setCityName(city);
	}); //API DO IBGE, SEM PROBLEMAS DE COBRANCA
	useEffect(() => {
		if (formValues.city !== undefined) {
			fetchCityForID(formValues.city).then((city) => {
				setCityName(city);
			}); //API DO IBGE, SEM PROBLEMAS DE COBRANCA
			if (cityName != "") {
				fetchLatLong(cityName).then((data) => {
					setCenter({
						lat: data.results[0].geometry.location.lat,
						lng: data.results[0].geometry.location.lng,
					});
				});
			} //DENTRO DESTE TEM A API DO GEOCODE, DE JEITO NENHUM CRIE UM LOOP NESTE USEEFFECT
		}
	}, [cityName]);

	return (
		<ContainerBase>
			<Header />
			<Favorites data={props.data} />
			<ContentContainer>
				<TopContentContainer>
					<MiniCard
						source="/assets/img/home_sensoriamento_movel_participativo.png"
						titulo="Sensoriamento Móvel"
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
								Monitoramento do Guardinha
							</Typography>
						</div>
						<DescriptionText>
							Neste serviço você terá informações sobre o
							monitoramento da movimentação diária do guardinha
							que protege e cuida da sua residencia.
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
					fsdfsfs
					<Map center={center} />
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};

export default GuardianMonitoring;
