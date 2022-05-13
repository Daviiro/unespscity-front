import React, { useState } from "react";
import { Popup } from "./styles";
import "./modal.css";
import { Link } from "react-router-dom";

const PopUp = (props) => {
	console.log(props.linkItems);
	const teste = "tsete";
	return (
		<div onClick={props.setTrigger}>
			{props.trigger && (
				<div className="modal">
					<div className="overlay">
						<div className="modal-content">
							<button
								className="close-modal"
								onClick={props.setTrigger}
							>
								X
							</button>
							{props.linkItems.map((item) => (
								<Link to={item.link}>
									<div>{item.name}</div>
								</Link>
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default PopUp;
