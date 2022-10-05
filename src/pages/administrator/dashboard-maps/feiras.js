import { useState, useContext } from "react";
import { MapContainer } from "../styles";
import Button from "@mui/material/Button";
import LocalContext from "../../user-location/Context";
import MapPageFeiras from "../../../services/map-pages/feiras";

const FairsDashboard = () => {
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
					Mapa das Feiras Livres:
				</Button>
			</div>
			<div className="centered-content">
				<Link to = "/admin/feiras_livres" style={{ textDecoration: "none", color: "#1b262c" }}>
					Editar
				</Link>
			</div>
			{approximateLocation && (
				<div className="centered-content">
					<MapPageFeiras />
				</div>
			)}
			<br />
		</MapContainer>
	);
};

export default FairsDashboard;