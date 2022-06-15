import React from "react";
import FormButton from "../styled-components/form-button";
import { Modal, ModalContent, CloseModal } from "./styles";

const PopUpMap = (props) => {
    const GOOGLE_API_KEY = "AIzaSyBQ7EzutsOQVslr8TE5Zh2s5XKK50Q4Oo8";

    function contructor (props) {
        //super (props);
        this.state = {
            latitude: null,
            longitude: null,
            userAdress: null,
        };
        this.getLocation = this.getLocation.bind(this);
    }

	return (
		<div onClick = {props.setTrigger}>
			{props.trigger && (
				<Modal>
					<Modal className = "overlay">
						<ModalContent>
							{/*
							<CloseModal onClick={props.setTrigger}>
								X
							</CloseModal>
							*/}
						</ModalContent>
					</Modal>
				</Modal>
			)}
		</div>
	);
};

export default PopUpMap;
