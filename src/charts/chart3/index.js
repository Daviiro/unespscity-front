import React from "react";
import { ContainerColumn, Card, GrayLine } from "./styles";

const DashboardChart3 = () => {
	return (
		<>
			<ContainerColumn>
				<h4> Novas Solicitações de Serviços: </h4>
				<Card>
					<img src="/assets/img/home_conservacao_urbana.png" alt="Conservação Urbana"/>
					<GrayLine />
					<h1> 15 </h1>
				</Card>
				<Card>
					<img src="/assets/img/home_conservacao_rural.png" alt="Conservação Rural/Áreas Verdes" />
					<GrayLine />
					<h1> 30 </h1>
				</Card>
				<Card>
					<img src="/assets/img/home_remocao_detritos.png" alt="Remoção de Detritos" />
					<GrayLine />
					<h1> 25 </h1>
				</Card>
				<Card>
					<img src="/assets/img/home_vigilancia_sanitaria.png" alt="Vigilância Sanitária"/>
					<GrayLine />
					<h1> 9 </h1>
				</Card>
				<Card>
					<img src="/assets/img/home_controle_pragas.png" alt="Controle de Pragas" />
					<GrayLine />
					<h1> 11 </h1>
				</Card>
				<Card>
					<img src="/assets/img/home_animais_domesticos.png" alt="Animais Domésticos" />
					<GrayLine />
					<h1> 8 </h1>
				</Card>
				<Card>
					<img src="/assets/img/home_meio_ambiente.png" alt="Meio Ambiente" />
					<GrayLine />
					<h1> 33 </h1>
				</Card>
				<Card>
					<img src="/assets/img/home_fauna_flora.png" alt="Fauna e Flora" />
					<GrayLine />
					<h1> 26 </h1>
				</Card>
				<Card>
					<img src="/assets/img/home_assistencia_social.png" alt="Assistência Social" />
					<GrayLine />
					<h1> 4 </h1>
				</Card>
				<Card>
					<img src="/assets/img/home_familias_carentes.png" alt="Famílias Carentes" />
					<GrayLine />
					<h1> 32 </h1>
				</Card>
				<Card>
					<img src="/assets/img/home_servicos_sociais.png" alt="Serviços Sociais" />
					<GrayLine />
					<h1> 38 </h1>
				</Card>
				<Card>
					<img src="/assets/img/home_seguranca_defesa_civil.png" alt="Segurança e Defesa Civil" />
					<GrayLine />
					<h1> 39 </h1>
				</Card>
				<Card>
					<img src="/assets/img/home_botao_panico.png" alt="Botão do Pânico" />
					<GrayLine />
					<h1> 46 </h1>
				</Card>
				<Card>
					<img src="/assets/img/home_administracao_publica.png" alt="Administração Pública" />
					<GrayLine />
					<h1> 47 </h1>
				</Card>
				<Card>
					<img src="/assets/img/home_notificacao_comunicacao.png" alt="Notificação e Comunicação" />
					<GrayLine />
					<h1> 16 </h1>
				</Card>
				<Card>
					<img src="/assets/img/home_sensoriamento_movel_participativo.png" alt="Sensoriamento Móvel Participativo" />
					<GrayLine />
					<h1> 20 </h1>
				</Card>
				<Card>
					<img src="/assets/img/home_assossiacao_comercial.png" alt="Assossiação Comercial" />
					<GrayLine />
					<h1> 7 </h1>
				</Card>
			</ContainerColumn>
		</>
	);
};

export default DashboardChart3;
