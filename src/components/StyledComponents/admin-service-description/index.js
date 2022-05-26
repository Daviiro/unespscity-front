import React from "react";
import { GrayLine, ServiceContainer } from "./styles";

const AdminServiceDescription = (props) => {
    return (
        <ServiceContainer>
            <h3> {props.description} </h3>
            <GrayLine/>
        </ServiceContainer>
    );
};

export default AdminServiceDescription;