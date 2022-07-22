import { useState, useContext } from "react";
import { Container } from "../../../../components/forms/ServiceOrderInformation/styles";
import Button from "@mui/material/Button";
import LocalContext from "../../../user-location/Context";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import Map from "../../../../components/forms/ServiceOrderInformation/Map";
import GrayLine from "../../../../components/styled-components/gray-line";
import InputPhotos from "../../../../components/images-input";

const ServiceOrderInformation = (props) => {
	const [formValues, setFormValues] = useContext(LocalContext);
	const [approximateLocation, setApproximateLocation] = useState(false);
	const [Location, setLocation] = useState(!approximateLocation);
	const [houseNumber, setHouseNumber] = useState();
	const [time, setTime] = useState();
	const [location, set_Location] = useState();
	const [referencePoint, setReferencePoint] = useState();
	const [description, setDescription] = useState();

	const handleHouseNumberChange = (event) => {
		setHouseNumber(event.target.value);
	};
	const handleReferencePointChange = (event) => {
		setReferencePoint(event.target.value);
	};
	const handleTimeChange = (event) => {
		setTime(event.target.value);
	};
	const handleDescriptionChange = (event) => {
		setDescription(event.target.value);
	};
	const handleLocationChange = (event) => {
		set_Location(event.target.value);
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
						<Map />
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
								onChange={handleHouseNumberChange}
							/>
							<TextField
								fullWidth
								id="outlined-basic"
								label="Ponto de Referência (opcional)"
								variant="outlined"
								value={referencePoint}
								onChange={handleReferencePointChange}
							/>
						</Stack>
						<br />
						<Typography variant="body2">
							Caso o local desejado não se encontre dentro do
							círculo vermelho no mapa, por favor, insira o
							local manualmente após apertar o botão abaixo.
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
							label="Última vez que seu animal foi visto:"
							variant="outlined"
							value={time}
							helperText="data e hora, se possível lembrar."
							onChange={handleTimeChange}
						/>
					</Stack>
					<br />
					<Stack spacing={2} direction="row">
						<TextField
							fullWidth
							id="outlined-basic"
							label="Último local em que seu animal foi visto:"
							variant="outlined"
							value={location}
							helperText="pontos de referência, endereço, o que for possível..."
							onChange={handleLocationChange}
						/>
					</Stack>
				</div>
			)}
			<GrayLine />
			<div className="inputs">
				<Stack spacing={2} direction="row">
					<TextField
						fullWidth
						id="outlined-basic"
						label="Descrição do animal:"
						variant="outlined"
						multiline
						rows={5}
						value={description}
						helperText={props.descriptionHelperText}
						onChange={handleDescriptionChange}
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

export default ServiceOrderInformation;
