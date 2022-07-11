import React, { useState, useEffect, useContext } from "react";
import {
	HeaderContainer,
	ContainerActions,
	ContainerLogo,
	ContainerCenter,
} from "./styles";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
import * as FaIcons from "react-icons/fa";

import { BiUser } from "react-icons/bi";
import SlideDownMenu from "./slide-down-menu";
import { FiSettings } from "react-icons/fi";
import LocalContext from "../../pages/user-location/Context";
import { fetchCityForID } from "../../services/IBGE";

const Header = () => {
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
		} else {
			navigate("/location");
		}
	}, []);

	useEffect(() => {
		if (formValues !== null) {
			localStorage.setItem(
				"locationLocalStorage",
				JSON.stringify(formValues)
			);
		}

		if (formValues.state === undefined || formValues.city === undefined) {
			navigate("/location");
		}
	});

	const navigate = useNavigate();

	return (
		<>
			<Sidebar sidebar={sidebar} showSidebar={showSidebar} />
			<HeaderContainer>
				<ContainerLogo>
					<Link to="/" className="logo">
						{" "}
						<img
							src={
								process.env.PUBLIC_URL +
								"/assets/img/home_logo_temporario.png"
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
						<div>
							<Link
								to="/login"
								style={{ textDecoration: "none" }}
							>
								<BiUser
									style={{ cursor: "pointer" }}
									color={"white"}
									size={30}
									className="glow-effect"
								/>
							</Link>
						</div>
						<div>
							<Settings>
								<SlideDownMenu />
							</Settings>
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

const Settings = (props) => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<a href="#" onClick={() => setOpen(!open)}>
				<FiSettings
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

export default Header;
