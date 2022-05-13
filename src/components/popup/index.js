import React, { useState } from "react";
import { Modal, ModalContent, CloseModal, Table, Tbody, Tr } from "./styles";
import { Link } from "react-router-dom";

const PopUp = (props) => {
	console.log(props.linkItems);

	return (
		<div onClick={props.setTrigger}>
			{props.trigger && (
				<Modal>
					<Modal className="overlay">
						<ModalContent>
							{/*
							<CloseModal onClick={props.setTrigger}>
								X
							</CloseModal>
							*/}

							<Table style={{ textDecoration: "none" }}>
								<Tbody>
									{props.linkItems.map((item) => (
										<Tr>
											<Link
												to={item.link}
												style={{
													textDecoration: "none",
												}}
											>
												<span>{item.name}</span>
											</Link>
										</Tr>
									))}
								</Tbody>
							</Table>
						</ModalContent>
					</Modal>
				</Modal>
			)}
		</div>
	);
};

export default PopUp;
