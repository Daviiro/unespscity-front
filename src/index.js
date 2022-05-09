import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";															// Home e Login //
import Login from "./pages/login";

import Gestores from "./pages/Administração_Pública/conheça_os_gestores";					// Administração Pública // 

import Telefones from "./pages/Assistência_Social/telefones_úteis";							// Assistência Social //

import Parques from "./pages/Conservação_Rural-Áreas_Verdes/parques";						// Conservação Rural e Áreas Verdes //
import Pontes from "./pages/Conservação_Rural-Áreas_Verdes/pontes_em_estradas_rurais";
import Pracas from "./pages/Conservação_Rural-Áreas_Verdes/praças";

import Instalacoes from "./pages/Conservação_Urbana/fiscalização_de_instalações";			// Conservação Urbana //
import Iluminacao from "./pages/Conservação_Urbana/iluminação_púbica";
import Monumentos from "./pages/Conservação_Urbana/monumentos_e_chafarizes";
import Pavimentacao from "./pages/Conservação_Urbana/pavimentação";
import Vias from "./pages/Conservação_Urbana/vias_públicas";

import Escorpiao from "./pages/Controle_de_Pragas/foco_de_escorpião";						// Controle de Pragas //
import Pragas from "./pages/Controle_de_Pragas/insetos_roedores_caramujos";
import Leishmaniose from "./pages/Controle_de_Pragas/leishmaniose";
import Dengue from "./pages/Controle_de_Pragas/radar_da_dengue";

import Animais_Mortos from "./pages/Remoção_de_Detritos/animais_mortos";					// Remoção de Detritos //

import Feiras from "./pages/Serviços_Sociais/feiras_livres";								// Serviços Sociais //

import Piscinas from "./pages/Vigilância_Sanitária/limpeza_de_piscinas";					// Vigilância Sanitária //
import Terreno from "./pages/Vigilância_Sanitária/limpeza_de_terreno";

import TodasRotas from "./todasrotas";														// Rotas //

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/conheca_os_gestores" element={<Gestores />} />
				<Route exact path="/telefones_uteis" element={<Telefones />} />
				<Route exact path="/parques" element={<Parques />} />
				<Route exact path="/pontes_em_estradas_rurais" element={<Pontes />} />
				<Route exact path="/pracas" element={<Pracas />} />
				<Route exact path="/fiscalizacao_de_instalacoes" element={<Instalacoes />} />
				<Route exact path="/iluminacao_publica" element={<Iluminacao />} />
				<Route exact path="/monumentos_e_chafarizes" element={<Monumentos />} />
				<Route exact path="/pavimentacao" element={<Pavimentacao />} />
				<Route exact path="/vias_publicas" element={<Vias />} />
				<Route exact path="/foco_de_escorpiao" element={<Escorpiao />} />
				<Route exact path="/insetos_roedores_caramujos" element={<Pragas />} />
				<Route exact path="/leishmaniose" element={<Leishmaniose />} />
				<Route exact path="/radar_da_dengue" element={<Dengue />} />
				<Route exact path="/animais_mortos" element={<Animais_Mortos />} />
				<Route exact path="/feiras_livres" element={<Feiras />} />
				<Route exact path="/limpeza_de_piscinas" element={<Piscinas />} />
				<Route exact path="/limpeza_de_terreno" element={<Terreno />} />
				<Route exact path="/todas-rotas" element={<TodasRotas />} />
			</Routes>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
