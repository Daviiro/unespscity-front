import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { MapContainer } from "../styles";
import Button from "@mui/material/Button";
import LocalContext from "../../user-location/Context";
import MapPageLeishmaniose from "../../../services/map-pages/leishmaniose";

const LeishmanioseDashboard = () => {
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
					Mapa de Leishmaniose:
				</Button>
			</div>
			<div className="centered-content">
				<Link to = "/admin/leishmaniose" style={{ textDecoration: "none", color: "#1b262c" }}>
					Editar
				</Link>
			</div>
			{approximateLocation && (
				<div className="centered-content">
					<MapPageLeishmaniose />
				</div>
			)}
			<br />
		</MapContainer>
	);
};

export default LeishmanioseDashboard;
