import React, { useState, useEffect, useContext } from "react";
import Map from "./map";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	MidContentContainer,
	DescriptionText,
} from "../../../../components/styled-components/PageStyles";
import AdminHeader from "../../../../components/header/admin";
import Footer from "../../../../components/footer";
import Typography from "@mui/material/Typography";
import MiniCardRemoteSensing from "../mini-card-remote-sensing";
import ShowAllRoutes from "./show-all-routes";
import { ChoiceContainer, ChoiceSpan } from "./styles";
import { fetchCityForID } from "../../../../services/IBGE";
import LocalContext from "../../../user-location/Context";
import { fetchLatLong } from "../../../../services/GoogleMaps";

const AdminGuardian = () => {
	const [toggle, setToggle] = useState(true);
	const [showRoutesTitleColor, setShowRoutesTitleColor] =
		useState("var(--secondary)");
	const [addRoutesTitleColor, setAddRoutesTitleColor] = useState("#000000");
	useEffect(() => {
		if (toggle) {
			setShowRoutesTitleColor("#000000");
			setAddRoutesTitleColor("var(--secondary)");
		} else {
			setShowRoutesTitleColor("var(--secondary)");
			setAddRoutesTitleColor("#000000");
		}
	});
	const [formValues, setFormValues] = useContext(LocalContext);
	const [center, setCenter] = useState({ lat: 0, lng: 0 });
	const [cityName, setCityName] = useState("");

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
			<AdminHeader />
			<ContentContainer>
				<TopContentContainer>
					<MiniCardRemoteSensing />
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Monitoramento do Guarda
							</Typography>
						</div>
						<DescriptionText>
							Aqui você pode cadastrar a rota de um guarda ou
							vizualizar as rotas já existentes no nosso banco de
							dados.
						</DescriptionText>
					</div>
					<div></div>
				</TopContentContainer>
				<MidContentContainer>
					<ChoiceContainer>
						<div
							style={{ cursor: "pointer" }}
							onClick={() =>
								toggle ? <></> : setToggle(!toggle)
							}
						>
							<ChoiceSpan toggle={addRoutesTitleColor}>
								Cadastrar Rotas
							</ChoiceSpan>
						</div>
						<div
							style={{ cursor: "pointer" }}
							onClick={() =>
								toggle ? setToggle(!toggle) : <></>
							}
						>
							<ChoiceSpan toggle={showRoutesTitleColor}>
								Mostrar Rotas
							</ChoiceSpan>
						</div>
					</ChoiceContainer>
					{toggle ? <Map center={center} /> : <ShowAllRoutes />}
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};

export default AdminGuardian;
