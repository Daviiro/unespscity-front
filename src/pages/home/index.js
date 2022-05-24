import React from "react";
import { ContainerBase, Content, WrapContainer, GrayLine, ContainerRow } from "./styles";
import Header from "../../components/header";
import Card from "./card";
import Chart1 from "./charts/chart1";
import Chart2 from "./charts/chart2";
import Footer from "../../components/footer";

const Home = () => {
	return (
		<>
			<ContainerBase>
				<Header />
				<Content>
					<WrapContainer>
						<Card
							source="/assets/img/home_conservacao_urbana.png"
							titulo="Conservação Urbana"
							linkItems={[
								{
									id: 1,
									name: "Fiscalização de Instalações",
									link: "/fiscalizacao_de_instalacoes",
								},
								{
									id: 2,
									name: "Iluminação Pública",
									link: "/iluminacao_publica",
								},
								{
									id: 3,
									name: "Monumentos e Chafarizes",
									link: "/monumentos_e_chafarizes",
								},
								{
									id: 4,
									name: "Pavimentação",
									link: "/pavimentacao",
								},
								{
									id: 5,
									name: "Vias Públicas",
									link: "/vias_publicas",
								},
							]}
						/>
						<Card
							source="/assets/img/home_conservacao_rural.png"
							titulo="Conservação Rural/Áreas Verdes"
							linkItems={[
								{
									id: 1,
									name: "Parques",
									link: "/parques",
								},
								{
									id: 2,
									name: "Pontes em estradas rurais",
									link: "/pontes_em_estradas_rurais",
								},
								{
									id: 3,
									name: "Praças",
									link: "/pracas",
								},
							]}
						/>
						<Card
							source="/assets/img/home_remocao_detritos.png"
							titulo="Remoção de Detritos"
							linkItems={[
								{
									id: 1,
									name: "Animais Mortos",
									link: "/animais_mortos",
								},
							]}
						/>
						<Card
							source="/assets/img/home_vigilancia_sanitaria.png"
							titulo="Vigilância Sanitária"
							linkItems={[
								{
									id: 1,
									name: "Limpeza de Piscinas",
									link: "/limpeza_de_piscinas",
								},
								{
									id: 2,
									name: "Limpeza de Terreno",
									link: "/limpeza_de_terreno",
								},
								{
									id: 3,
									name: "Restaurantes/Ambientes Irregulares",
									link: "/restaurantes",
								},
							]}
						/>
						<Card
							source="/assets/img/home_controle_pragas.png"
							titulo="Controle de Pragas"
							linkItems={[
								{
									id: 1,
									name: "Foco de Escorpião",
									link: "/foco_de_escorpiao",
								},
								{
									id: 2,
									name: "Insetos Roedores e Caramujos",
									link: "/insetos_roedores_caramujos",
								},
								{
									id: 3,
									name: "Leishmaniose",
									link: "/leishmaniose",
								},
								{
									id: 4,
									name: "Radar da Dengue",
									link: "/radar_da_dengue",
								},
							]}
						/>

						<Card
							source="/assets/img/home_animais_domesticos.png"
							titulo="Animais Domésticos"
							linkItems={[
								{
									id: 1,
									name: "Animais Abandonados",
									link: "/animais_abandonados",
								},
							]}
						/>
						<Card
							source="/assets/img/home_meio_ambiente.png"
							titulo="Meio Ambiente"
							linkItems={[
								{
									id: 1,
									name: "",
									link: "/",
								},
							]}
						/>
						<Card
							source="/assets/img/home_fauna_flora.png"
							titulo="Fauna e Flora"
							linkItems={[
								{
									id: 1,
									name: "",
									link: "/",
								},
							]}
						/>
						<Card
							source="/assets/img/home_assistencia_social.png"
							titulo="Assistência Social"
							linkItems={[
								{
									id: 1,
									name: "Telefones Úteis",
									link: "/telefones_uteis",
								},
							]}
						/>
						<Card
							source="/assets/img/home_familias_carentes.png"
							titulo="Famílias Carentes"
							linkItems={[
								{
									id: 1,
									name: "",
									link: "/",
								},
							]}
						/>

						<Card
							source="/assets/img/home_servicos_sociais.png"
							titulo="Serviços Sociais"
							linkItems={[
								{
									id: 1,
									name: "Feiras Livres",
									link: "/feiras_livres",
								},
							]}
						/>
						<Card
							source="/assets/img/home_seguranca_defesa_civil.png"
							titulo="Segurança e Defesa Civil"
							linkItems={[
								{
									id: 1,
									name: "",
									link: "/",
								},
							]}
						/>
						<Card
							source="/assets/img/home_botao_panico.png"
							titulo="Botão do Pânico"
							linkItems={[
								{
									id: 1,
									name: "",
									link: "/",
								},
							]}
						/>
						<Card
							source="/assets/img/home_administracao_publica.png"
							titulo="Administração Pública"
							linkItems={[
								{
									id: 1,
									name: "Conheça os Gestores",
									link: "/conheca_os_gestores",
								},
							]}
						/>
						<Card
							source="/assets/img/home_notificacao_comunicacao.png"
							titulo="Central de Notificação e Comunicação"
							linkItems={[
								{
									id: 1,
									name: "",
									link: "/",
								},
							]}
						/>

						<Card
							source="/assets/img/home_sensoriamento_movel_participativo.png"
							titulo="Sensoriamento Móvel Participativo"
							linkItems={[
								{
									id: 1,
									name: "",
									link: "/",
								},
							]}
						/>
						<Card
							source="/assets/img/home_assossiacao_comercial.png"
							titulo="Assossiação Comercial"
							linkItems={[
								{
									id: 1,
									name: "",
									link: "/",
								},
							]}
						/>
					</WrapContainer>
					<GrayLine />
					<Chart1 />
					<ContainerRow>
						<Chart2 />
					</ContainerRow>
				</Content>
				<Footer />
			</ContainerBase>
		</>
	);
};
export default Home;
