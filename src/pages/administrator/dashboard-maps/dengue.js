import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { MapContainer } from "../styles";
import Button from "@mui/material/Button";
import LocalContext from "../../user-location/Context";
import MapPageDengue from "../../../services/map-pages/dengue";

const DengueDashboard = () => {
	const [formValues, setFormValues] = useContext(LocalContext);
	const [approximateLocation, setApproximateLocation] = useState(false);
	const [Location, setLocation] = useState(!approximateLocation);

	return (
		<MapContainer>
			<div className="centered-content">
				<Button
					variant="contained"
					onClick={() => {
						setApproximateLocation(true);
						setLocation(false);
					}}
				>
					Mapa de Dengue:
				</Button>
			</div>
			<div className="centered-content">
				<Link to = "/admin/radar_da_dengue" style={{ textDecoration: "none", color: "#1b262c" }}>
					Editar
				</Link>
			</div>
			{approximateLocation && (
				<div className="centered-content">
					<MapPageDengue />
				</div>
			)}
			<br />
		</MapContainer>
	);
};

export default DengueDashboard;