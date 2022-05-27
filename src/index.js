//import React from "react";
//import ReactDOM from "react-dom";
import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminAnimaisMortos from "./pages/Admin/Admin_Remoção_Detritos/animais_mortos";
import AdminGestores from "./pages/Admin/Admin_Administração_Pública/conheça_os_gestores";
import AdminTelefones from "./pages/Admin/Admin_Assistência_Social/telefones_úteis";
import AdminParques from "./pages/Admin/Admin_Conservação_Rural-Áreas_Verdes/parques";
import AdminPontes from "./pages/Admin/Admin_Conservação_Rural-Áreas_Verdes/pontes_em_estradas_rurais";
import AdminPracas from "./pages/Admin/Admin_Conservação_Rural-Áreas_Verdes/praças";
import AdminIluminacao from "./pages/Admin/Admin_Conservação_Urbana/iluminação_púbica";
import AdminInstalacoes from "./pages/Admin/Admin_Conservação_Urbana/fiscalização_de_instalações";
import AdminMonumentos from "./pages/Admin/Admin_Conservação_Urbana/monumentos_e_chafarizes";
import AdminPavimentacao from "./pages/Admin/Admin_Conservação_Urbana/pavimentação";
import AdminVias from "./pages/Admin/Admin_Conservação_Urbana/vias_públicas";
import AdminFeiras from "./pages/Admin/Admin_Serviços_Sociais/feiras_livres";
import AdminPiscinas from "./pages/Admin/Admin_Vigilância_Sanitária/limpeza_de_piscinas";
import AdminTerreno from "./pages/Admin/Admin_Vigilância_Sanitária/limpeza_de_terreno";
import AdminEscorpiao from "./pages/Admin/Admin_Controle_de_Pragas/foco_de_escorpião";
import AdminPragas from "./pages/Admin/Admin_Controle_de_Pragas/insetos_roedores_caramujos";
import AdminLeishmaniose from "./pages/Admin/Admin_Controle_de_Pragas/leishmaniose";
import AdminDengue from "./pages/Admin/Admin_Controle_de_Pragas/radar_da_dengue";

import Home from "./pages/home"; // Home e Login //
import Login from "./pages/login";

import Gestores from "./pages/Administração_Pública/conheça_os_gestores"; // Administração Pública //

import Telefones from "./pages/socialCare/UsefulPhoneNumbers"; // Assistência Social //

import AnimaisSinantropicos from "./pages/Animais_Domésticos/animaisSinantropicos";
import AnimaisAbandonados from "./pages/Animais_Domésticos/animais_abandonados"; // Assistência Domésticos //

import Parques from "./pages/Conservação_Rural-Áreas_Verdes/parques"; // Conservação Rural e Áreas Verdes //
import Pontes from "./pages/Conservação_Rural-Áreas_Verdes/pontes_em_estradas_rurais";
import Pracas from "./pages/Conservação_Rural-Áreas_Verdes/praças";

import Instalacoes from "./pages/Conservação_Urbana/fiscalização_de_instalações"; // Conservação Urbana //
import Iluminacao from "./pages/Conservação_Urbana/iluminação_púbica";
import Monumentos from "./pages/Conservação_Urbana/monumentos_e_chafarizes";
import Pavimentacao from "./pages/Conservação_Urbana/pavimentação";
import Vias from "./pages/Conservação_Urbana/vias_públicas";

import Escorpiao from "./pages/pestControl/ScorpionsHabitat"; // Controle de Pragas //
import Pragas from "./pages/pestControl/InsectsRodentsSnails";
import Leishmaniose from "./pages/pestControl/Leishmaniose";
import Dengue from "./pages/pestControl/DengueRadar";

import Animais_Mortos from "./pages/roadMaintenance/RemovalOfDeadAnimals"; // Remoção de Detritos //

import Feiras from "./pages/socialServices/Fair"; // Serviços Sociais //

import Piscinas from "./pages/sanitarySurveillance/PoolCleaning"; // Vigilância Sanitária //
import Terreno from "./pages/sanitarySurveillance/LandCleaning";
import Restaurante from "./pages/sanitarySurveillance/ReportAPlace";

//fauna e flora//
import HandlingWildAnimals from "./pages/faunaFlora/HandlingWildAnimals";

import UserLocation from "./pages/UserLocation";
import Sistema from "./pages/System";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />} />
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
