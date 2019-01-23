//   array for map markers
var markers = [];
// document ready stops the markers from loading properly
// $(document).ready(function() {
  const getGifts = () => {
    $.get("/api", function(data) {
      if (!data || !data.length) {
        alert("there is nothing to give away yet, start posting!");
      } else {
        for (let i = 0; i < data.length; i++) {
          var giftSection = $("<div>");
          giftSection.attr("id", "gift-info-" + i);
          giftSection.attr("class", "item-profile");
          $("#items").append(giftSection);
 css-styling-and-item-experiments
          $("#gift-info-" + i).append("<span class='item-title'>" + data[i].title + "</span>");
          $("#gift-info-" + i).append("<span class='item-location'>" + data[i].location + "</span>");
          $("#gift-info-" + i).append("<img src=" + data[i].image + " + />");


          $("#gift-info-" + i).append("<p>Name: " + data[i].title + "</p>");
          $("#gift-info-" + i).append(
            "<p>Category: " + data[i].category + "</p>"
          );
          $("#gift-info-" + i).append(
            "<p>Description: " + data[i].description + "</p>"
          );
          $("#gift-info-" + i).append(
            "<p>Condition: " + data[i].condition + "</p>"
          );
          $("#gift-info-" + i).append(
            "<p>Location: " + data[i].location + "</p>"
          );
		  $("#gift-info-" + i).append("<img src=" + data[i].image + " />");
		  
		  if (data[i].location !== "undefined*undefined*undefined") {
			  var pin = data[i].location.split("*");
			  markers.push({
				  coords: {lat: parseFloat(pin[0]), lng: parseFloat(pin[1])},
				  // changes
				  content: `${data[i].title}<br>${data[i].description}<br>${pin[2]}`
			  });
		  }

        }
      }
    });
  };

  getGifts();
// });
