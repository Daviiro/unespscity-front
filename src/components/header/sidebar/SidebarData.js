import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
	{
		title: "Home",
		path: "/",
		icon: <AiIcons.AiFillHome />,
		iconClosed: <RiIcons.RiArrowDownFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
	},
	{
		title: "Cadastro",
		path: "/login",
		icon: <AiIcons.AiOutlineFolderOpen />,
		iconClosed: <RiIcons.RiArrowDownFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
	},
	{
		title: "Sistema",
		path: "#",
		icon: <AiIcons.AiFillSetting />,
		iconClosed: <RiIcons.RiArrowDownFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
		subNav: [
			{
				title: "Dashboards",
				path: "/",
				icon: <AiIcons.AiOutlineAreaChart />,
			},
		],
	},
];
