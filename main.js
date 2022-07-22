

//Mapbox ApiKey
const apiKey = 'pk.eyJ1IjoibWVydHNla3UwNyIsImEiOiJjbDM3MjZhMDEwY2tuM3JvMDMweHNrNXN6In0.4UFKNTS36vfVJ7KM2gDtCg';

//Setting my map initial view
const mymap = L.map('map').setView([36.89585383289716, 30.71221053500629], 14);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'ParkyApp &copy; Mapbox</a>',
    maxZoom: 24,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(mymap);


//Adding markers
const marker1 = L.marker([36.888840095155494, 30.70452564170324]).addTo(mymap);
//Adding pop-up message
marker1.bindPopup('VIAPARK OTOPARK&YIKAMA');


//Adding markers
const marker2 = L.marker([36.8863901771444, 30.7104513107456]).addTo(mymap);
//Adding pop-up message
marker2.bindPopup('MEKANIK KATLI OTOPARK');


//Adding markers
const marker3 = L.marker([36.88717964482887, 30.695473855822975]).addTo(mymap);
//Adding pop-up message
marker3.bindPopup('GUVEN OTOPARK');


//Adding markers
const marker4 = L.marker([36.88941666202982, 30.699584697354013]).addTo(mymap);
//Adding pop-up message
marker4.bindPopup('PEHLIVAN OTOPARK');

//Adding markers
const marker5 = L.marker([36.88797506138832, 30.69992802011858]).addTo(mymap);
//Adding pop-up message
marker5.bindPopup('CUMHURIYET OTOPARK');

//Adding markers
const marker6 = L.marker([36.89017177531105, 30.705034946241497]).addTo(mymap);
//Adding pop-up message
marker6.bindPopup('CARSI OTOPARK');

//Adding markers
const marker7 = L.marker([36.88564098358644, 30.7120730629151]).addTo(mymap);
//Adding pop-up message
marker7.bindPopup('YIGIT OTOPARK');

//Adding markers
const marker8 = L.marker([36.88900477903044, 30.70647261042738]).addTo(mymap);
//Adding pop-up message
marker8.bindPopup('BALBEY OTOPARK');