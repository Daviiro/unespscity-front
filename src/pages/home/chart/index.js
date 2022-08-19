import React from "react";
import ProgressBar from "../../../charts/types/progress";
import { ContainerRow } from "./styles";
// Dada a lista de problemas resolvidos para cada categoria (Conservação Urbana,
const ChartHome = () => {
	// Administração Pública...), maxValue deve receber o número de problemas resolvidos
	const maxValue = 24; // da categoria com mais problemas resolvidos //
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
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_conservacao_rural.png"
					alt="Conservação Rural/Áreas Verdes"
				/>
				<ProgressBar value={17} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_remocao_detritos.png"
					alt="Remoção de Detritos"
				/>
				<ProgressBar value={8} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_vigilancia_sanitaria.png"
					alt="Vigilância Sanitária"
				/>
				<ProgressBar value={17} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_controle_pragas.png"
					alt="Controle de Pragas"
				/>
				<ProgressBar value={13} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_animais_domesticos.png"
					alt="Animais Domésticos"
				/>
				<ProgressBar value={24} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_meio_ambiente.png"
					alt="Meio Ambiente"
				/>
				<ProgressBar value={6} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_fauna_flora.png"
					alt="Fauna e Flora"
				/>
				<ProgressBar value={10} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_assistencia_social.png"
					alt="Assistência Social"
				/>
				<ProgressBar value={5} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_familias_carentes.png"
					alt="Famílias Carentes"
				/>
				<ProgressBar value={7} max={maxValue} />
			</ContainerRow>
		</>
	);
};

export default ChartHome;
