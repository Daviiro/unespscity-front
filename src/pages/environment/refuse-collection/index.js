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
import Map from "./map";
import Favorites from "../../../components/favorites";
import ShowAllPolygons from "../../administrator/environment/refuse-collection/show-all-polygons";
import { fetchCityForID } from "../../../services/IBGE";
import { fetchLatLong } from "../../../services/GoogleMaps";
import LocalContext from "../../user-location/Context";

const RefuseCollection = (props) => {
	const [isFavorite, setIsFavorite] = useState(false);
	const [cityName, setCityName] = useState("");
	const [formValues, setFormValues] = useContext(LocalContext);
	const [center, setCenter] = useState({ lat: 0, lng: 0 });
	useEffect(() => {
		props.data.find(
			(favoriteX) => favoriteX.id === 27 && setIsFavorite(true)
		);
	}, []);
	const handleFavorite = () => {
		if (!isFavorite) {
			props.handleAddFavorite({
				id: 27,
				name: "Coleta de Lixo",
				img: "/assets/img/home_meio_ambiente.png",
				link: "/coleta-de-lixo",
			}); //se favoritou o servico
		} else {
			props.handleSubFavorite({
				id: 27,
				name: "Coleta de Lixo",
				img: "/assets/img/home_meio_ambiente.png",
				link: "/coleta-de-lixo",
			}); //se desfavoritou o servico
		}
		setIsFavorite(!isFavorite);
	};
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
			<Favorites data={props.data} />
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
					<ShowAllPolygons center={center} />
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};

export default RefuseCollection;
