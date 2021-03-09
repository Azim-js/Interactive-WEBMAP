
export class Map{
    constructor(coords){
        // this.coordinates=coords;
        this.render(coords);
    }
    render(coordinates){
        // if(!google){
        //     alert('couldnot load map libraries!');
        //     return;
        // }

        document.getElementById('map').innerHTML =''; // clear the <p> in the <div id="map">
 
const map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([coordinates.lang, coordinates.lat]),
    zoom:16
  })
});
var layer = new ol.layer.Vector({
  source: new ol.source.Vector({
      features: [
          new ol.Feature({
              geometry: new ol.geom.Point(ol.proj.fromLonLat([coordinates.lang, coordinates.lat]))
          })
      ]
  })
});
map.addLayer(layer);

    }
}