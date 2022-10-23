import { useState, useContext, useEffect } from "react";
import { Container } from "./styles";
import Button from "@mui/material/Button";
import LocalContext from "../../../pages/user-location/Context";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import GrayLine from "../../styled-components/gray-line";
import InputPhotos from "../../images-input";
import { api } from "../../../services/api";
import { fetchLocation } from "../../../services/GoogleMaps";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Circle } from "@react-google-maps/api";
import { Context } from "../../../context/Auth/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ServiceOrderInformation = (props) => {
	const { user } = useContext(Context);
	const { srcaddress, phoneOption } = props;
	const [formValues, setFormValues] = useContext(LocalContext);
	const [approximateLocation, setApproximateLocation] = useState(false);
	const [Location, setLocation] = useState(!approximateLocation);
	const [houseNumber, setHouseNumber] = useState(0);
	const [street, setStreet] = useState("");
	const [referencePoint, setReferencePoint] = useState("");
	const [description, setDescription] = useState("");
	const [district, setDistrict] = useState("");
	const [mobilePhone, setMobilePhone] = useState("");
	const [photos, setPhotos] = useState([]);

	const containerStyle = {
		width: "100%",
		height: "500px",
	};
	const [center, setCenter] = useState({ lat: 0, lng: 0 });
	useEffect(() => {
		navigator.geolocation.getCurrentPosition((location) => {
			/*fetchLocation(
				location.coords.latitude,
				location.coords.longitude
			).then((data) => {
				console.log("localizacao abaixo");
				console.log(data);
			});*/
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

	const handleSubmit = (event) => {
		//alert("Um nome foi enviado: " + this.state.value);
		event.preventDefault();

		const data = JSON.parse(localStorage.getItem("locationLocalStorage"));

		//console.log("foi enviado para:");
		//console.log(`http://localhost:4000/api${srcaddress}`);
		console.log("cityid " + data.city);
		console.log("street " + street);
		console.log("streetNumber " + houseNumber);
		console.log("referencePoint " + referencePoint);
		console.log("description " + description);

		let uid = user.userId;
		if (uid === undefined) {
			uid = -1;
		}
		let referencePointAux = referencePoint;
		if (referencePointAux === "") {
			referencePointAux = "Sem ponto de referência"; //dad NAO obrigatorio
		}

		if (approximateLocation) {
			//caso a pessoa tenha escolhido mandar com a localizacao aproximada
			if (houseNumber === 0) {
				toast.error("É obrigatório enviar o número", {
					position: toast.POSITION.TOP_RIGHT,
				});
				return;
			}
			if (street === "") {
				//tenho que pegar a rua usando o geocode
				fetchLocation(center.lat, center.lng).then((data) => {
					console.log("localizacao abaixo");
					console.log(data.results[0].address_components);
					let parts = data.results[0].address_components;
					parts.forEach((part) => {
						if (part.types.includes("route")) {
							setStreet(part.long_name);
							console.log("RUA: " + part.long_name);
						}
						if (
							part.types.includes(
								"political",
								"sublocality",
								"sublocality_level_1"
							)
						) {
							setDistrict(part.long_name);
							console.log("Bairro: " + part.long_name);
						}
					});
				});
			}
			const endereco = `${street}, ${district}`;
			if (district !== "") {
				setStreet(endereco);
			}

			if (description === "") {
				toast.error("É obrigatório enviar o número", {
					position: toast.POSITION.TOP_RIGHT,
				});
				return;
			}
			const res = api
				.post(srcaddress, {
					data: {
						/*coloque aqui os dados que quer mandar na requisicao */
						cityId: data.city,
						userId: uid,
						street: endereco,
						streetNumber: houseNumber,
						referencePoint: referencePointAux,
						latitude: center.lat,
						longitude: center.lng,
						description: description,
						images: photos,
					},
				})
				.then((response) => {
					console.log(response);
					toast.success("Formulário enviado com sucesso", {
						position: toast.POSITION.TOP_RIGHT,
					});
				})
				.catch((e) => {
					console.log(e);
					if (e.response.status === 404) {
						toast.error(
							"Erro 404 ocorreu, servidor não pôde ser encontrado!",
							{
								position: toast.POSITION.TOP_RIGHT,
							}
						);
					}
				});
		} else {
			if (houseNumber === 0) {
				toast.error("É obrigatório enviar o número", {
					position: toast.POSITION.TOP_RIGHT,
				});
				return;
			}
			if (street === "") {
				toast.error("É obrigatório enviar o nome da rua", {
					position: toast.POSITION.TOP_RIGHT,
				});
				return;
			}
			if (description === "") {
				toast.error("É necessário ter uma descrição", {
					position: toast.POSITION.TOP_RIGHT,
				});
				return;
			}
			const endereco = `${street}, ${district}`;

			const res = api
				.post(srcaddress, {
					data: {
						/*coloque aqui os dados que quer mandar na requisicao */
						cityId: data.city,
						userId: uid,
						street: endereco,
						streetNumber: houseNumber,
						referencePoint: referencePointAux,
						latitude: -1, //mando menos 1 jah que nao foi usado o bang pra pegar a localizacao automaticamente
						longitude: -1, //mando menos 1 jah que nao foi usado o bang pra pegar a localizacao automaticamente
						description: description,
						images: photos,
					},
				})
				.then((response) => {
					console.log(response);

					setPhotos([]);
					setDescription("");
					setReferencePoint("");
					setStreet("");
					setHouseNumber(0);
					setDistrict("");
					toast.success("Formulário enviado com sucesso", {
						position: toast.POSITION.TOP_RIGHT,
					});
				})
				.catch((e) => {
					console.log(e);
					if (e.response.status === 404) {
						toast.error(
							"Erro 404 ocorreu, servidor não pôde ser encontrado!",
							{
								position: toast.POSITION.TOP_RIGHT,
							}
						);
					}
				});
		}
	};

	console.log(photos);

	return (
		<Container>
			<ToastContainer autoClose={5000} hideProgressBar={true} />
			<form onSubmit={handleSubmit}>
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
				{approximateLocation && isLoaded && (
					<>
						<div className="centered-content">
							(
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
							)
						</div>

						<div className="inputs">
							<Stack spacing={2} direction="row">
								<TextField
									name="numero"
									fullWidth
									id="outlined-basic"
									label="Número da Casa"
									type="number"
									variant="outlined"
									value={houseNumber}
									onChange={(e) =>
										setHouseNumber(e.target.value)
									}
								/>
								<TextField
									name="referencia"
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
								Caso o endereço desejado não se encontre dentro
								do círculo vermelho no mapa, por favor, insira o
								endereço manualmente após apertar o botão
								abaixo.
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
								name="rua"
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
								name="bairro"
								fullWidth
								id="outlined-basic"
								label="Bairro"
								variant="outlined"
								value={district}
								onChange={(e) => setDistrict(e.target.value)}
							/>
							<TextField
								name="numero2"
								fullWidth
								id="outlined-basic"
								label="Número da Casa"
								type="number"
								variant="outlined"
								value={houseNumber}
								onChange={(e) => setHouseNumber(e.target.value)}
							/>
						</Stack>
						<br />
						<Stack spacing={2} direction="row">
							<TextField
								name="referencia2"
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
					</div>
				)}
				<GrayLine />
				<div className="inputs">
					{phoneOption && (
						<Stack spacing={1} direction="row">
							<TextField
								name="phone"
								type="number"
								id="outlined-basic"
								label="Número de Telefone"
								variant="outlined"
								multiline
								rows={1}
								value={mobilePhone}
								onChange={(e) => setMobilePhone(e.target.value)}
							/>
						</Stack>
					)}
					<br />
					<Stack spacing={2} direction="row">
						<TextField
							name="descricao"
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

				<InputPhotos photos={photos} setPhotos={setPhotos} />

				<br />
				<div className="inputs">
					<Button
						fullWidth
						variant="contained"
						type="submit"
						value="Enviar"
					>
						Enviar
					</Button>
				</div>
			</form>
		</Container>
	);
};

export default ServiceOrderInformation;
