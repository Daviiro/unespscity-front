import React, { useState } from "react";
import  DengueMap from "../../pages/pest-control/dengue-radar/map";
import { ContainerBase } from "./styles";

const MapPageDengue = () => {
    
    const [locations, setLocations] = useState([
		{
			id: 1,
			location: {
				lat: -22.1159641,
				lng: -51.4070265,
			},
		},
		{
			id: 2,
			location: {
				lat: -22.1214422,
				lng: -51.4075171,
			},
		},
		{
			id: 3,
			location: {
				lat: -22.1131517,
				lng: -51.4119613,
			},
		},
		{
			id: 4,
			location: {
				lat: -22.1052299,
				lng: -51.3998977,
			},
		},
		{
			id: 5,
			location: {
				lat: -22.0961994,
				lng: -51.4154257,
			},
		},
		{
			id: 6,
			location: {
				lat: -22.1234142,
				lng: -51.4268159,
			},
		},
		{
			id: 7,
			location: {
				lat: -22.1170895,
				lng: -51.4030536,
			},
		},
		{
			id: 8,
			location: {
				lat: -22.0978330,
				lng: -51.4065919,
			},
		},
		{
			id: 9,
			location: {
				lat: -22.1187192,
				lng: -51.4138216,
			},
		},
		{
			id: 10,
			location: {
				lat: -22.1234442,
				lng: -51.4036667,
			},
		},
		{
			id: 11,
			location: {
				lat: -22.1019012,
				lng: -51.4099006,
			},
		},
		{
			id: 12,
			location: {
				lat: -22.1076602,
				lng: -51.4217717,
			},
		},
		{
			id: 13,
			location: {
				lat: -22.1042070,
				lng: -51.4289610,
			},
		},
		{
			id: 14,
			location: {
				lat: -22.1085956,
				lng: -51.3981554,
			},
		},
		{
			id: 15,
			location: {
				lat: -22.1063268,
				lng: -51.3922527,
			},
		},
	]);
    
    return (
        <>
            <ContainerBase>
                <DengueMap
					locations = {locations}
					icon = "/assets/img/dengue-icon.png"
				/>
            </ContainerBase>
        </>
    );
};

export default MapPageDengue;