import React from "react";
import Footer from "../../components/footer";
import { ContainerBase, ContainerRow } from "./styles";
import Header from "../../components/header";
import Card from "./card";

const Home = () => {
	return (
		<>
			<ContainerBase>
				<Header />
				<ContainerRow>
					<Card
						source="/assets/img/home_conservacao_urbana.png"
						titulo="Conservação Urbana"
					/>
					<Card
						source="/assets/img/home_conservacao_rural.png"
						titulo="Conservação Rural/Áreas Verdes"
					/>
					<Card
						source="/assets/img/home_remocao_detritos.png"
						titulo="Remoção de Detritos"
					/>
					<Card
						source="/assets/img/home_vigilancia_sanitaria.png"
						titulo="Vigilância Sanitária"
					/>
					<Card
						source="/assets/img/home_controle_pragas.png"
						titulo="Controle de Pragas"
					/>
				</ContainerRow>
				<ContainerRow>
					<Card
						source="/assets/img/home_animais_domesticos.png"
						titulo="Animais Domésticos"
					/>
					<Card
						source="/assets/img/home_meio_ambiente.png"
						titulo="Meio Ambiente"
					/>
					<Card
						source="/assets/img/home_fauna_flora.png"
						titulo="Fauna e Flora"
					/>
					<Card
						source="/assets/img/home_assistencia_social.png"
						titulo="Assistência Social"
					/>
					<Card
						source="/assets/img/home_familias_carentes.png"
						titulo="Famílias Carentes"
					/>
				</ContainerRow>
				<ContainerRow>
					<Card
						source="/assets/img/home_servicos_sociais.png"
						titulo="Serviços Sociais"
					/>
					<Card
						source="/assets/img/home_seguranca_defesa_civil.png"
						titulo="Segurança e Defesa Civil"
					/>
					<Card
						source="/assets/img/home_botao_panico.png"
						titulo="Botão do Pânico"
					/>
					<Card
						source="/assets/img/home_administracao_publica.png"
						titulo="Administração Pública"
					/>
					<Card
						source="/assets/img/home_notificacao_comunicacao.png"
						titulo="Central de Notificação e Comunicação"
					/>
				</ContainerRow>
				<ContainerRow>
					<Card
						source="/assets/img/home_sensoriamento_movel_participativo.png"
						titulo="Sensoriamento Móvel Participativo"
					/>
					<Card
						source="/assets/img/home_assossiacao_comercial.png"
						titulo="Assossiação Comercial"
					/>
				</ContainerRow>
				<Footer />
			</ContainerBase>
		</>
	);
};
export default Home;
