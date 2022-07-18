const KEY = "AIzaSyBQ7EzutsOQVslr8TE5Zh2s5XKK50Q4Oo8";
const BASE_URL = "https://maps.googleapis.com/maps/api";
const responseToJson = (response) => response.json();

export const fetchLocation = (LAT, LNG) => {
	const url = `${BASE_URL}/geocode/json?latlng=${LAT},${LNG}&key=${KEY}`;
	return fetch(url, { cache: "force-cache" }).then(responseToJson);
};

export const fetchLatLong = (adress) => {
	const url = `${BASE_URL}/geocode/json?address=${adress}&key=${KEY}`;
	return fetch(url).then(responseToJson);
};
