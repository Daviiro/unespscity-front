import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { MapContainer } from "../styles";
import Button from "@mui/material/Button";
import LocalContext from "../../user-location/Context";
import MapPageUsefulLocations from "../../../services/map-pages/locais_uteis";

const UsefulLocationsDashboard = () => {
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
					Mapa de Locais Úteis:
				</Button>
			</div>
			<div className="centered-content">
				<Link to = "/admin/locais_uteis" style={{ textDecoration: "none", color: "#1b262c" }}>
					Editar
				</Link>
			</div>
			{approximateLocation && (
				<div className="centered-content">
					<MapPageUsefulLocations />
				</div>
			)}
			<br />
		</MapContainer>
	);
};

export default UsefulLocationsDashboard;