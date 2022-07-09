import React, { useContext } from "react";
import { ContainerBase, Content, WrapContainer, GrayLine } from "./styles";
import Header from "../../components/header";
import Card from "./service-card";
import ChartHome from "./chart";
import Footer from "../../components/footer";
import LocalContext from "../user-location/Context";
import Favorites from "../../components/favorites";

const Home = () => {
	const [formValues, setFormValues] = useContext(LocalContext);
	//console.log("teste " + formValues.state);
	//console.log("teste " + formValues.city);
	return (
		<>
			<ContainerBase>
				<Header />
				<Favorites />
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
								{
									id: 2,
									name: "Animais Perdidos",
									link: "/animais_perdidos_opcoes",
								},
								{
									id: 3,
									name: "Maus tratos à Animais",
									link: "/maus_tratos",
								},
								{
									id: 4,
									name: "Animais Sinantrópicos",
									link: "/animais-sinantropicos",
								},
								{
									id: 5,
									name: "Adoção de Animais",
									link: "/adocao_animais",
								},
							]}
						/>
						<Card
							source="/assets/img/home_meio_ambiente.png"
							titulo="Meio Ambiente"
							linkItems={[
								{
									id: 1,
									name: "Adoção de Áreas Públicas",
									link: "/adocao_areas_opcoes",
								},
								{
									id: 2,
									name: "Monitoramento",
									link: "/monitoramento",
								},
							]}
						/>
						<Card
							source="/assets/img/home_fauna_flora.png"
							titulo="Fauna e Flora"
							linkItems={[
								{
									id: 1,
									name: "Fiscalização de Animais Silvestres",
									link: "/animais_silvestres",
								},
								{
									id: 2,
									name: "Maus tratos à Animais",
									link: "/maus_tratos",
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
								{
									id: 2,
									name: "Cadastro de Túmulos e Falecidos",
									link: "/tumulos",
								},
								{
									id: 3,
									name: "Programação Cultural",
									link: "/programacao_cultural",
								},
							]}
						/>
						<Card
							source="/assets/img/home_familias_carentes.png"
							titulo="Famílias Carentes"
							linkItems={[
								{
									id: 1,
									name: "Registro de Familias Carentes",
									link: "/familia_carente_opcoes",
								},
								{
									id: 2,
									name: "Moradores de Rua",
									link: "/moradores_rua",
								},
								{
									id: 3,
									name: "Descarte Solidário",
									link: "/descarte_solidario",
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
									name: "Registro de Roubos e Furtos",
									link: "/registro_roubos",
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
					<ChartHome />
					<GrayLine />
				</Content>
				<Footer />
			</ContainerBase>
		</>
	);
};

export default Home;
