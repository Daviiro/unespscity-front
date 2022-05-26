import React from "react";
import ProgressBar from "../../../../charts/Progress";
import { ContainerRow } from "./styles";
// Dada a lista de problemas resolvidos para cada categoria (Conservação Urbana,
const Chart1 = () => {
	// Administração Pública...), maxValue deve receber o número de problemas resolvidos
	const maxValue = 190; // da categoria com mais problemas resolvidos //
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
				<ProgressBar value={95} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_conservacao_rural.png"
					alt="Conservação Rural/Áreas Verdes"
				/>
				<ProgressBar value={21} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_remocao_detritos.png"
					alt="Remoção de Detritos"
				/>
				<ProgressBar value={180} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_vigilancia_sanitaria.png"
					alt="Vigilância Sanitária"
				/>
				<ProgressBar value={48} max={maxValue} />
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
				<ProgressBar value={80} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_meio_ambiente.png"
					alt="Meio Ambiente"
				/>
				<ProgressBar value={143} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_fauna_flora.png"
					alt="Fauna e Flora"
				/>
				<ProgressBar value={120} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_assistencia_social.png"
					alt="Assistência Social"
				/>
				<ProgressBar value={102} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_familias_carentes.png"
					alt="Famílias Carentes"
				/>
				<ProgressBar value={146} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_servicos_sociais.png"
					alt="Serviços Sociais"
				/>
				<ProgressBar value={53} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_seguranca_defesa_civil.png"
					alt="Segurança e Defesa Civil"
				/>
				<ProgressBar value={132} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_botao_panico.png"
					alt="Botão do Pânico"
				/>
				<ProgressBar value={190} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_administracao_publica.png"
					alt="Administração Pública"
				/>
				<ProgressBar value={50} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_notificacao_comunicacao.png"
					alt="Notificação e Comunicação"
				/>
				<ProgressBar value={134} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_sensoriamento_movel_participativo.png"
					alt="Sensoriamento Móvel Participativo"
				/>
				<ProgressBar value={54} max={maxValue} />
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_assossiacao_comercial.png"
					alt="Associação Comercial"
				/>
				<ProgressBar value={42} max={maxValue} />
			</ContainerRow>
		</>
	);
};

export default Chart1;
