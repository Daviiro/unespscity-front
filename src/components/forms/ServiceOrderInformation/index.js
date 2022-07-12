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

const ServiceOrderInformation = (props) => {
	const [formValues, setFormValues] = useContext(LocalContext);
	const [approximateLocation, setApproximateLocation] = useState(false);
	const [Location, setLocation] = useState(!approximateLocation);
	const [houseNumber, setHouseNumber] = useState();
	const [street, setStreet] = useState();
	const [referencePoint, setReferencePoint] = useState();
	const [description, setDescription] = useState();
	const [district, setDistrict] = useState();

	const handleHouseNumberChange = (event) => {
		setHouseNumber(event.target.value);
	};
	const handleReferencePointChange = (event) => {
		setReferencePoint(event.target.value);
	};
	const handleStreetChange = (event) => {
		setStreet(event.target.value);
	};
	const handleDescriptionChange = (event) => {
		setDescription(event.target.value);
	};
	const handleDistrictChange = (event) => {
		setDistrict(event.target.value);
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
							onChange={handleStreetChange}
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
							onChange={handleDistrictChange}
						/>
						<TextField
							fullWidth
							id="outlined-basic"
							label="Número"
							type="number"
							variant="outlined"
							value={houseNumber}
							onChange={handleHouseNumberChange}
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
							onChange={handleReferencePointChange}
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
						label="Descrição"
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
