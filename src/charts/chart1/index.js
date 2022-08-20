import React from "react";
import { ContainerRow, Card, GrayLine } from "./styles";
// import { api } from "../../services/api";

const DashboardChart1 = () => {
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
	}, [ ]);	*/

	return (
		<>
			<h4 style = {{ marginTop: "5vh", marginLeft: "2.75vw" }}> Novas Solicitações de Serviços: </h4>
			<ContainerRow>
				<Card>
					<img src="/assets/img/home_conservacao_urbana.png" alt="Conservação Urbana"/>
					<GrayLine />
					<h5> 16 </h5>
				{/*	{
						problems.map((problem) => (problem.type === "urban-conservation") (
							<h5> {problem.totalSolicitados} </h5>
						))
					}	*/}
				</Card>
				<Card>
					<img src="/assets/img/home_conservacao_rural.png" alt="Conservação Rural/Áreas Verdes" />
					<GrayLine />
					<h5> 7 </h5>
				{/*	{
						problems.map((problem) => (problem.type === "rural-green-areas-conservation") (
							<h5> {problem.totalSolicitados} </h5>
						))
					}	*/}
				</Card>
				<Card>
					<img src="/assets/img/home_remocao_detritos.png" alt="Remoção de Detritos" />
					<GrayLine />
					<h5> 8 </h5>
				{/*	{
						problems.map((problem) => (problem.type === "road-maintenance") (
							<h5> {problem.totalSolicitados} </h5>
						))
					}	*/}
				</Card>
				<Card>
					<img src="/assets/img/home_vigilancia_sanitaria.png" alt="Vigilância Sanitária"/>
					<GrayLine />
					<h5> 13 </h5>
				{/*	{
						problems.map((problem) => (problem.type === "sanitary-surveillance") (
							<h5> {problem.totalSolicitados} </h5>
						))
					}	*/}
				</Card>
				<Card>
					<img src="/assets/img/home_controle_pragas.png" alt="Controle de Pragas" />
					<GrayLine />
					<h5> 20 </h5>
				{/*	{
						problems.map((problem) => (problem.type === "pest-control") (
							<h5> {problem.totalSolicitados} </h5>
						))
					}	*/}
				</Card>
				<Card>
					<img src="/assets/img/home_animais_domesticos.png" alt="Animais Domésticos" />
					<GrayLine />
					<h5> 25 </h5>
				{/*	{
						problems.map((problem) => (problem.type === "domestic-animals") (
							<h5> {problem.totalSolicitados} </h5>
						))
					}	*/}
				</Card>
				<Card>
					<img src="/assets/img/home_meio_ambiente.png" alt="Meio Ambiente" />
					<GrayLine />
					<h5> 1 </h5>
				{/*	{
						problems.map((problem) => (problem.type === "environment") (
							<h5> {problem.totalSolicitados} </h5>
						))
					}	*/}
				</Card>
				<Card>
					<img src="/assets/img/home_fauna_flora.png" alt="Fauna e Flora" />
					<GrayLine />
					<h5> 10 </h5>
				{/*	{
						problems.map((problem) => (problem.type === "fauna-flora") (
							<h5> {problem.totalSolicitados} </h5>
						))
					}	*/}
				</Card>
				<Card>
					<img src="/assets/img/home_assistencia_social.png" alt="Assistência Social" />
					<GrayLine />
					<h5> 5 </h5>
				{/*	{
						problems.map((problem) => (problem.type === "social-care") (
							<h5> {problem.totalSolicitados} </h5>
						))
					}	*/}
				</Card>
				<Card>
					<img src="/assets/img/home_familias_carentes.png" alt="Famílias Carentes" />
					<GrayLine />
					<h5> 2 </h5>
				{/*	{
						problems.map((problem) => (problem.type === "needy-families") (
							<h5> {problem.totalSolicitados} </h5>
						))
					}	*/}
				</Card>
			</ContainerRow>
			<GrayLine style = {{ marginTop: "7vh" }}/>
		</>
	);
};

export default DashboardChart1;
