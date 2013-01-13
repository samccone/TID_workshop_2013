window.TID = window.tid || {}

window.TID.setMap = () ->
  mapbox.load 'samccone.map-kqrmoat7', (o) ->
    map = mapbox.map 'map-hold', o.layer
    markerLayer = mapbox.markers.layer()
    interaction = mapbox.markers.interaction(markerLayer)
    map.addLayer markerLayer
    map.ui.zoomer.add()
    map.eventHandlers[3].remove()
    if window.devicePixelRatio > 1
      map.tileSize = x: 128, y: 128
    map.centerzoom { lat: 37.935108, lon: -79.022798 }, 7
    addMarkers(markerLayer)

    interaction.formatter (feature) ->
      "<h2>#{feature.properties.title}</h2><p class='details'>#{feature.properties.details}</p>"
    $('img[alt="Housing"]').trigger('mouseover')

addMarkers = (markerLayer) ->
 markerLayer.add_feature
  geometry:
    coordinates: [-79.022798,  35.935108]
  properties:
    'marker-color': '#505050'
    'marker-symbol': 'warehouse'
    'title': "Housing"
    'details': "We have a block of rooms available at the Chapel Hill University Inn for a rate of $ 69.95. This reduced rate will be available for registrants until March 10th. When you call, please mention that you will be attending The Image, Deconstructed's workshop to get the rate. </br> <a target='_blank' href='http://www.chapelhilluniversityinn.com'>http://www.chapelhilluniversityinn.com</a>"

 markerLayer.add_feature
  geometry:
    coordinates: [-78.672715,  35.78531]
  properties:
    'marker-color': '#505050'
    'marker-symbol': 'triangle'
    'title': "Workshop"
    'details': ''