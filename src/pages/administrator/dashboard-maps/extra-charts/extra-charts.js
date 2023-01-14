import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { MapContainer } from "../../styles";
import Button from "@mui/material/Button";
import LocalContext from "../../../user-location/Context";
import Dashboard2 from "./index";

const ExtraDashboard = () => {
	const [formValues, setFormValues] = useContext(LocalContext);
	const [approximateLocation, setApproximateLocation] = useState(false);
	const [Location, setLocation] = useState(!approximateLocation);

	return (
		<MapContainer style = {{ padding: "0", overflowY: "auto", overflowX: "hidden" }}>
			<div className="centered-content">
				<Button
                    style = {{ marginLeft: "-6.5vw" }}
					variant="outlined"
					onClick={() => {
						setApproximateLocation(true);
						setLocation(false);
					}}
				>
					Ver gráficos individuais
				</Button>
			</div>
			{approximateLocation && (
				<div className="centered-content">
					<Dashboard2 />
				</div>
			)}
			<br />
		</MapContainer>
	);
};

export default ExtraDashboard;