import { useEffect, useState } from "react";
import { fetchStates, parseStates } from "../../../services/IBGE";
import Dropdown from "../Dropdown";

const DropdownBrazilianStates = ({ id, name, onChange = () => {} }) => {
	const [states, setStates] = useState([]);

	useEffect(() => {
		setStates([{ label: "Carregando...", value: "" }]);
		fetchStates()
			.then(parseStates)
			.then((states) => {
				setStates(states);
			});
	}, []);

	return <Dropdown id={id} name={name} data={states} onChange={onChange} />;
};
export default DropdownBrazilianStates;
