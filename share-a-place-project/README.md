## Continuing without a Credit Card
Using Google Maps unfortunately requires a credit card, even though you got a generous free tier which you very likely wouldn't exceed.

If you got no credit card, you can look into OpenLayers as an alternative (here's how to render a map with it: https://openlayers.org/doc/quickstart.html).

In our concrete example, this would render a map:

Include this in your HTML file:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.1.1/css/ol.css" type="text/css">

<script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.1.1/build/ol.js"></script>
```

In `Map.js`, use this JS code:

```javascript
document.getElementById('map').innerHTML = ''; // clear the <p> in the <div id="map">
 
const map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([coordinates.lng, coordinates.lat]),
    zoom: 16
  })
});
```
You can explore the OpenLayers docs to learn how to render a broad variety of different things.


## Google API to convert a pair of coordinates into an address and vice versa
1. [Visit this official google resource](https://developers.google.com/maps/documentation/geocoding/overview)