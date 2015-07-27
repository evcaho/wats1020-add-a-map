/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.
   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/
	//this is my on ready handler
$(document).ready (function(){
	//this invokes the Leaflet.js library to draw a map in my map-container divs
	
var map = L.map('map-container').setView([20.676143, -103.3469982], 13);
	var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});

var satLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4']
});

var drawLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4']
});

var mapLayers = { 
    "Map View": drawLayer,   
	"Satellite": satLayer,
    "Open Street Maps": osm
};


L.control.layers(mapLayers).addTo(map);
drawLayer.addTo(map);
//These are my markers of favorite locations in Guadalajara
var marker1 = L.marker([20.6737209, -103.3687607]).addTo(map);
marker1.bindPopup("<b>Chapultepec!</b> Home to hipster coffee shops, cafes, and a great Saturday night street fair");
	
var marker2 = L.marker([20.6737209, -103.33732880000002]).addTo(map);
marker2.bindPopup("<b>Hospicio Cabanas</b> Features stunning murals by Jose Clemente Orozco and modern art exhibitions from artists around the world. Free on Tuesdays");
	
var marker3 = L.marker([20.6240281, -103.24661049999997]).addTo(map);
marker3.bindPopup("<b>Tonala</b> is a pleasant town 10 minutes from Tlaquepaque. It is without question the largest concentration of artisans in Mexico and was a center of pottery making since pre-Hispanic times. Half of the more than 400 workshops here produce a wide variety of high- and low-temperature pottery. Other local artists work with forged iron, cantera stone, brass and copper, marble, miniatures, papier-mâché, textiles, blown glass, and gesso.");

var marker4 = L.marker([20.6737046, -103.35884650000003]).addTo(map);
marker4.bindPopup("<b>Templo Expiatorio</b> The Templo Expiatorio del Santísimo Sacramento is a Catholic church dedicated to the Blessed Sacrament, located in Guadalajara, Jalisco, Mexico. The church is of neo-Gothic style and is considered the greatest work of its kind in Mexico. Its construction began on August 15, 1897 and ended 75 years later in 1972. <b>NOTE: There is a shop across the street called Artisanieves that serves the greatest Nieve de Garaffa in the world</b>");

	var marker5 = L.marker([20.671285, -103.34274700000003]).addTo(map);
marker5.bindPopup("<b>Arena Coliseo</b> is Guadalajara's arena for Lucha Libre wrestling on Sundays and Tuesdays. Matches are very popular with tourists, but watch out if you buy front-row seats: the wrestlers rarely stay inside the ring!");
	
	var marker6 = L.marker([20.672189, -103.36262799999997]).addTo(map);
marker6.bindPopup("<b>La Cafeteria</b> is the most perfect cafe in the world. The weather in Guadalajara is nearly always perfect, so enjoy your chilaquiles, waffles, or breakfast enchiladas in their outside garden patio.");

	// This is a circle I created for the Centro Historico of Guadalajara
	var circle = L.circle([20.6771152, -103.34696109999999], 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(map);
	circle.bindPopup("Guadalajara's Centro Historio");
});
