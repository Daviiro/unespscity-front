import { useState, useContext, useEffect } from "react";
import { Container } from "./styles";
import Button from "@mui/material/Button";
import LocalContext from "../../../pages/user-location/Context";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import GrayLine from "../../styled-components/gray-line";
import InputPhotos from "../../images-input";
import { FormGroup } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { api } from "../../../services/api";
import { fetchLocation } from "../../../services/GoogleMaps";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Circle } from "@react-google-maps/api";

const SolidaryDisposal = (props) => {
	const [formValues, setFormValues] = useContext(LocalContext);
	const [approximateLocation, setApproximateLocation] = useState(false);
	const [Location, setLocation] = useState(!approximateLocation);
	const [houseNumber, setHouseNumber] = useState();
	const [street, setStreet] = useState("");
	const [referencePoint, setReferencePoint] = useState("");
	const [description, setDescription] = useState("");
	const [district, setDistrict] = useState("");
	const [donationType, setDonationType] = useState({
		roupas: false,
		eletro: false,
		moveis: false,
		outros: false,
	});

	const handleDonationTypeChange = (event) => {
		const { name, checked } = event.target;
		setDonationType({
			...donationType,
			[name]: checked,
		});
	};

	const containerStyle = {
		width: "100%",
		height: "500px",
	};
	const [center, setCenter] = useState({ lat: 0, lng: 0 });
	useEffect(() => {
		navigator.geolocation.getCurrentPosition((location) => {
			fetchLocation(
				location.coords.latitude,
				location.coords.longitude
			).then((data) => {
				console.log("localizacao abaixo");
				console.log(data);
			});
			setCenter({
				lat: location.coords.latitude,
				lng: location.coords.longitude,
			});
		});
	}, []); // Esse useEffect faz com que isto aqui seja executado somente uma vez // //DENTRO DESTE TEM A API DO GEOCODE, DE JEITO NENHUM CRIE UM LOOP NESTE USEEFFECT
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: process.env.REACT_APP_GOOGLEMAPSAPIKEY,
	});
	const [map, setMap] = useState(null);
	const options = {
		strokeColor: "#FF0000",
		strokeOpacity: 1,
		strokeWeight: 1.5,
		fillColor: "#FF0000",
		fillOpacity: 0.25,
		clickable: false,
		draggable: false,
		editable: false,
		visible: true,
		radius: 100,
		zIndex: 1,
	};
	const onLoad = (circle) => {
		console.log("Circle onLoad circle: ", circle);
	};
	const onUnmount = (circle) => {
		console.log("Circle onUnmount circle: ", circle);
	};

	return (
		<Container>
			<div className="centered-content">
				<Button
					fullWidth
					variant="outlined"
					onClick={() => {
						setApproximateLocation(true);
						setLocation(false);
					}}
				>
					Usar Localização Aproximada
				</Button>
			</div>
			{approximateLocation && (
				<>
					<div className="centered-content">
						<GoogleMap
							mapContainerStyle={containerStyle}
							center={center}
							radius={100}
							zoom={15}
							onLoad={onLoad}
							onUnmount={onUnmount}
						>
							<Circle
								// optional
								onLoad={onLoad}
								// optional
								onUnmount={onUnmount}
								// required
								center={center}
								// required
								options={options}
							/>
							<></>
						</GoogleMap>
					</div>

					<div className="inputs">
						<Stack spacing={2} direction="row">
							<TextField
								fullWidth
								id="outlined-basic"
								label="Número"
								type="number"
								variant="outlined"
								value={houseNumber}
								onChange={(e) => setHouseNumber(e.target.value)}
							/>
							<TextField
								fullWidth
								id="outlined-basic"
								label="Ponto de Referência (opcional)"
								variant="outlined"
								value={referencePoint}
								onChange={(e) =>
									setReferencePoint(e.target.value)
								}
							/>
						</Stack>
						<br />
						<Typography variant="body2">
							Caso o endereço desejado não se encontre dentro do
							círculo vermelho no mapa, por favor, insira o
							endereço manualmente após apertar o botão abaixo.
						</Typography>
					</div>
				</>
			)}
			<br />
			<div className="centered-content">
				<Typography variant="body1">Ou, caso preferir</Typography>
			</div>

			<br />
			<div className="centered-content">
				<Button
					fullWidth
					variant="outlined"
					onClick={() => {
						setApproximateLocation(false);
						setLocation(true);
					}}
				>
					Insira a exata localização manualmente
				</Button>
			</div>
			<br />
			{Location && (
				<div className="inputs">
					<Stack spacing={2} direction="row">
						<TextField
							fullWidth
							id="outlined-basic"
							label="Rua"
							variant="outlined"
							value={street}
							onChange={(e) => setStreet(e.target.value)}
						/>
					</Stack>
					<br />
					<Stack spacing={2} direction="row">
						<TextField
							fullWidth
							id="outlined-basic"
							label="Bairro"
							variant="outlined"
							value={district}
							onChange={(e) => setDistrict(e.target.value)}
						/>
						<TextField
							fullWidth
							id="outlined-basic"
							label="Número"
							type="number"
							variant="outlined"
							value={houseNumber}
							onChange={(e) => setHouseNumber(e.target.value)}
						/>
					</Stack>
					<br />
					<Stack spacing={2} direction="row">
						<TextField
							fullWidth
							id="outlined-basic"
							label="Ponto de Referência (opcional)"
							variant="outlined"
							value={referencePoint}
							onChange={(e) => setReferencePoint(e.target.value)}
						/>
					</Stack>
				</div>
			)}
			<GrayLine />
			<div
				className="centered-content"
				style={{ flexDirection: "column" }}
			>
				<Typography variant="h5">Tipo de Doação</Typography>
				<br />
				<FormGroup>
					<FormControlLabel
						label="Roupas/Calçados"
						control={
							<Checkbox
								name="roupas"
								checked={donationType.roupas}
								onChange={handleDonationTypeChange}
								inputProps={{ "aria-label": "controlled" }}
							/>
						}
					/>

					<FormControlLabel
						label="Eletrodomésticos"
						control={
							<Checkbox
								name="eletro"
								checked={donationType.eletro}
								onChange={handleDonationTypeChange}
								inputProps={{ "aria-label": "controlled" }}
							/>
						}
					/>
					<FormControlLabel
						label="Móveis"
						control={
							<Checkbox
								name="moveis"
								checked={donationType.moveis}
								onChange={handleDonationTypeChange}
								inputProps={{ "aria-label": "controlled" }}
							/>
						}
					/>
					<FormControlLabel
						label="Outros"
						control={
							<Checkbox
								name="outros"
								checked={donationType.outros}
								onChange={handleDonationTypeChange}
								inputProps={{ "aria-label": "controlled" }}
							/>
						}
					/>
				</FormGroup>
			</div>
			<div className="inputs">
				<Stack spacing={2} direction="row">
					<TextField
						fullWidth
						id="outlined-basic"
						label="Descrição"
						variant="outlined"
						multiline
						rows={5}
						value={description}
						helperText={props.descriptionHelperText}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</Stack>
			</div>
			<br />
			<InputPhotos />
			<br />
			<div className="inputs">
				<Button fullWidth variant="contained">
					Enviar
				</Button>
			</div>
		</Container>
	);
};

export default SolidaryDisposal;
