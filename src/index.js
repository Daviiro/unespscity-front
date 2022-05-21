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

import Telefones from "./pages/Assistência_Social/telefones_úteis"; // Assistência Social //

import Parques from "./pages/Conservação_Rural-Áreas_Verdes/parques"; // Conservação Rural e Áreas Verdes //
import Pontes from "./pages/Conservação_Rural-Áreas_Verdes/pontes_em_estradas_rurais";
import Pracas from "./pages/Conservação_Rural-Áreas_Verdes/praças";

import Instalacoes from "./pages/Conservação_Urbana/fiscalização_de_instalações"; // Conservação Urbana //
import Iluminacao from "./pages/Conservação_Urbana/iluminação_púbica";
import Monumentos from "./pages/Conservação_Urbana/monumentos_e_chafarizes";
import Pavimentacao from "./pages/Conservação_Urbana/pavimentação";
import Vias from "./pages/Conservação_Urbana/vias_públicas";

import Escorpiao from "./pages/Controle_de_Pragas/foco_de_escorpião"; // Controle de Pragas //
import Pragas from "./pages/Controle_de_Pragas/insetos_roedores_caramujos";
import Leishmaniose from "./pages/Controle_de_Pragas/leishmaniose";
import Dengue from "./pages/Controle_de_Pragas/radar_da_dengue";

import Animais_Mortos from "./pages/Remoção_de_Detritos/animais_mortos"; // Remoção de Detritos //

import Feiras from "./pages/Serviços_Sociais/feiras_livres"; // Serviços Sociais //

import Piscinas from "./pages/Vigilância_Sanitária/limpeza_de_piscinas"; // Vigilância Sanitária //
import Terreno from "./pages/Vigilância_Sanitária/limpeza_de_terreno";

import TodasRotas from "./todasrotas"; // Rotas //

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
					path="/admin/gestores"
					element={<AdminGestores />}
				/>
				<Route
					exact
					path="/admin/telefones"
					element={<AdminTelefones />}
				/>
				<Route exact path="/admin/parques" element={<AdminParques />} />
				<Route exact path="/admin/pontes" element={<AdminPontes />} />
				<Route exact path="/admin/pracas" element={<AdminPracas />} />
				<Route
					exact
					path="/admin/iluminacao"
					element={<AdminIluminacao />}
				/>
				<Route
					exact
					path="/admin/instalacao"
					element={<AdminInstalacoes />}
				/>
				<Route
					exact
					path="/admin/monumentos"
					element={<AdminMonumentos />}
				/>
				<Route
					exact
					path="/admin/pavimentacao"
					element={<AdminPavimentacao />}
				/>
				<Route exact path="/admin/vias" element={<AdminVias />} />
				<Route exact path="/admin/feiras" element={<AdminFeiras />} />
				<Route
					exact
					path="/admin/piscinas"
					element={<AdminPiscinas />}
				/>
				<Route exact path="/admin/terreno" element={<AdminTerreno />} />
				<Route
					exact
					path="/admin/escorpiao"
					element={<AdminEscorpiao />}
				/>
				<Route exact path="/admin/pragas" element={<AdminPragas />} />
				<Route
					exact
					path="/admin/leishmaniose"
					element={<AdminLeishmaniose />}
				/>
				<Route exact path="/admin/dengue" element={<AdminDengue />} />
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
				<Route exact path="/feiras_livres" element={<Feiras />} />
				<Route
					exact
					path="/limpeza_de_piscinas"
					element={<Piscinas />}
				/>
				<Route exact path="/limpeza_de_terreno" element={<Terreno />} />
				<Route exact path="/todas-rotas" element={<TodasRotas />} />
			</Routes>
		</Router>
	</StrictMode>
);
