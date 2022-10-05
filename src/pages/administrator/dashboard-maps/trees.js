import { useState, useContext } from "react";
import { MapContainer } from "../styles";
import Button from "@mui/material/Button";
import LocalContext from "../../user-location/Context";
import MapPageArvores from "../../../services/map-pages/arvores";

const TreesDashboard = () => {
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
					Mapa de Árvores:
				</Button>
			</div>
			<div className="centered-content">
				<Link to = "/admin/arvores" style={{ textDecoration: "none", color: "#1b262c" }}>
					Editar
				</Link>
			</div>
			{approximateLocation && (
				<div className="centered-content">
					<MapPageArvores />
				</div>
			)}
			<br />
		</MapContainer>
	);
};

export default TreesDashboard;