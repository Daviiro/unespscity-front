import React from "react";
import { Link } from "react-router-dom";
import { ContainerColumn, Card, ContainerColumn2 } from "./styles";

const DashboardChart2 = () => {
	return (
		<>
			<ContainerColumn>
				<h3> Novas Solicitações de Serviços: </h3>
				<Card>
					<img
						src="/assets/img/home_conservacao_urbana.png"
						alt="Conservação Urbana"
					/>
					<ContainerColumn2>
						<h4> Problemas para se resolver: 15 </h4>
						<h5> Conservação Urbana </h5>
					</ContainerColumn2>
				</Card>
				<Card>
					<img
						src="/assets/img/home_conservacao_rural.png"
						alt="Conservação Rural/Áreas Verdes"
					/>
					<ContainerColumn2>
						<h4> Problemas para se resolver: 30 </h4>
						<h5> Conservação Rural/Áreas Verdes </h5>
					</ContainerColumn2>
				</Card>
				<Card>
					<img
						src="/assets/img/home_remocao_detritos.png"
						alt="Remoção de Detritos"
					/>
					<ContainerColumn2>
						<h4> Problemas para se resolver: 25 </h4>
						<h5> Remoção de Detritos </h5>
					</ContainerColumn2>
				</Card>
				<Card>
					<img
						src="/assets/img/home_vigilancia_sanitaria.png"
						alt="Vigilância Sanitária"
					/>
					<ContainerColumn2>
						<h4> Problemas para se resolver: 9 </h4>
						<h5> Vigilância Sanitária </h5>
					</ContainerColumn2>
				</Card>
				<Card>
					<img
						src="/assets/img/home_controle_pragas.png"
						alt="Controle de Pragas"
					/>
					<ContainerColumn2>
						<h4> Problemas para se resolver: 11 </h4>
						<h5> Controle de Pragas </h5>
					</ContainerColumn2>
				</Card>
				<Card>
					<img
						src="/assets/img/home_animais_domesticos.png"
						alt="Animais Domésticos"
					/>
					<ContainerColumn2>
						<h4> Problemas para se resolver: 8 </h4>
						<h5> Animais Domésticos </h5>
					</ContainerColumn2>
				</Card>
				<Card>
					<img
						src="/assets/img/home_meio_ambiente.png"
						alt="Meio Ambiente"
					/>
					<ContainerColumn2>
						<h4> Problemas para se resolver: 33 </h4>
						<h5> Meio Ambiente </h5>
					</ContainerColumn2>
				</Card>
				<Card>
					<img
						src="/assets/img/home_fauna_flora.png"
						alt="Fauna e Flora"
					/>
					<ContainerColumn2>
						<h4> Problemas para se resolver: 26 </h4>
						<h5> Fauna e Flora </h5>
					</ContainerColumn2>
				</Card>
				<Card>
					<img
						src="/assets/img/home_assistencia_social.png"
						alt="Assistência Social"
					/>
					<ContainerColumn2>
						<h4> Problemas para se resolver: 4 </h4>
						<h5> Assistência Social </h5>
					</ContainerColumn2>
				</Card>
				<Card>
					<img
						src="/assets/img/home_familias_carentes.png"
						alt="Famílias Carentes"
					/>
					<ContainerColumn2>
						<h4> Problemas para se resolver: 32 </h4>
						<h5> Famílias Carentes </h5>
					</ContainerColumn2>
				</Card>
				<Card>
					<img
						src="/assets/img/home_servicos_sociais.png"
						alt="Serviços Sociais"
					/>
					<ContainerColumn2>
						<h4> Problemas para se resolver: 38 </h4>
						<h5> Serviços Sociais </h5>
					</ContainerColumn2>
				</Card>
				<Card>
					<img
						src="/assets/img/home_seguranca_defesa_civil.png"
						alt="Segurança e Defesa Civil"
					/>
					<ContainerColumn2>
						<h4> Problemas para se resolver: 39 </h4>
						<h5> Segurança e Defesa Civil </h5>
					</ContainerColumn2>
				</Card>
				<Card>
					<img
						src="/assets/img/home_botao_panico.png"
						alt="Botão do Pânico"
					/>
					<ContainerColumn2>
						<h4> Problemas para se resolver: 46 </h4>
						<h5> Botão do Pânico </h5>
					</ContainerColumn2>
				</Card>
				<Card>
					<img
						src="/assets/img/home_administracao_publica.png"
						alt="Administração Pública"
					/>
					<ContainerColumn2>
						<h4> Problemas para se resolver: 47 </h4>
						<h5> Administração Pública </h5>
					</ContainerColumn2>
				</Card>
				<Card>
					<img
						src="/assets/img/home_notificacao_comunicacao.png"
						alt="Notificação e Comunicação"
					/>
					<ContainerColumn2>
						<h4> Problemas para se resolver: 16 </h4>
						<h5> Notificação e Comunicação </h5>
					</ContainerColumn2>
				</Card>
				<Card>
					<img
						src="/assets/img/home_sensoriamento_movel_participativo.png"
						alt="Sensoriamento Móvel Participativo"
					/>
					<ContainerColumn2>
						<h4> Problemas para se resolver: 20 </h4>
						<h5> Sensoriamento Móvel Participativo </h5>
					</ContainerColumn2>
				</Card>
				<Card>
					<img
						src="/assets/img/home_assossiacao_comercial.png"
						alt="Assossiação Comercial"
					/>
					<ContainerColumn2>
						<h4> Problemas para se resolver: 7 </h4>
						<h5> Assossiação Comercial </h5>
					</ContainerColumn2>
				</Card>
			</ContainerColumn>
		</>
	);
};

export default DashboardChart2;
