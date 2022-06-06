import React from "react";
import ProgressBar from "../../../charts/types/progress";
import { ContainerRow } from "./styles";
// Dada a lista de problemas resolvidos para cada categoria (Conservação Urbana,
const ChartHome = () => {
	// Administração Pública...), maxValue deve receber o número de problemas resolvidos
	const maxValue = 38; // da categoria com mais problemas resolvidos //
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
				<ProgressBar value={9} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_conservacao_rural.png"
					alt="Conservação Rural/Áreas Verdes"
				/>
				<ProgressBar value={33} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_remocao_detritos.png"
					alt="Remoção de Detritos"
				/>
				<ProgressBar value={35} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_vigilancia_sanitaria.png"
					alt="Vigilância Sanitária"
				/>
				<ProgressBar value={11} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_controle_pragas.png"
					alt="Controle de Pragas"
				/>
				<ProgressBar value={4} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_animais_domesticos.png"
					alt="Animais Domésticos"
				/>
				<ProgressBar value={25} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_meio_ambiente.png"
					alt="Meio Ambiente"
				/>
				<ProgressBar value={17} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_fauna_flora.png"
					alt="Fauna e Flora"
				/>
				<ProgressBar value={14} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_assistencia_social.png"
					alt="Assistência Social"
				/>
				<ProgressBar value={7} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_familias_carentes.png"
					alt="Famílias Carentes"
				/>
				<ProgressBar value={10} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_servicos_sociais.png"
					alt="Serviços Sociais"
				/>
				<ProgressBar value={12} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_seguranca_defesa_civil.png"
					alt="Segurança e Defesa Civil"
				/>
				<ProgressBar value={8} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_botao_panico.png"
					alt="Botão do Pânico"
				/>
				<ProgressBar value={30} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_administracao_publica.png"
					alt="Administração Pública"
				/>
				<ProgressBar value={36} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_notificacao_comunicacao.png"
					alt="Notificação e Comunicação"
				/>
				<ProgressBar value={16} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_sensoriamento_movel_participativo.png"
					alt="Sensoriamento Móvel Participativo"
				/>
				<ProgressBar value={38} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_assossiacao_comercial.png"
					alt="Associação Comercial"
				/>
				<ProgressBar value={6} max={maxValue} />
			</ContainerRow>
		</>
	);
};

export default ChartHome;
