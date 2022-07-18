import React from "react";
import Map from "../../../../components/forms/ServiceOrderInformation/Map";
import { ContainerBase } from "../../../../services/map-page/styles";

const PollutionMap = () => {
    return (
        <>
            <ContainerBase>
                <Map />
            </ContainerBase>
        </>
    );
};

export default PollutionMap;