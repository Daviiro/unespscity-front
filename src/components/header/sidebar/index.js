import React, { useState, useEffect } from "react";
import {
	SidebarNav,
	SidebarWrap,
	LogoSidebar,
	NavIcon,
	Overlay,
} from "./styles";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./sidebarData";
import SidebarSubmenu from "./sidebarSubmenu";

const Sidebar = (props) => {
	console.log(props.sidebar);

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
