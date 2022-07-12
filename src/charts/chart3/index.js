import React from "react";
import { ContainerRow, Card, GrayLine } from "./styles";

const DashboardChart3 = () => {
	return (
		<>
			<h4 style = {{ marginTop: "5vh", marginLeft: "2.75vw" }}> Novas Solicitações de Serviços: </h4>
			<ContainerRow>
				<Card>
					<img src="/assets/img/home_conservacao_urbana.png" alt="Conservação Urbana"/>
					<GrayLine />
					<h5> 15 </h5>
				</Card>
				<Card>
					<img src="/assets/img/home_conservacao_rural.png" alt="Conservação Rural/Áreas Verdes" />
					<GrayLine />
					<h5> 30 </h5>
				</Card>
				<Card>
					<img src="/assets/img/home_remocao_detritos.png" alt="Remoção de Detritos" />
					<GrayLine />
					<h5> 25 </h5>
				</Card>
				<Card>
					<img src="/assets/img/home_vigilancia_sanitaria.png" alt="Vigilância Sanitária"/>
					<GrayLine />
					<h5> 9 </h5>
				</Card>
				<Card>
					<img src="/assets/img/home_controle_pragas.png" alt="Controle de Pragas" />
					<GrayLine />
					<h5> 11 </h5>
				</Card>
				<Card>
					<img src="/assets/img/home_animais_domesticos.png" alt="Animais Domésticos" />
					<GrayLine />
					<h5> 8 </h5>
				</Card>
				<Card>
					<img src="/assets/img/home_meio_ambiente.png" alt="Meio Ambiente" />
					<GrayLine />
					<h5> 33 </h5>
				</Card>
				<Card>
					<img src="/assets/img/home_fauna_flora.png" alt="Fauna e Flora" />
					<GrayLine />
					<h5> 26 </h5>
				</Card>
				<Card>
					<img src="/assets/img/home_assistencia_social.png" alt="Assistência Social" />
					<GrayLine />
					<h5> 4 </h5>
				</Card>
				<Card>
					<img src="/assets/img/home_familias_carentes.png" alt="Famílias Carentes" />
					<GrayLine />
					<h5> 32 </h5>
				</Card>
				<Card>
					<img src="/assets/img/home_servicos_sociais.png" alt="Serviços Sociais" />
					<GrayLine />
					<h5> 38 </h5>
				</Card>
				<Card>
					<img src="/assets/img/home_seguranca_defesa_civil.png" alt="Segurança e Defesa Civil" />
					<GrayLine />
					<h5> 39 </h5>
				</Card>
				<Card>
					<img src="/assets/img/home_botao_panico.png" alt="Botão do Pânico" />
					<GrayLine />
					<h5> 46 </h5>
				</Card>
				<Card>
					<img src="/assets/img/home_administracao_publica.png" alt="Administração Pública" />
					<GrayLine />
					<h5> 47 </h5>
				</Card>
				<Card>
					<img src="/assets/img/home_notificacao_comunicacao.png" alt="Notificação e Comunicação" />
					<GrayLine />
					<h5> 16 </h5>
				</Card>
				<Card>
					<img src="/assets/img/home_sensoriamento_movel_participativo.png" alt="Sensoriamento Móvel Participativo" />
					<GrayLine />
					<h5> 20 </h5>
				</Card>
				<Card>
					<img src="/assets/img/home_assossiacao_comercial.png" alt="Assossiação Comercial" />
					<GrayLine />
					<h5> 7 </h5>
				</Card>
			</ContainerRow>
			<GrayLine style = {{ marginTop: "7vh" }}/>
		</>
	);
};

export default DashboardChart3;
