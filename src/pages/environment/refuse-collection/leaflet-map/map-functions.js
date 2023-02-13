import { useState, useEffect } from 'react';

export const useGeoLocation = () => {
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { lat: 0, lng: 0 },
    });

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation({
                    loaded: true,
                    coordinates: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    },
                });
            });
        }
    }
    , []);

    return location;
};

const locFaker = [
        {lat: -22.12331187271073, lng:-51.38437002790156},
        {lat: -22.122730444079302, lng:-51.3855984795695},
        {lat: -22.12230306765832, lng:-51.386505066171615},
        {lat: -22.121825323789615, lng:-51.387548449914554},
        {lat: -22.12135729185212, lng:-51.387620624621185},
        {lat: -22.120939404874797, lng:-51.387404100465744},
        {lat: -22.121110738680084, lng:-51.38692143206129},
        {lat: -22.121265356813375, lng:-51.386533492969875},
        {lat: -22.121612202279206, lng:-51.38670039699758},
        {lat: -22.122397825013046, lng:-51.387137956236444},
        {lat: -22.123404920083985, lng:-51.387683777555345},
        {lat: -22.12397741490941, lng:-51.38802209654294},
        {lat: -22.125126576332857, lng:-51.38858596153134},
        {lat: -22.125540272148736, lng:-51.38866715808044},
        {lat: -22.126096043396192, lng:-51.387399589653825},
        {lat: -22.125481769784653, lng:-51.38770182127156},
        {lat: -22.12475884569694, lng:-51.38729132756792},
        {lat: -22.123889660378065, lng:-51.3868537683329},
        {lat: -22.122945251026835, lng:-51.386307947027866},
        {lat: -22.12215545250415, lng:-51.38588392056097},
        {lat: -22.121720852489457, lng:-51.38561326537264},
];

export default locFaker;