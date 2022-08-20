import React, { useState, useEffect, useContext } from "react";
import { fetchCityForID } from "../../../../../services/IBGE";
import { fetchLatLong } from "../../../../../services/GoogleMaps";
import { InfoWindowContainer } from "./styles";
import {
	GoogleMap,
	useJsApiLoader,
	MarkerF,
	InfoWindow,
} from "@react-google-maps/api";
import Typography from "@mui/material/Typography";
import LocalContext from "../../../../user-location/Context";
import Button from "@mui/material/Button";

const FairsMap = (props) => {
	const [center, setCenter] = useState({ lat: 0, lng: 0 });
	const [cityName, setCityName] = useState("");
	const [formValues, setFormValues] = useContext(LocalContext);
	fetchCityForID(formValues.city).then((city) => {
		setCityName(city);
	}); //API DO IBGE, SEM PROBLEMAS DE COBRANCA
	useEffect(() => {
		if (formValues.city !== undefined) {
			fetchCityForID(formValues.city).then((city) => {
				setCityName(city);
			});
			if (cityName != "") {
				fetchLatLong(cityName).then((data) => {
					setCenter({
						lat: data.results[0].geometry.location.lat,
						lng: data.results[0].geometry.location.lng,
					});
				});
			}
		}
	}, [cityName]); //DENTRO DESTE TEM A API DO GEOCODE, DE JEITO NENHUM CRIE UM LOOP NESTE USEEFFECT
	const containerStyle = {
		width: "100%",
		height: "500px",
	};
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: process.env.REACT_APP_GOOGLEMAPSAPIKEY,
	});
	const [selected, setSelected] = React.useState({});
	const onSelect = (item) => {
		setSelected(item);
	};

	//const [delFlag, setDelFlag] = useState(false);

	const dateFormater = (oldDate) => {
		const newDate = new Date(oldDate);
		let resul = newDate.getMinutes();
		if (resul === 0) {
			resul = newDate.getHours() + "h" + newDate.getMinutes() + "0";
		} else {
			resul = newDate.getHours() + "h" + newDate.getMinutes();
		}
		return resul;
	};

	return isLoaded ? (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={center}
			radius={100}
			zoom={13}
			onClick={(coords) => {
				//handleCoordChange(coords);
				props.onMapClick({
					lat: coords.latLng.lat(),
					lng: coords.latLng.lng(),
				});
			}}
		>
			{props.locations &&
				props.locations.map((location) => (
					<MarkerF
						key={location.id}
						position={location.location}
						onClick={() => onSelect(location)}
						icon={{
							url: process.env.PUBLIC_URL + props.icon,
						}}
					/>
				))}

			{selected.location && (
				<InfoWindow
					position={selected.location}
					clickable={true}
					onCloseClick={() => setSelected({})}
				>
					<InfoWindowContainer>
						<div>
							<Typography variant="subtitle2">
								Titulo: {selected.name}
							</Typography>
							<img
								src={process.env.PUBLIC_URL + selected.imgsrc}
								width="77"
								height="77"
							/>

							<Typography variant="body2">Dias:</Typography>
							{selected.operatingDays.dom ? (
								<Typography variant="body2">Domingo</Typography>
							) : (
								<></>
							)}
							{selected.operatingDays.seg ? (
								<Typography variant="body2">Segunda</Typography>
							) : (
								<></>
							)}
							{selected.operatingDays.ter ? (
								<Typography variant="body2">Terça</Typography>
							) : (
								<></>
							)}
							{selected.operatingDays.qua ? (
								<Typography variant="body2">Quarta</Typography>
							) : (
								<></>
							)}
							{selected.operatingDays.qui ? (
								<Typography variant="body2">Quinta</Typography>
							) : (
								<></>
							)}
							{selected.operatingDays.sex ? (
								<Typography variant="body2">Sexta</Typography>
							) : (
								<></>
							)}
							{selected.operatingDays.sab ? (
								<Typography variant="body2">Sabádo</Typography>
							) : (
								<></>
							)}
						</div>

						<Typography variant="body2">
							{/*Horário: {selected.openingHour.getHours()}h
							{selected.openingHour.getMinutes()} às{" "}
							{selected.closingHour.getHours()}h
							{selected.closingHour.getMinutes()}*/}
							Horário: {dateFormater(selected.openingHour)} às{" "}
							{dateFormater(selected.closingHour)}
						</Typography>
						<Button
							fulldwith
							onClick={() => {
								props.handleDel(selected._id);
								//setDelFlag(true);
							}}
						>
							Deletar
						</Button>
					</InfoWindowContainer>
				</InfoWindow>
			)}
		</GoogleMap>
	) : (
		<></>
	);
};

export default FairsMap;
