import React, {useEffect, useState, useRef, useContext} from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Container, InputPontosContainer } from "./styles";
import { TextField, Button, ButtonGroup, Typography } from "@mui/material";
import './leaflet-map.css';
import { useGeoLocation } from "./map-functions";
import L from "leaflet";
import "leaflet-routing-machine";
import { api } from "../../../../services/api";
import { fetchLatLong } from "../../../../services/GoogleMaps";
import { fetchCityForID } from "../../../../services/IBGE";
import LocalContext from "../../../user-location/Context";
import locFaker from "./map-functions";


function LeafLetMap() {
    const [cityName, setCityName] = useState("");
    const [formValues, setFormValues] = useContext(LocalContext);
    const mapRef = useRef();
    const addressRef = useRef();
    const location = useGeoLocation();
    const [userLocationCoords, setUserLocationCoords] = useState({lat: -10, lng: -50});
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [truckPosition, setTruckPosition] = useState({lat: -10, lng: -50});
    const [showArrivalTime, setShowArrivalTime] = useState(false);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setTruckPosition(locFaker[i]);
            i++;
            if (i === locFaker.length) {
                i = 0;
            }
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    fetchCityForID(formValues.city).then((city) => {
		setCityName(city);
	}); //API DO IBGE, SEM PROBLEMAS DE COBRANCA

	useEffect(() => {
		const interval = setInterval(() => {
            if (formValues.city !== undefined) {
			fetchCityForID(formValues.city).then((city) => {
				setCityName(city);
			}); //API DO IBGE, SEM PROBLEMAS DE COBRANCA
			if (cityName != "") {
				fetchLatLong(cityName).then((data) => {
					setUserLocationCoords({
                        lat: data.results[0].geometry.location.lat,
                        lng: data.results[0].geometry.location.lng,
                    });
				});
			} //DENTRO DESTE TEM A API DO GEOCODE, DE JEITO NENHUM CRIE UM LOOP NESTE USEEFFECT
		    }
        }, 2 * 60 * 1000);
        return () => clearInterval(interval);
	}, [cityName]);

    //recuperar dados do backend
	const fetchData = async () => {
		try {
            const { data } = await api.get("/refuse/all"); //pega todos os dados do backend
            let dataJson = data.map((element) => {
                element.polygon = JSON.parse(element.polygon);
                element.route = JSON.parse(element.route);
                element.operatingDays = JSON.parse(element.operatingDays);
                return element;
            });
            setData(dataJson);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
	};
	useEffect(() => {
		fetchData();
    }, []);

    useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyAyL6LiHvrtlZvM6nq5qzkuhed1RiFe1kk'
    });

    async function showMyLocation () {
        if (location.loaded && !location.error) {
            setUserLocationCoords({
                lat: location.coordinates.lat,
                lng: location.coordinates.lng,
            });
            mapRef.current.flyTo([userLocationCoords.lat, userLocationCoords.lng], 12);
        }
    }

    async function showAddrLocation() {
        if (addressRef.current.value === '') {
            alert('Digite um endereço!');
            return;
        }
		fetchLatLong(addressRef.current.value).then((data) => {
            setUserLocationCoords({
                lat: data.results[0].geometry.location.lat,
                lng: data.results[0].geometry.location.lng,
            });
        });
        mapRef.current.flyTo([userLocationCoords.lat, userLocationCoords.lng], 12);
	}

    function getArrivalTime() {
        return Math.abs(locFaker.length - locFaker.findIndex((element) => {
            return element.lat === truckPosition.lat && element.lng === truckPosition.lng;  
        })) * 10;
    }

    function searchRoute() {
        data.map((element) => {

            const inside = isMarkerInsidePolygon(element.polygon);

            if (inside) {
                // let control = L.Routing.control({
                //     waypoints: element.route,
                //     routeWhileDragging: false,
                //     lineOptions: {
                //         styles: [{color: 'blue', opacity: 0.5, weight: 3}],
                //         addWaypoints: false,
                //     },
                //     createMarker: null,
                    
                    
                // }).addTo(mapRef.current);

                // // Remove the route itinerary from the map
                // control.hide();  

                L.polygon(element.polygon, {color: ''}).addTo(mapRef.current).bindPopup(
                    `<div>
                        <h3>Coleta de ${getTipoColeta(element)}</h3>
                        <p>Dias de coleta: ${getDiasColeta(element)}</p>
                        <p>Horário de coleta: ${element.startTime} -  ${element.finishTime}</p>
                    </div>`
                );
                L.polyline(element.route, {color: 'blue'}).addTo(mapRef.current);
                const horaAtual = new Date().getHours();
                const minutoAtual = new Date().getMinutes();
                const horaComecoColeta = element.startTime.split(":")[0];
                const minutoComecoColeta = element.startTime.split(":")[1];
                const horaFimColeta = element.finishTime.split(":")[0];
                const minutoFimColeta = element.finishTime.split(":")[1];
                if (horaAtual >= horaComecoColeta && horaAtual <= horaFimColeta) {
                    if (horaAtual === horaComecoColeta && minutoAtual < minutoComecoColeta) {
                        alert("A coleta ainda não começou!");
                        setShowArrivalTime(false);
                    } else if (horaAtual === horaFimColeta && minutoAtual > minutoFimColeta) {
                        alert("A coleta já terminou!");
                        setShowArrivalTime(false);
                    } else {
                        alert("A coleta já começou!");
                        setShowArrivalTime(true);
                    }
                } else {
                    alert("A coleta ainda não começou!");
                    setShowArrivalTime(false);
                }
                return;
            }
        }); 
    }

    
    function isMarkerInsidePolygon(polygon) {
        let polyPoints = polygon.map((point) => {
            return [point.lat, point.lng];
        });
        let x = userLocationCoords.lat, y = userLocationCoords.lng;

        let inside = false;
        for (let i = 0, j = polyPoints.length - 1; i < polyPoints.length; j = i++) {
            let xi = polyPoints[i][0], yi = polyPoints[i][1];
            let xj = polyPoints[j][0], yj = polyPoints[j][1];

            let intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
            if (intersect) inside = !inside;
        }

        return inside;
    }

    const getDiasColeta = (element) => {
        let diasColeta = "";
        for (const day in element.operatingDays) {
            if (element.operatingDays[day] === true) {
                diasColeta += day + ", ";
            }
        }
        diasColeta = diasColeta.substring(0, diasColeta.length - 2);
        return diasColeta;
    }

    const getTipoColeta = (element) => {
        return element.typeOfRefuse === 'organic' ? "Orgânico" : "Reciclável";
    }

    if (isLoading) {
        return <div>Carregando...</div>;
    }

    return (
        <Container>
            <MapContainer center={[userLocationCoords.lat, userLocationCoords.lng]} zoom={12} scrollWheelZoom={true} ref={mapRef}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />

                <Marker position={[userLocationCoords.lat, userLocationCoords.lng]}>
                    <Popup>
                        Você está aqui.
                    </Popup>        
                </Marker>

            </MapContainer>
            
            <InputPontosContainer>
                    
                    <Typography variant="" component="div" sx={{ flexGrow: 1 }}>
                        Endereço ou Localização:
                    </Typography>

                    <TextField
                        type="text"
                        placeholder="Meu Endereço"
                        inputRef={addressRef}
                    />
                    <br />

                    <ButtonGroup>					
                        <Button type="submit" onClick={showAddrLocation}>
                            Meu Endereço
                        </Button>
                        <Button type="submit" onClick={showMyLocation}>
                            Localização
                        </Button>
                    </ButtonGroup>

                    <br />

                    <ButtonGroup>
                        <Button type="submit" onClick={searchRoute}>
                            Procurar Rota
                        </Button>
                    </ButtonGroup>

                    <br />
                    {showArrivalTime ? <Typography>Tempo estimado de chegada: {getArrivalTime()} segundos </Typography> : null}

            </InputPontosContainer>
        </Container>
    );
}

export default LeafLetMap;