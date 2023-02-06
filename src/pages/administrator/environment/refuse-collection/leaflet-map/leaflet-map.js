import React, {useEffect, useState, useRef, useContext, Component} from "react";
import { Button, ButtonGroup, RadioGroup, FormControlLabel, Radio , FormGroup, Checkbox, TextField} from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup, Polygon, Polyline, FeatureGroup } from 'react-leaflet';
import { EditControl } from "react-leaflet-draw";
import { Container, InputPontosContainer } from "./styles";
import './leaflet-map.css';
import "leaflet-routing-machine";
import { fetchLatLong } from "../../../../../services/GoogleMaps";
import { fetchCityForID } from "../../../../../services/IBGE";
import { api } from "../../../../../services/api";
import LocalContext from "../../../../user-location/Context";
import locFaker from "./map-functions";

const initialValues = {
    dom: false,
    seg: false,
    ter: false,
    qua: false,
    qui: false,
    sex: false,
    sab: false,
}

function AdmLeafLetMap() {
    const [cityName, setCityName] = useState("");
    const [formValues, setFormValues] = useContext(LocalContext);
    const mapRef = useRef();
    const [userLocationCoords, setUserLocationCoords] = useState({lat: -10, lng: -50});
    const [newPolygon, setPolygon] = useState(undefined);
    const [newRoute, setRoute] = useState(undefined);
    const [data, setData] = useState([]);
    const [selectedDays, setSelectedDays] = useState(initialValues);
    const [selectedType, setSelectedType] = useState("");
	const [isLoading, setLoading] = useState(true);
    const horaInicioRef = useRef();
    const horaFimRef = useRef();
    const [truckPosition, setTruckPosition] = useState({lat: -10, lng: -50});
    const drawModeFirstTime = useRef(false);
    const [drawMode, setDrawMode] = useState(false);
    const intervalRef = useRef();

    const updateTruckPosition = () => {
        let i = 0;
        intervalRef.current = setInterval(() => {
            if (drawMode) return;
            setTruckPosition(locFaker[i]);
            i++;
            if (i === locFaker.length) {
                i = 0;
            }
        }, 10000);
    }
    useEffect(() => {
        if (drawModeFirstTime.current) {
            drawModeFirstTime.current = !drawModeFirstTime.current;
            return;
        }

        if (drawMode) {
            clearInterval(intervalRef.current);
        } else {
            updateTruckPosition();
        }
        return () => {
            clearInterval(intervalRef.current);
        }
    }, [drawMode]);

    fetchCityForID(formValues.city).then((city) => {
		setCityName(city);
	}); //API DO IBGE, SEM PROBLEMAS DE COBRANCA

	useEffect(() => {
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

    const handleOnCreated = (e) => {
        const { layerType, layer } = e;
        if (layerType === "polygon") {
            setPolygon(layer);
        }
        if (layerType === "polyline") {
            setRoute(layer);
        }
    };

    const handleOnDeleted = (e) => {
        const { layerType } = e;
        if (layerType === "polygon") {
            setPolygon(undefined);
        }

        if (layerType === "polyline") {
            setRoute(undefined);
        }
    }

    const verifyInputs = () => {
        if (newPolygon === undefined) {
            alert("Desenhe um polígono da área da rota!!");
            return true;
        }

        if (newRoute === undefined) {
            alert("Desenhe uma rota!!");
            return true;
        }

        for (const day in selectedDays) {
            if (selectedDays[day] === true) {
                break;
            }
            alert("Selecione os dias de coleta!!");
            return true;
        }

        if (selectedType === "") {
            alert("Selecione o tipo de coleta!!");
            return true;
        }

        return false;
    }

    const handleSave = () => {
        
        if (verifyInputs()) {
            return;
        }

        let polygonCoords = newPolygon.getLatLngs();
        polygonCoords = polygonCoords[0]; //por algum motivo desconhecido, esse método retorna um array de array, então é preciso pegar o primeiro elemento q seria o array de coordenadas
        const routeCoords = newRoute.getLatLngs();

        const horaInicio = horaInicioRef.current.value;
        const horaFim = horaFimRef.current.value;

        const data = {
            cityId: formValues.city,
            route: routeCoords,
            polygon: polygonCoords,
            operatingDays: selectedDays,
            typeOfRefuse: selectedType,
            startTime: horaInicio,
            finishTime: horaFim,
        };

        console.log(data);

        const res = api.post("/refuse", data).then((res) => {
            if (res) {
                alert("Rota cadastrada com sucesso!!");
                return;
            }
        }).catch((err) => {
            console.log(err);
        });

        setPolygon(undefined);
        setRoute(undefined);
        
        console.log(res);
    }

    const handleCheckBoxChange = (event, index) => {
        switch(index){
            case 0: setSelectedDays({...selectedDays, dom: event.target.checked}); break;
            case 1: setSelectedDays({...selectedDays, seg: event.target.checked}); break; 
            case 2: setSelectedDays({...selectedDays, ter: event.target.checked}); break;
            case 3: setSelectedDays({...selectedDays, qua: event.target.checked}); break;
            case 4: setSelectedDays({...selectedDays, qui: event.target.checked}); break;
            case 5: setSelectedDays({...selectedDays, sex: event.target.checked}); break;
            case 6: setSelectedDays({...selectedDays, sab: event.target.checked}); break;              
        }

    };

    const handleRadioChange = (event) => {
        setSelectedType(event.target.value);
    };

    const handleDrawModeChange = (event) => {
        if (event.target.checked === true) {
            setDrawMode(true);
            clearInterval(intervalRef.current);
            return;
        }
        
        setDrawMode(false);
        updateTruckPosition(); 
    };
        

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

                {drawMode ? <></> : <Marker position={truckPosition} > <Popup> Caminhão de Coleta </Popup> </Marker>}

                {
                    data.map((element) => {
                        return (
                            <>
                                <Polygon positions={element.polygon} color="red" >
                                    <Popup>
                                    Área da rota <br/>
                                    Horário de coleta: {element.startTime} - {element.finishTime} <br/>
                                    Dias de coleta: {getDiasColeta(element)} <br/>
                                    Tipo de coleta: {getTipoColeta(element)} <br/>
                                    </Popup>
                                </Polygon>
                                <Polyline positions={element.route} color="blue" >
                                    <Popup>
                                        rota
                                    </Popup>
                                </Polyline>
                            </>
                        );
                    })
                }

                <FeatureGroup>
                    <EditControl
                        position='topright'
                        onCreated={e => {
                            handleOnCreated(e);
                        }}
                        onDeleted={e => {
                            handleOnDeleted(e);
                        }}
                        
                        draw={{
                            rectangle: false,
                            circle: false,
                            circlemarker: false,
                            marker: false,

                            polyline: true,
                            polygon: {
                                allowIntersection: false,
                                drawError: {
                                    color: '#e1e100',
                                    message: '<strong>Oh snap!<strong> you can\'t draw that!',
                                },
                                shapeOptions: {
                                    color: '#97009c',
                                },
                            },
                        }}
                        />
                </FeatureGroup>
            </MapContainer>

            <InputPontosContainer>
                    {/* flex coloum */}
                    <RadioGroup row aria-label="position" name="position" defaultValue="top">
                        <FormControlLabel value="organic" control={<Radio onChange={handleRadioChange}/>} label="Orgânico" />
                        <FormControlLabel value="reciclable" control={<Radio onChange={handleRadioChange}/>} label="Reciclável" />
                    </RadioGroup>
                    
                    {/* grid with four columns with 5px margin left */}
                    <FormGroup row sx={{marginLeft: 5}}>
                        <FormControlLabel control={<Checkbox onChange={(event) => handleCheckBoxChange(event, 0)} />} label="Dom" />
                        <FormControlLabel control={<Checkbox onChange={(event) => handleCheckBoxChange(event, 1)} />} label="Seg"/>
                        <FormControlLabel control={<Checkbox onChange={(event) => handleCheckBoxChange(event, 2)} />} label="Ter" />
                        <FormControlLabel control={<Checkbox onChange={(event) => handleCheckBoxChange(event, 3)} />} label="Qua" />
                        <FormControlLabel control={<Checkbox onChange={(event) => handleCheckBoxChange(event, 4)} />} label="Qui" />
                        <FormControlLabel control={<Checkbox onChange={(event) => handleCheckBoxChange(event, 5)} />} label="Sex" />
                        <FormControlLabel control={<Checkbox onChange={(event) => handleCheckBoxChange(event, 6)} />} label="Sab" />
                    </FormGroup>
                    {/* get hour inputs inline */}
                    <TextField
                        id="time"
                        label="Hora de início"
                        type="time"
                        defaultValue="07:30"
                        sx={{width: 150}}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            step: 300, // 5 min
                        }}
                        inputRef={horaInicioRef}
                    />
                    <TextField
                        id="time"
                        label="Hora de término"
                        type="time"
                        defaultValue="07:30"
                        sx={{width: 150, marginTop: 2}}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            step: 300, // 5 min
                        }}
                        inputRef={horaFimRef}
                    />


                    <ButtonGroup>
                        <Button type="submit" onClick={handleSave}>
                            Salvar Nova Rota
                        </Button>
                    </ButtonGroup>

                    {/* draw mode checkbox */}
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={drawMode}
                                onChange={(event) => handleDrawModeChange(event)}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                        }
                        label="Modo Desenho"
                    />

            </InputPontosContainer>
        </Container>
    );
}

export default AdmLeafLetMap;