import React from "react";
// import { api } from "../../../services/api";
import ProgressBar from "../../../charts/types/progress";
import { ContainerRow } from "./styles";

const ChartHome = () => {
/*	const [problems, setProblems] = useState([]);

	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get('/graficos_servicos');
				setProblems(data);
			}
			catch (e) {
				console.log(e);
			}
		}
		getProblems();
	}, []);

	problems.map((problem) => (problem.type === "urban-conservation") (
		maxValue = problem.totalResolvidos
	))	*/

	const maxValue = 24;
	return (
		<>
			<h3 style={{ marginTop: "0vh", marginBottom: "5.5vh" }}>
				{" "}
				Total de Problemas Resolvidos:{" "}
			</h3>
			<ContainerRow>
				<img
					src="/assets/img/home_conservacao_urbana.png"
					alt="Conservação Urbana"
				/>
				<ProgressBar value={24} max={maxValue} />
			{/*	{
					problems.map((problem) => (problem.type === "urban-conservation") (
						<ProgressBar value={problem.totalResolvidos} max={maxValue} />
					)) 
				}	*/}
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_conservacao_rural.png"
					alt="Conservação Rural/Áreas Verdes"
				/>
				<ProgressBar value={17} max={maxValue} />
			{/*	{
					problems.map((problem) => (problem.type === "rural-green-areas-conservation") (
						<ProgressBar value={problem.totalResolvidos} max={maxValue} />
					)) 
				}	*/}
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_remocao_detritos.png"
					alt="Remoção de Detritos"
				/>
				<ProgressBar value={8} max={maxValue} />
			{/*	{
					problems.map((problem) => (problem.type === "road-maintenance") (
						<ProgressBar value={problem.totalResolvidos} max={maxValue} />
					)) 
				}	*/}
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_vigilancia_sanitaria.png"
					alt="Vigilância Sanitária"
				/>
				<ProgressBar value={17} max={maxValue} />
			{/*	{
					problems.map((problem) => (problem.type === "sanitary-surveillance") (
						<ProgressBar value={problem.totalResolvidos} max={maxValue} />
					)) 
				}	*/}
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_controle_pragas.png"
					alt="Controle de Pragas"
				/>
				<ProgressBar value={13} max={maxValue} />
			{/*	{
					problems.map((problem) => (problem.type === "pest-control") (
						<ProgressBar value={problem.totalResolvidos} max={maxValue} />
					)) 
				}	*/}
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_animais_domesticos.png"
					alt="Animais Domésticos"
				/>
				<ProgressBar value={24} max={maxValue} />
			{/*	{
					problems.map((problem) => (problem.type === "domestic-animals") (
						<ProgressBar value={problem.totalResolvidos} max={maxValue} />
					)) 
				}	*/}
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_meio_ambiente.png"
					alt="Meio Ambiente"
				/>
				<ProgressBar value={6} max={maxValue} />
			{/*	{
					problems.map((problem) => (problem.type === "environment") (
						<ProgressBar value={problem.totalResolvidos} max={maxValue} />
					)) 
				}	*/}
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_fauna_flora.png"
					alt="Fauna e Flora"
				/>
				<ProgressBar value={10} max={maxValue} />
			{/*	{
					problems.map((problem) => (problem.type === "fauna-flora") (
						<ProgressBar value={problem.totalResolvidos} max={maxValue} />
					)) 
				}	*/}
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_assistencia_social.png"
					alt="Assistência Social"
				/>
				<ProgressBar value={5} max={maxValue} />
			{/*	{
					problems.map((problem) => (problem.type === "social-care") (
						<ProgressBar value={problem.totalResolvidos} max={maxValue} />
					)) 
				}	*/}
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_familias_carentes.png"
					alt="Famílias Carentes"
				/>
				<ProgressBar value={7} max={maxValue} />
			{/*	{
					problems.map((problem) => (problem.type === "needy-families") (
						<ProgressBar value={problem.totalResolvidos} max={maxValue} />
					)) 
				}	*/}
			</ContainerRow>
		</>
	);
};

export default ChartHome;
