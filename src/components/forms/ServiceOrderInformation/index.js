import { useState, useContext } from "react";
import { Container } from "./styles";
import Button from "@mui/material/Button";
import LocalContext from "../../../pages/user-location/Context";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import Map from "./Map";
import GrayLine from "../../styled-components/gray-line";
import InputPhotos from "../../images-input";
import axios from "axios";

const ServiceOrderInformation = (props) => {
	const { srcaddress } = props;
	const [formValues, setFormValues] = useContext(LocalContext);
	const [approximateLocation, setApproximateLocation] = useState(false);
	const [Location, setLocation] = useState(!approximateLocation);
	const [houseNumber, setHouseNumber] = useState(0);
	const [street, setStreet] = useState("");
	const [referencePoint, setReferencePoint] = useState("");
	const [description, setDescription] = useState("");
	const [district, setDistrict] = useState("");

	const handleSubmit = (event) => {
		//alert("Um nome foi enviado: " + this.state.value);
		//console.log("foi enviado para:");
		//onsole.log(`http://localhost:4000/api/${srcaddress}`);
		//console.log("cityid " + formValues.city);
		//console.log("street " + street);
		//console.log("streetNumber " + houseNumber);
		//console.log("referencePoint " + referencePoint);
		//console.log("description " + description);

		/*
		axios
			.post(`http://localhost:4000/api/${srcaddress}`, {
				headers: {
					"Content-Type": "multipart/form-data; charset=UTF-8",
					Accept: "Token",
					"Access-Control-Allow-Origin": "*",
				},
				data: formData,
			})
			.then((res) => {
				console.log("form foi enviado: " + res.data);
			});
			

		
		const config = { headers: { "Content-Type": "multipart/form-data" } };
		axios
			.post(`http://localhost:4000/api/${srcaddress}`, formData, config)
			.then((response) => console.log(response))
			.catch((errors) => console.log(errors));*/

		const res = axios
			.post(`http://localhost:4000/api/upload/${srcaddress}`, {
				headers: {
					"Content-Type": "application/json; charset=UTF-8",
					Accept: "Token",
					"Access-Control-Allow-Origin": "*",
				},
				data: {
					/*coloque aqui os dados que quer mandar na requisicao */
				},
			})
			.then((response) => console.log(response))
			.catch((e) => {
				console.log(e);
			});
		console.log(res);

		alert(`Forms foi enviado`);
		event.preventDefault();
	};

	return (
		<Container>
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
				{approximateLocation && (
					<>
						<div className="centered-content">
							<Map />
						</div>

						<div className="inputs">
							<Stack spacing={2} direction="row">
								<TextField
									name="numero"
									fullWidth
									id="outlined-basic"
									label="Número"
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

				<InputPhotos />

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
