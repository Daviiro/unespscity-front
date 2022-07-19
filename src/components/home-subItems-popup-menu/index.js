import React from "react";
import { Modal, ModalContent, CloseModal, Table, Tbody, Tr } from "./styles";
import { useNavigate } from "react-router-dom";

const PopUp = (props) => {
	const navigate = useNavigate();
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
									{props.linkItems
										.sort((a, b) => {
											//ordenando alfabeticamente
											return a.name.localeCompare(b.name);
										})
										.map((item) => (
											<Tr
												key={item.id}
												onClick={() =>
													navigate(`../${item.link}`)
												}
											>
												<td>
													{/*<Link
													to={item.link}
													style={{
														textDecoration: "none",
														width: "100%",
													}}
												>*/}
													<span
														style={{
															width: "100%",
														}}
													>
														{item.name}
													</span>
													{/*</Link>*/}
												</td>
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
