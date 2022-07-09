const BASE_URL = "https://servicodados.ibge.gov.br/api/v1";

const responseToJson = (response) => response.json();

export const fetchStates = () => {
	/*const url = `${BASE_URL}/localidades/estados`;*/
	const url = `${BASE_URL}/localidades/estados`;
	return fetch(url, { cache: "force-cache" }).then(responseToJson);
};

export const fetchCitiesForState = (state) => {
	if (!state) return Promise.resolve([]);
	/*const url = `${BASE_URL}/localidades/estados/${state}/municipios`;*/
	const url = `${BASE_URL}/localidades/estados/SP/municipios`; // limitei para cidades do estado de SP
	return fetch(url, { cache: "force-cache" }).then(responseToJson);
};

export const fetchCityForID = (id) => {
	if (!id) return Promise.resolve([]);
	const url = `${BASE_URL}/localidades/municipios/${id}`;
	return fetch(url)
		.then(responseToJson)
		.then((responseJson) => {
			return responseJson.nome;
		});
};

export const parseStates = (states) => {
	const data = states
		.map((state) => {
			return { label: state.nome, value: state.sigla };
		})
		.sort((a, b) => {
			return a.label.localeCompare(b.label);
		});

	const defaultOption = { label: "Selecione seu estado...", value: "" };

	return [defaultOption, ...data];
};

export const parseCities = (cities) => {
	const data = cities
		.map((city) => {
			return { label: city.nome, value: city.id };
		})
		.sort((a, b) => {
			return a.label.localeCompare(b.label);
		});

	const defaultOption = { label: "Selecione sua cidade...", value: "" };
	return [defaultOption, ...data];
};
