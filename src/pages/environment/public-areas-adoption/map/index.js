import React from "react";
import Map from "../../../../components/forms/ServiceOrderInformation/Map";
import { ContainerBase } from "../../../../services/map-page/styles";

const PublicAreasMap = () => {
    return (
        <>
            <ContainerBase>
                <Map />
            </ContainerBase>
        </>
    );
};

export default PublicAreasMap;