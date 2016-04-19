mapkit.init({
  apiKey: "b2af5300a3c2ea9b5d38c782c7d2909dc88d6621",
  bootstrapUrl: "https://gist.githubusercontent.com/TimBroddin/503b4d0e8884ca73de2090daede9c0b1/raw/4941546cff0f669d3dd92c7284b744ae6d240bd1/bootstrap.json"
});

var map = new mapkit.Map('map');
map.showsUserLocationControl = true;
map.zoom=5

var calloutDelegate = {

    calloutContentForAnnotation: function(annotation) {
		var element = document.createElement("div");
        element.className = "mk-standard";

 		var title = element.appendChild(document.createElement("div"));
        title.className = "mk-title";
		title.textContent = annotation.title;

		var subtitle = element.appendChild(document.createElement("div"));
        subtitle.className = "mk-subtitle";
		subtitle.textContent = annotation.subtitle;

        var link = element.appendChild(document.createElement("a"));
        link.href = annotation.data.directionsLink;
        link.textContent = "Get directions";

        return element;
    }
};

var appleStoreBarcelona= new mapkit.Coordinate(41.389040, 2.169540);

var targetOptions = {
		callout: calloutDelegate,
		title: "Apple Store Barcelona",
		subtitle: "Placa catalunya",
		url: {
				1: "https://developer.apple.com/wwdc/images/wwdc16-map-icon-apple-store.png",
				2: "https://developer.apple.com/wwdc/images/wwdc16-map-icon-apple-store_2x.png"
		},
		data: {
        	directionsLink: "http://maps.apple.com/maps?address=Apple Store, Passeig de Gràcia, barcelona, spain&ll=41.389040,2.169540&q=Apple%20Store,%20SBarcelona&t=m"
        },
		// anchorOffset: new DOMPoint(5, 5)
};


map.addAnnotation(new mapkit.ImageAnnotation(appleStoreBarcelona, targetOptions));


// This is how we might implement the Apple red pin if we had to
var appleStoreIcon = {
		url: {
				1: "https://developer.apple.com/wwdc/images/wwdc16-map-icon-apple-store.png",
				2: "https://developer.apple.com/wwdc/images/wwdc16-map-icon-apple-store_2x.png"
		}
};

var airportIcon = {
		url: {
				1: "https://developer.apple.com/wwdc/images/wwdc16-map-icon-airport.png",
				2: "https://developer.apple.com/wwdc/images/wwdc16-map-icon-airport_2x.png"
		}
};

var transitIcon = {
		url: {
				1: "https://developer.apple.com/wwdc/images/wwdc16-map-icon-transit.png",
				2: "https://developer.apple.com/wwdc/images/wwdc16-map-icon-transit_2x.png"
		}
};

var venuesIcon = {
		url: {
      1: "https://developer.apple.com/wwdc/images/wwdc16-map-icon-venues.png",
      2: "https://developer.apple.com/wwdc/images/wwdc16-map-icon-venues_2x.png"
		}
};


var barcelona = new mapkit.CoordinateRegion(
		new mapkit.Coordinate(41.3851, 2.1734),
		new mapkit.CoordinateSpan(0.16, 0.16)
  ), appleStoreBarcelona	= new mapkit.CoordinateRegion(
        new mapkit.Coordinate(41.389040, 2.169540),
        new mapkit.CoordinateSpan(0.005, 0.005)
      )

map.setRegionAnimated(barcelona);
