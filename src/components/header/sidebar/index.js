import React from "react";
import { SidebarNav, SidebarWrap, LogoSidebar, NavIcon } from "./styles";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SidebarSubmenu from "./SidebarSubmenu";

const Sidebar = (props) => {
	return (
		<SidebarNav sidebar={props.sidebar}>
			<SidebarWrap>
				<NavIcon to="#">
					<AiIcons.AiOutlineClose
						color={"white"}
						size={25}
						onClick={props.showSidebar}
					/>
				</NavIcon>
				<LogoSidebar
					src={
						process.env.PUBLIC_URL +
						"/assets/img/home_logo_temporario.png"
					}
					alt="UnespSCityLogo"
				/>

				{SidebarData.map((item, index) => {
					return <SidebarSubmenu item={item} key={index} />;
				})}
			</SidebarWrap>
		</SidebarNav>
	);
};

export default Sidebar;
