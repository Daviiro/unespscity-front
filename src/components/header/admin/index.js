import React, { useState, useEffect, useContext } from "react";
import {
	HeaderContainer,
	ContainerActions,
	ContainerLogo,
	ContainerCenter,
} from "../styles";

import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../sidebar";
import * as FaIcons from "react-icons/fa";

import { BiUser } from "react-icons/bi";
import SlideDownMenu from "../slide-down-menu";
import LocalContext from "../../../pages/user-location/Context";
import { fetchCityForID } from "../../../services/IBGE";
import { IoIosNotificationsOutline, IoIosFolder } from "react-icons/io";

const AdminHeader = () => {
	const [windowDimenion, detectHW] = useState({
		winWidth: window.innerWidth,
		winHeight: window.innerHeight,
	});

	const detectSize = () => {
		detectHW({
			winWidth: window.innerWidth,
			winHeight: window.innerHeight,
		});
	};
	useEffect(() => {
		window.addEventListener("resize", detectSize);

		if (window.innerWidth >= 958) {
			setSidebar(false);
		}

		return () => {
			window.removeEventListener("resize", detectSize);
		};
	}, [windowDimenion]);

	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => {
		setSidebar(!sidebar);
	};

	const [formValues, setFormValues] = useContext(LocalContext);
	const [cityName, setCityName] = useState("");

	fetchCityForID(formValues.city).then((city) => {
		setCityName(city);
	});

	useEffect(() => {
		if (JSON.parse(localStorage.getItem("locationLocalStorage")) !== null) {
			const data = JSON.parse(
				localStorage.getItem("locationLocalStorage")
			);

			if (data.city !== undefined && data.state !== undefined) {
				setFormValues({
					...formValues,
					state: data.state,
					city: data.city,
				});
			}
		}

		/*if (formValues.state === undefined || formValues.city === undefined) {
			navigate("/location");
		}*/
	}, []);

	useEffect(() => {
		localStorage.setItem(
			"locationLocalStorage",
			JSON.stringify(formValues)
		);
	});

	const navigate = useNavigate();

	return (
		<>
			<Sidebar sidebar={sidebar} showSidebar={showSidebar} />
			<HeaderContainer>
				<ContainerLogo>
					<Link to="/admin" className="logo">
						{" "}
						<img
							src={
								process.env.PUBLIC_URL +
								"/assets/img/home_logo_branco.png"
							}
							alt="Logo"
						/>
					</Link>
					<div
						style={{ color: "white", cursor: "pointer" }}
						onClick={() => /*setFormValues({ undefined })*/ {
							setFormValues({
								state: undefined,
								city: undefined,
							});
							navigate("/location");
						}}
					>
						<span>
							{formValues.state}, {cityName}
						</span>
					</div>
				</ContainerLogo>

				<ContainerCenter>
					<h1 style={{ cursor: "default" }}> UnespSCity </h1>
				</ContainerCenter>

				{windowDimenion.winWidth >= 958 ? (
					<ContainerActions>
						<div> <Notifications /> </div>
						<div> <Historic /> </div>
						<div>
							<UserClickHandle>
								<SlideDownMenu />
							</UserClickHandle>
						</div>
					</ContainerActions>
				) : (
					<ContainerActions>
						<div></div>
						<FaIcons.FaBars
							style={{ cursor: "pointer" }}
							color={"white"}
							size={25}
							onClick={() => showSidebar()}
						/>
					</ContainerActions>
				)}
			</HeaderContainer>
		</>
	);
};

const UserClickHandle = (props) => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<a href="#" onClick={() => setOpen(!open)}>
				<BiUser
					style={{ cursor: "pointer" }}
					color={"white"}
					size={30}
					className="glow-effect"
				/>
			</a>

			{open && props.children}
		</>
	);
};

const Notifications = () => {
	const navigate = useNavigate();
	return (
		<div href="#" onClick={() => navigate("/notifications")}>
			<IoIosNotificationsOutline
				style={{ cursor: "pointer" }}
				color={"white"}
				size={30}
				className="glow-effect"
			/>
		</div>
	);
};

const Historic = () => {
	const navigate = useNavigate();
	return (
		<div href="#" onClick={() => navigate("/admin_historico")}>
			<IoIosFolder
				style={{ cursor: "pointer" }}
				color={"white"}
				size={23}
				className="glow-effect"
			/>
		</div>
	);
};

export default AdminHeader;