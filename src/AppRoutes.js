import React from "react";
import { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

import Dashboard from "./pages/administrator"; // DASHBOARD PARA O ADMIN

import Home from "./pages/home"; // Home e Login //
import Login from "./pages/login";
import PasswordReset from "./pages/password-reset";
import Map from "./services/map-page-test";

import UserLocation from "./pages/user-location";
import Sistema from "./pages/system";
import LocalContext from "./pages/user-location/Context";

import AdminGestores from "./pages/administrator/public-administration/know-city-managers"; // Administração Pública //
import Gestores from "./pages/public-administration/know-city-managers";
import ProposedLegislation from "./pages/public-administration/proposed-legislation";
import AntiCorruptionCenter from "./pages/public-administration/anti-corruption-center";
import SuggestionComplaint from "./pages/communication/suggestion-complaints";

import AdminTelefones from "./pages/administrator/social-care/useful-contacts"; // Assistência Social //
import AdminTumulos from "./pages/administrator/social-care/grave-registration";
import AdminProgramacaoCultural from "./pages/administrator/social-care/cultural-program";
import Telefones from "./pages/social-care/useful-contacts";
import Tumulos from "./pages/social-care/grave-registration";
import ProgramacaoCultural from "./pages/social-care/cultural-program";

import AdminAnimaisAbandonados from "./pages/administrator/domestic-animals/abandoned-animals"; // Animais Domésticos //
import AdminAnimaisPerdidos from "./pages/administrator/domestic-animals/lost-animals";
import AdminAdocaoAnimais from "./pages/administrator/domestic-animals/adoption-animals";
import AnimaisAbandonados from "./pages/domestic-animals/abandoned-animals";
import AnimaisPerdidosOpcoes from "./pages/domestic-animals/lost-animals/option";
import AnimaisPerdidosNovo from "./pages/domestic-animals/lost-animals/index1";
import AnimaisPerdidosLista from "./pages/domestic-animals/lost-animals/index2";
import AnimaisSinantropicos from "./pages/domestic-animals/synanthropic-animals";
import AdocaoAnimais from "./pages/domestic-animals/adoption-animals";

import AdminAnimaisMortos from "./pages/administrator/road-maintenance/removal-of-dead-animals"; // Remoção de Detritos //
import AnimaisMortos from "./pages/road-maintenance/removal-of-dead-animals";

import AdminAdocaoAreas from "./pages/administrator/environment/public-areas-adoption"; // Meio Ambiente //
import AdminMonitoramentoTempo from "./pages/administrator/environment/monitoring";
import AdocaoAreasOpcoes from "./pages/environment/public-areas-adoption/option";
import AdocaoAreasDisponiveis from "./pages/environment/public-areas-adoption/index1";
import AdocaoAreasAdotadas from "./pages/environment/public-areas-adoption/index2";
import AdocaoAreasRegras from "./pages/environment/public-areas-adoption/index3";
import MonitoramentoTempo from "./pages/environment/climate-monitoring";
import RefuseCollection from "./pages/environment/refuse-collection";

import AdminMausTratosAnimais from "./pages/administrator/fauna-flora/animal-violence"; //Fauna e Flora//
import AdminAnimaisSilvestres from "./pages/administrator/fauna-flora/wild-animals";
import AnimaisSilvestres from "./pages/fauna-flora/wild-animals";
import MausTratosAnimais from "./pages/fauna-flora/animal-violence";
import InformationAboutTrees from "./pages/fauna-flora/information-about-trees";

import AdminParques from "./pages/administrator/rural-green-areas-conservation/parks"; // Conservação Rural e Áreas Verdes //
import AdminPontes from "./pages/administrator/rural-green-areas-conservation/rural-road-bridges";
import AdminPracas from "./pages/administrator/rural-green-areas-conservation/plazas";
import Parques from "./pages/rural-green-areas-conservation/parks";
import Pontes from "./pages/rural-green-areas-conservation/rural-road-bridges";
import Pracas from "./pages/rural-green-areas-conservation/plazas";

import AdminHomelessPeople from "./pages/administrator/needy-families/homeless-people"; // Familias Carentes //
import AdminNeedyFamilies from "./pages/administrator/needy-families/needy-families-register";
import HomelessPeople from "./pages/needy-families/homeless-people";
import AdminDescarteSolidario from "./pages/administrator/needy-families/solidary-disposal";
import NeedyFamiliesOption from "./pages/needy-families/needy-families-option";
import NeedyFamiliesRegister from "./pages/needy-families/needy-families-register";
import NeedyFamiliesList from "./pages/needy-families/needy-families-list";
import DescarteSolidario from "./pages/needy-families/solidary-disposal";

import AdminIluminacao from "./pages/administrator/urban-conservation/street-lighting"; // Conservação Urbana //
import AdminInstalacoes from "./pages/administrator/urban-conservation/facilities-inspection";
import AdminMonumentos from "./pages/administrator/urban-conservation/fountains-monuments";
import AdminPavimentacao from "./pages/administrator/urban-conservation/pavement";
import AdminVias from "./pages/administrator/urban-conservation/public-roads";
import Instalacoes from "./pages/urban-conservation/facilities-inspection";
import Iluminacao from "./pages/urban-conservation/street-lighting";
import Monumentos from "./pages/urban-conservation/fountains-monuments";
import Pavimentacao from "./pages/urban-conservation/pavement";
import Vias from "./pages/urban-conservation/public-roads";

import AdminFeiras from "./pages/administrator/social-services/fair"; // Serviços Sociais //
import Feiras from "./pages/social-services/fair";

import AdminTheftRegister from "./pages/administrator/security-defense/theft-register"; // Segurança e Defesa //
import TheftRegister from "./pages/security-defense/theft-register";
import VictimsOfDomesticViolence from "./pages/security-defense/victims-of-domestic-violence";
import AccidentRecords from "./pages/security-defense/accident-records";

import AdminPiscinas from "./pages/administrator/sanitary-surveillance/pool-cleaning"; // Vigilância Sanitária //
import AdminTerreno from "./pages/administrator/sanitary-surveillance/land-cleaning";
import AdminAmbienteIrregular from "./pages/administrator/sanitary-surveillance/report-place";
import Piscinas from "./pages/sanitary-surveillance/pool-cleaning";
import Terreno from "./pages/sanitary-surveillance/land-cleaning";
import Restaurante from "./pages/sanitary-surveillance/report-place";

import AdminEscorpiao from "./pages/administrator/pest-control/scorpions-habitat"; // Controle de Pragas //
import AdminPragas from "./pages/administrator/pest-control/insects-rodents-snails";
import AdminLeishmaniose from "./pages/administrator/pest-control/leishmaniose";
import AdminDengue from "./pages/administrator/pest-control/dengue-radar";
import Escorpiao from "./pages/pest-control/scorpions-habitat";
import Pragas from "./pages/pest-control/insects-rodents-snails";
import Leishmaniose from "./pages/pest-control/leishmaniose";
import Dengue from "./pages/pest-control/dengue-radar";

import Monitoring from "./pages/remote-sensing/monitoring"; //sensoriamento remoto participativo

import LocalTradeOffers from "./pages/commercial-association/local-trade-offers"; //associacao comercial

const AppRoutes = () => {
	const [formValues, setFormValues] = useState({});
	return (
		<Router>
			<LocalContext.Provider value={[formValues, setFormValues]}>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/admin" element={<Dashboard />} />
					<Route
						exact
						path="/admin/animais_abandonados"
						element={<AdminAnimaisAbandonados />}
					/>
					<Route
						exact
						path="/admin/animais_perdidos"
						element={<AdminAnimaisPerdidos />}
					/>
					<Route
						exact
						path="/admin/animais_mortos"
						element={<AdminAnimaisMortos />}
					/>
					<Route
						exact
						path="/admin/adocao_animais"
						element={<AdminAdocaoAnimais />}
					/>
					<Route
						exact
						path="/admin/adocao_areas_publicas"
						element={<AdminAdocaoAreas />}
					/>
					<Route
						exact
						path="/admin/monitoramento"
						element={<AdminMonitoramentoTempo />}
					/>
					<Route
						exact
						path="/admin/animais_silvestres"
						element={<AdminAnimaisSilvestres />}
					/>
					<Route
						exact
						path="/admin/maus_tratos"
						element={<AdminMausTratosAnimais />}
					/>
					<Route
						exact
						path="/admin/conheca_os_gestores"
						element={<AdminGestores />}
					/>
					<Route
						exact
						path="/admin/telefones_uteis"
						element={<AdminTelefones />}
					/>
					<Route
						exact
						path="/admin/tumulos"
						element={<AdminTumulos />}
					/>
					<Route
						exact
						path="/admin/programacao_cultural"
						element={<AdminProgramacaoCultural />}
					/>
					<Route
						exact
						path="/admin/parques"
						element={<AdminParques />}
					/>
					<Route
						exact
						path="/admin/pontes_em_estradas_rurais"
						element={<AdminPontes />}
					/>
					<Route
						exact
						path="/admin/pracas"
						element={<AdminPracas />}
					/>
					<Route
						exact
						path="/admin/iluminacao_publica"
						element={<AdminIluminacao />}
					/>
					<Route
						exact
						path="/admin/fiscalizacao_de_instalacoes"
						element={<AdminInstalacoes />}
					/>
					<Route
						exact
						path="/admin/monumentos_e_chafarizes"
						element={<AdminMonumentos />}
					/>
					<Route
						exact
						path="/admin/pavimentacao"
						element={<AdminPavimentacao />}
					/>
					<Route
						exact
						path="/admin/vias_publicas"
						element={<AdminVias />}
					/>
					<Route
						exact
						path="/admin/feiras_livres"
						element={<AdminFeiras />}
					/>
					<Route
						exact
						path="/admin/limpeza_de_piscinas"
						element={<AdminPiscinas />}
					/>
					<Route
						exact
						path="/admin/limpeza_de_terreno"
						element={<AdminTerreno />}
					/>
					<Route
						exact
						path="/admin/restaurantes"
						element={<AdminAmbienteIrregular />}
					/>
					<Route
						exact
						path="/admin/foco_de_escorpiao"
						element={<AdminEscorpiao />}
					/>
					<Route
						exact
						path="/admin/insetos_roedores_caramujos"
						element={<AdminPragas />}
					/>
					<Route
						exact
						path="/admin/leishmaniose"
						element={<AdminLeishmaniose />}
					/>
					<Route
						exact
						path="/admin/radar_da_dengue"
						element={<AdminDengue />}
					/>
					<Route
						exact
						path="/admin/registro_roubos"
						element={<AdminTheftRegister />}
					/>
					<Route
						exact
						path="/admin/moradores_rua"
						element={<AdminHomelessPeople />}
					/>
					<Route
						exact
						path="/admin/familias_carentes"
						element={<AdminNeedyFamilies />}
					/>
					<Route
						exact
						path="/admin/descarte_solidario"
						element={<AdminDescarteSolidario />}
					/>
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/localizacao" element={<Map />} />
					<Route
						exact
						path="/conheca_os_gestores"
						element={<Gestores />}
					/>
					<Route
						exact
						path="/telefones_uteis"
						element={<Telefones />}
					/>
					<Route exact path="/tumulos" element={<Tumulos />} />
					<Route
						exact
						path="/programacao_cultural"
						element={<ProgramacaoCultural />}
					/>
					<Route exact path="/parques" element={<Parques />} />
					<Route
						exact
						path="/pontes_em_estradas_rurais"
						element={<Pontes />}
					/>
					<Route exact path="/pracas" element={<Pracas />} />
					<Route
						exact
						path="/fiscalizacao_de_instalacoes"
						element={<Instalacoes />}
					/>
					<Route
						exact
						path="/iluminacao_publica"
						element={<Iluminacao />}
					/>
					<Route
						exact
						path="/monumentos_e_chafarizes"
						element={<Monumentos />}
					/>
					<Route
						exact
						path="/pavimentacao"
						element={<Pavimentacao />}
					/>
					<Route exact path="/vias_publicas" element={<Vias />} />
					<Route
						exact
						path="/foco_de_escorpiao"
						element={<Escorpiao />}
					/>
					<Route
						exact
						path="/insetos_roedores_caramujos"
						element={<Pragas />}
					/>
					<Route
						exact
						path="/leishmaniose"
						element={<Leishmaniose />}
					/>
					<Route exact path="/radar_da_dengue" element={<Dengue />} />
					<Route
						exact
						path="/animais_mortos"
						element={<AnimaisMortos />}
					/>
					<Route
						exact
						path="/animais_perdidos_opcoes"
						element={<AnimaisPerdidosOpcoes />}
					/>
					<Route
						exact
						path="/animais_perdidos_novo"
						element={<AnimaisPerdidosNovo />}
					/>
					<Route
						exact
						path="/adocao_animais"
						element={<AdocaoAnimais />}
					/>
					<Route
						exact
						path="/animais_perdidos_lista"
						element={<AnimaisPerdidosLista />}
					/>
					<Route
						exact
						path="/animais_abandonados"
						element={<AnimaisAbandonados />}
					/>
					<Route
						exact
						path="/adocao_areas_opcoes"
						element={<AdocaoAreasOpcoes />}
					/>
					<Route
						exact
						path="/adocao_areas_disponiveis"
						element={<AdocaoAreasDisponiveis />}
					/>
					<Route
						exact
						path="/adocao_areas_adotadas"
						element={<AdocaoAreasAdotadas />}
					/>
					<Route
						exact
						path="/adocao_areas_regras"
						element={<AdocaoAreasRegras />}
					/>
					<Route
						exact
						path="/monitoramento"
						element={<MonitoramentoTempo />}
					/>
					<Route exact path="/feiras_livres" element={<Feiras />} />
					<Route
						exact
						path="/limpeza_de_piscinas"
						element={<Piscinas />}
					/>
					<Route
						exact
						path="/limpeza_de_terreno"
						element={<Terreno />}
					/>
					<Route
						exact
						path="/restaurantes"
						element={<Restaurante />}
					/>
					<Route
						exact
						path="/animais-sinantropicos"
						element={<AnimaisSinantropicos />}
					/>

					<Route
						exact
						path="/animais_silvestres"
						element={<AnimaisSilvestres />}
					/>
					<Route
						exact
						path="/maus_tratos"
						element={<MausTratosAnimais />}
					/>
					<Route
						exact
						path="/registro_roubos"
						element={<TheftRegister />}
					/>
					<Route
						exact
						path="/moradores_rua"
						element={<HomelessPeople />}
					/>
					<Route
						exact
						path="/familia_carente_opcoes"
						element={<NeedyFamiliesOption />}
					/>
					<Route
						exact
						path="/familias_carentes_registro"
						element={<NeedyFamiliesRegister />}
					/>
					<Route
						exact
						path="/familias_carentes_lista"
						element={<NeedyFamiliesList />}
					/>
					<Route
						exact
						path="/descarte_solidario"
						element={<DescarteSolidario />}
					/>
					<Route exact path="/location" element={<UserLocation />} />
					<Route exact path="/sistema" element={<Sistema />} />
					<Route
						exact
						path="/password-reset"
						element={<PasswordReset />}
					/>
					<Route
						exact
						path="/sugggestion-complaint"
						element={<SuggestionComplaint />}
					/>
					<Route
						exact
						path="/consultar-propostas-de-leis"
						element={<ProposedLegislation />}
					/>
					<Route
						exact
						path="/central-anticorrupcao"
						element={<AntiCorruptionCenter />}
					/>
					<Route
						exact
						path="/coleta-de-lixo"
						element={<RefuseCollection />}
					/>
					<Route
						exact
						path="/arvores"
						element={<InformationAboutTrees />}
					/>
					<Route
						exact
						path="/violencia-domestica"
						element={<VictimsOfDomesticViolence />}
					/>
					<Route
						exact
						path="/registro-acidentes"
						element={<AccidentRecords />}
					/>
					<Route
						exact
						path="/monitoramento-pessoas-veiculos"
						element={<Monitoring />}
					/>
					<Route
						exact
						path="/comercio-local"
						element={<LocalTradeOffers />}
					/>
				</Routes>
			</LocalContext.Provider>
		</Router>
	);
};

export default AppRoutes;
