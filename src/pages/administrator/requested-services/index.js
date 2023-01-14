import React, { useContext, useState } from "react";
import { ContainerBase, Content, WrapContainer, GrayLine } from "../../home/styles";
import Header from "../../../components/header/admin";
import Card from "../../home/service-card";
import Footer from "../../../components/footer";

import CommercialAssociationPopUp from "./commercial-association/index";
import CommunicationPopUp from "./communication/index";
import DomesticAnimalsPopup from "./domestic-animals/index";
import EnvironmentPopUp from "./environment/index";
import FaunaFloraPopUp from "./fauna-flora/index";
import NeedyFamiliesPopUp from "./needy-families/index";
import PanicButtonPopUp from "./panic-button/index";
import PestControlPopup from "./pest-control/index";
import PublicAdministrationPopUp from "./public-aministration/index";
import RemoteSensingPopUp from "./remote-sensing/index";
import RuralConservationPopUp from "./rural-green-areas-conservation/index";
import SanitarySurveillancePopUp from "./sanitary-surveillance/index";
import SecurityDefensePopUp from "./security-defense/index";
import SocialCarePopUp from "./social-care/index";
import SocialServicesPopUp from "./social-services/index";
import TrashRemovalPopUp from "./road-maintenance/index";
import UrbanConservationPopUp from "./urban-conservation/index";

const Microsservices = (props) => {

	const [popup01, setPopup01] = useState(false);
	const [popup02, setPopup02] = useState(false);
	const [popup03, setPopup03] = useState(false);
	const [popup04, setPopup04] = useState(false);
	const [popup05, setPopup05] = useState(false);
	const [popup06, setPopup06] = useState(false);
	const [popup07, setPopup07] = useState(false);
	const [popup08, setPopup08] = useState(false);
	const [popup09, setPopup09] = useState(false);
	const [popup10, setPopup10] = useState(false);
	const [popup11, setPopup11] = useState(false);
	const [popup12, setPopup12] = useState(false);
	const [popup13, setPopup13] = useState(false);
	const [popup14, setPopup14] = useState(false);
	const [popup15, setPopup15] = useState(false);
	const [popup16, setPopup16] = useState(false);
	const [popup17, setPopup17] = useState(false);

	return (
		<>
			<ContainerBase>
				<Header />
				<Content>
					<WrapContainer>
						<div onClick = {() => setPopup01(true)}>
						<Card
							source="/assets/img/home_conservacao_urbana.png"
							titulo="Conservação Urbana"
						/>
						</div>
						<UrbanConservationPopUp trigger = {popup01} setTrigger = {setPopup01}/>
						<div onClick = {() => setPopup02(true)}>
						<Card
							source="/assets/img/home_conservacao_rural.png"
							titulo="Conservação Rural/Áreas Verdes"
						/>
						</div>
						<RuralConservationPopUp trigger = {popup02} setTrigger = {setPopup02}/>
						<div onClick = {() => setPopup03(true)}>
						<Card
							source="/assets/img/home_remocao_detritos.png"
							titulo="Remoção de Detritos"
						/>
						</div>
						<TrashRemovalPopUp trigger = {popup03} setTrigger = {setPopup03}/>
						<div onClick = {() => setPopup04(true)}>
						<Card
							source="/assets/img/home_vigilancia_sanitaria.png"
							titulo="Vigilância Sanitária"
						/>
						</div>
						<SanitarySurveillancePopUp trigger = {popup04} setTrigger = {setPopup04}/>
						<div onClick = {() => setPopup05(true)}>
						<Card
							source="/assets/img/home_controle_pragas.png"
							titulo="Controle de Pragas"
						/>
						</div>
						<PestControlPopup trigger = {popup05} setTrigger = {setPopup05}/>
						<div onClick = {() => setPopup06(true)}>
						<Card
							source="/assets/img/home_animais_domesticos.png"
							titulo="Animais Domésticos"
						/>
						</div>
						<DomesticAnimalsPopup trigger = {popup06} setTrigger = {setPopup06}/>
						<div onClick = {() => setPopup07(true)}>
						<Card
							source="/assets/img/home_meio_ambiente.png"
							titulo="Meio Ambiente"
						/>
						</div>
						<EnvironmentPopUp trigger = {popup07} setTrigger = {setPopup07}/>
						<div onClick = {() => setPopup08(true)}>
						<Card
							source="/assets/img/home_fauna_flora.png"
							titulo="Fauna e Flora"
						/>
						</div>
						<FaunaFloraPopUp trigger = {popup08} setTrigger = {setPopup08}/>
						<div onClick = {() => setPopup09(true)}>
						<Card
							source="/assets/img/home_assistencia_social.png"
							titulo="Assistência Social"
						/>
						</div>
						<SocialCarePopUp trigger = {popup09} setTrigger = {setPopup09}/>
						<div onClick = {() => setPopup10(true)}>
						<Card
							source="/assets/img/home_familias_carentes.png"
							titulo="Famílias Carentes"
						/>
						</div>
						<NeedyFamiliesPopUp trigger = {popup10} setTrigger = {setPopup10}/>
						<div onClick = {() => setPopup11(true)}>
						<Card
							source="/assets/img/home_servicos_sociais.png"
							titulo="Serviços Sociais"
						/>
						</div>
						<SocialServicesPopUp trigger = {popup11} setTrigger = {setPopup11}/>
						<div onClick = {() => setPopup12(true)}>
						<Card
							source="/assets/img/home_seguranca_defesa_civil.png"
							titulo="Segurança e Defesa Civil"
						/>
						</div>
						<SecurityDefensePopUp trigger = {popup12} setTrigger = {setPopup12}/>
						<div onClick = {() => setPopup13(true)}>
						<Card
							source="/assets/img/home_botao_panico.png"
							titulo="Botão do Pânico"
						/>
						</div>
						<PanicButtonPopUp trigger = {popup13} setTrigger = {setPopup13}/>
						<div onClick = {() => setPopup14(true)}>
						<Card
							source="/assets/img/home_administracao_publica.png"
							titulo="Administração Pública"
						/>
						</div>
						<PublicAdministrationPopUp trigger = {popup14} setTrigger = {setPopup14}/>
						<div onClick = {() => setPopup15(true)}>
						<Card
							source="/assets/img/home_notificacao_comunicacao.png"
							titulo="Central de Notificação e Comunicação"
						/>
						</div>
						<CommunicationPopUp trigger = {popup15} setTrigger = {setPopup15}/>
						<div onClick = {() => setPopup16(true)}>
						<Card
							source="/assets/img/home_sensoriamento_movel_participativo.png"
							titulo="Sensoriamento Móvel Participativo"
						/>
						</div>
						<RemoteSensingPopUp trigger = {popup16} setTrigger = {setPopup16}/>
						<div onClick = {() => setPopup17(true)}>
						<Card
							source="/assets/img/home_assossiacao_comercial.png"
							titulo="Assossiação Comercial"
						/>
						</div>
						<CommercialAssociationPopUp trigger = {popup17} setTrigger = {setPopup17}/>
					</WrapContainer>
					<GrayLine />
				</Content>
				<Footer />
			</ContainerBase>
		</>
	);
};

export default Microsservices;