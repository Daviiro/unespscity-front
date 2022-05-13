import React, { useState } from "react";
import { Modal, ModalContent, CloseModal } from "./styles";
import { Link } from "react-router-dom";

const PopUp = (props) => {
	console.log(props.linkItems);

	return (
		<div onClick={props.setTrigger}>
			{props.trigger && (
				<Modal>
					<Modal className="overlay">
						<ModalContent>
							<CloseModal onClick={props.setTrigger}>
								X
							</CloseModal>
							{props.linkItems.map((item) => (
								<Link to={item.link}>
									<div>{item.name}</div>
								</Link>
							))}
						</ModalContent>
					</Modal>
				</Modal>
			)}
		</div>
	);
};

export default PopUp;
