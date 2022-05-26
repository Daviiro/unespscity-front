import React from "react";

const Footer = () => {
	return (
		<>
			<img
				src={process.env.PUBLIC_URL + "/assets/img/bottom_art.png"}
				alt="Page Bottom Art"
				style={{
					width: "100%",
					height: "auto",
					margin: "0",
					opacity: "0.95",
				}}
			/>
		</>
	);
};

export default Footer;
