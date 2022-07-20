import React, { useState, useEffect, useContext } from "react";
import { fetchCityForID } from "../../../../services/IBGE";
import { fetchLatLong } from "../../../../services/GoogleMaps";
import { InfoWindowContainer } from "./styles";
import {
	GoogleMap,
	useJsApiLoader,
	Marker,
	InfoWindow,
} from "@react-google-maps/api";
import Typography from "@mui/material/Typography";
import LocalContext from "../../../user-location/Context";

const FairsMap = (props) => {
	const [center, setCenter] = useState({ lat: 0, lng: 0 });
	const [cityName, setCityName] = useState("");
	const [formValues, setFormValues] = useContext(LocalContext);
	fetchCityForID(formValues.city).then((city) => {
		setCityName(city);
	});
	useEffect(() => {
		fetchCityForID(formValues.city).then((city) => {
			setCityName(city);
		});
		console.log(cityName);
		fetchLatLong(cityName).then((data) => {
			setCenter({
				lat: data.results[0].geometry.location.lat,
				lng: data.results[0].geometry.location.lng,
			});
		});
	}, [cityName]);
	const containerStyle = {
		width: "100%",
		height: "500px",
	};
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "AIzaSyBQ7EzutsOQVslr8TE5Zh2s5XKK50Q4Oo8",
	});
	const [selected, setSelected] = React.useState({});
	const onSelect = (item) => {
		setSelected(item);
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
			{props.locations.map((location) => (
				<Marker
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
							{selected.operating_days.dom ? (
								<Typography variant="body2">Domingo</Typography>
							) : (
								<></>
							)}
							{selected.operating_days.seg ? (
								<Typography variant="body2">Segunda</Typography>
							) : (
								<></>
							)}
							{selected.operating_days.ter ? (
								<Typography variant="body2">Terça</Typography>
							) : (
								<></>
							)}
							{selected.operating_days.qua ? (
								<Typography variant="body2">Quarta</Typography>
							) : (
								<></>
							)}
							{selected.operating_days.qui ? (
								<Typography variant="body2">Quinta</Typography>
							) : (
								<></>
							)}
							{selected.operating_days.sex ? (
								<Typography variant="body2">Sexta</Typography>
							) : (
								<></>
							)}
							{selected.operating_days.sab ? (
								<Typography variant="body2">Sabádo</Typography>
							) : (
								<></>
							)}
						</div>

						<Typography variant="body2">
							Horário: {selected.operating_time.open}h00 às{" "}
							{selected.operating_time.close}h00
						</Typography>
					</InfoWindowContainer>
				</InfoWindow>
			)}
		</GoogleMap>
	) : (
		<></>
	);
};

export default FairsMap;
