import React from "react";
import * as FaIcons from "react-icons/fa";
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
		// subNav: [
		// 	{
		// 		title: "Cadstro de Usuários",
		// 		path: "/cadastro",
		// 		icon: <IoIcons.IoIosPaper />,
		// 	},
		// ],
	},
	{
		title: "Cadastro",
		path: "/cadastro",
		icon: <AiIcons.AiOutlineFolderOpen />,
		iconClosed: <RiIcons.RiArrowDownFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
		// subNav: [
		// 	{
		// 		title: "Cargos",
		// 		path: "/cargos",
		// 		icon: <IoIcons.IoIosPaper />,
		// 	},
		// 	{
		// 		title: "Contas à Pagar",
		// 		path: "/contas",
		// 		icon: <IoIcons.IoIosPaper />,
		// 	},
		// 	{
		// 		title: "Contratos",
		// 		path: "/contratos",
		// 		icon: <IoIcons.IoIosPaper />,
		// 	},

		// 	{
		// 		title: "Finanças",
		// 		path: "/admin",
		// 		icon: <IoIcons.IoIosPaper />,
		// 	},
		// 	{
		// 		title: "Grupos de Consórcio",
		// 		path: "/grudos_de_consorcio",
		// 		icon: <IoIcons.IoIosPaper />,
		// 	},
		// 	{
		// 		title: "Agenda",
		// 		path: "/agenda",
		// 		icon: <IoIcons.IoIosPaper />,
		// 	},
		// ],
	},
	{
		title: "Dropdown",
		path: "#",
		icon: <AiIcons.AiOutlineFolderOpen />,
		iconClosed: <RiIcons.RiArrowDownFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
		subNav: [
			{
				title: "opcao1",
				path: "/",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "opcao2",
				path: "/",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "opcao3",
				path: "/",
				icon: <IoIcons.IoIosPaper />,
			},
		],
	},
	{
		title: "Sistema",
		path: "/system",
		icon: <AiIcons.AiFillSetting />,
		iconClosed: <RiIcons.RiArrowDownFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
	},
];
