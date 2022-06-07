//import React from "react";
//import ReactDOM from "react-dom";
import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/administrator";
import AdminAnimaisAbandonados from "./pages/administrator/domestic-animals/abandoned-animals";
import AdminAnimaisPerdidos from "./pages/administrator/domestic-animals/lost-animals";
import AdminAnimaisMortos from "./pages/administrator/road-maintenance/removal-of-dead-animals";
import AdminGestores from "./pages/administrator/public-administration/know-city-managers";
import AdminTelefones from "./pages/administrator/social-care/useful-contacts";
import AdminTumulos from "./pages/administrator/social-care/grave-registration";
import AdminParques from "./pages/administrator/rural-green-areas-conservation/parks";
import AdminPontes from "./pages/administrator/rural-green-areas-conservation/rural-road-bridges";
import AdminPracas from "./pages/administrator/rural-green-areas-conservation/plazas";
import AdminIluminacao from "./pages/administrator/urban-conservation/street-lighting";
import AdminInstalacoes from "./pages/administrator/urban-conservation/facilities-inspection";
import AdminMonumentos from "./pages/administrator/urban-conservation/fountains-monuments";
import AdminPavimentacao from "./pages/administrator/urban-conservation/pavement";
import AdminVias from "./pages/administrator/urban-conservation/public-roads";
import AdminFeiras from "./pages/administrator/social-services/fair";
import AdminPiscinas from "./pages/administrator/sanitary-surveillance/pool-cleaning";
import AdminTerreno from "./pages/administrator/sanitary-surveillance/land-cleaning";
import AdminAmbienteIrregular from "./pages/administrator/sanitary-surveillance/report-place";
import AdminEscorpiao from "./pages/administrator/pest-control/scorpions-habitat";
import AdminPragas from "./pages/administrator/pest-control/insects-rodents-snails";
import AdminLeishmaniose from "./pages/administrator/pest-control/leishmaniose";
import AdminDengue from "./pages/administrator/pest-control/dengue-radar";

import Home from "./pages/home"; // Home e Login //
import Login from "./pages/login";

import Gestores from "./pages/public-administration/know-city-managers"; // Administração Pública //

import Telefones from "./pages/social-care/useful-contacts"; // Assistência Social //
import Tumulos from "./pages/social-care/grave-registration";

import AnimaisAbandonados from "./pages/domestic-animals/abandoned-animals"; // Animais Domésticos //
import AnimaisPerdidosOpcoes from "./pages/domestic-animals/lost-animals/option";
import AnimaisPerdidosNovo from "./pages/domestic-animals/lost-animals/index1";
import AnimaisPerdidosLista from "./pages/domestic-animals/lost-animals/index2";
import AnimaisSinantropicos from "./pages/domestic-animals/synanthropic-animals";

import Parques from "./pages/rural-green-areas-conservation/parks"; // Conservação Rural e Áreas Verdes //
import Pontes from "./pages/rural-green-areas-conservation/rural-road-bridges";
import Pracas from "./pages/rural-green-areas-conservation/plazas";

import Instalacoes from "./pages/urban-conservation/facilities-inspection"; // Conservação Urbana //
import Iluminacao from "./pages/urban-conservation/street-lighting";
import Monumentos from "./pages/urban-conservation/fountains-monuments";
import Pavimentacao from "./pages/urban-conservation/pavement";
import Vias from "./pages/urban-conservation/public-roads";

import Escorpiao from "./pages/pest-control/scorpions-habitat"; // Controle de Pragas //
import Pragas from "./pages/pest-control/insects-rodents-snails";
import Leishmaniose from "./pages/pest-control/leishmaniose";
import Dengue from "./pages/pest-control/dengue-radar";

import Animais_Mortos from "./pages/road-maintenance/removal-of-dead-animals"; // Remoção de Detritos //

import Feiras from "./pages/social-services/fair"; // Serviços Sociais //

import Piscinas from "./pages/sanitary-surveillance/pool-cleaning"; // Vigilância Sanitária //
import Terreno from "./pages/sanitary-surveillance/land-cleaning";
import Restaurante from "./pages/sanitary-surveillance/report-place";

//fauna e flora//
import HandlingWildAnimals from "./pages/fauna-flora/wild-animals";

import UserLocation from "./pages/user-location";
import Sistema from "./pages/system";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/admin" element={<Dashboard />} />
				<Route
					exact
					path="/admin/animais_abandonados"
					element={<AdminAnimaisAbandonados />}
				/>
				<Route exact path = "/admin/animais_perdidos" element = {<AdminAnimaisPerdidos />} />
				<Route
					exact
					path="/admin/animais_mortos"
					element={<AdminAnimaisMortos />}
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
				<Route exact path="/admin/tumulos" element={<AdminTumulos />} />
				<Route exact path="/admin/parques" element={<AdminParques />} />
				<Route
					exact
					path="/admin/pontes_em_estradas_rurais"
					element={<AdminPontes />}
				/>
				<Route exact path="/admin/pracas" element={<AdminPracas />} />
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
				<Route exact path="/login" element={<Login />} />
				<Route
					exact
					path="/conheca_os_gestores"
					element={<Gestores />}
				/>
				<Route exact path="/telefones_uteis" element={<Telefones />} />
				<Route exact path="/tumulos" element={<Tumulos />} />
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
				<Route exact path="/pavimentacao" element={<Pavimentacao />} />
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
				<Route exact path="/leishmaniose" element={<Leishmaniose />} />
				<Route exact path="/radar_da_dengue" element={<Dengue />} />
				<Route
					exact
					path="/animais_mortos"
					element={<Animais_Mortos />}
				/>
				<Route exact path = "/animais_perdidos_opcoes" element = {<AnimaisPerdidosOpcoes />} />
				<Route exact path = "/animais_perdidos_novo" element = {<AnimaisPerdidosNovo />} />
				<Route exact path = "/animais_perdidos_lista" element = {<AnimaisPerdidosLista />} />
				<Route
					exact
					path="/animais_abandonados"
					element={<AnimaisAbandonados />}
				/>
				<Route exact path="/feiras_livres" element={<Feiras />} />
				<Route
					exact
					path="/limpeza_de_piscinas"
					element={<Piscinas />}
				/>
				<Route exact path="/limpeza_de_terreno" element={<Terreno />} />
				<Route exact path="/restaurantes" element={<Restaurante />} />
				<Route
					exact
					path="/animais-sinantropicos"
					element={<AnimaisSinantropicos />}
				/>

				<Route
					exact
					path="/animais-silvestres"
					element={<HandlingWildAnimals />}
				/>
				<Route exact path="/location" element={<UserLocation />} />
				<Route exact path="/sistema" element={<Sistema />} />
			</Routes>
		</Router>
	</StrictMode>
);
