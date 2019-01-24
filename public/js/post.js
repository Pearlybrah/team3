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
        var pin = data[i].location.split("*");
        var giftSection = $("<div>");
        giftSection.attr("id", "gift-info-" + i);
        giftSection.attr("class", "item-profile");
        $("#items").append(giftSection);
        $("#gift-info-" + i).append(
          "<span class='item-title'>" + data[i].title + "</span>"
        );
        $("#gift-info-" + i).append(
          "<span class='item-location'>" + pin[2] + "</span>"
        );
        $("#gift-info-" + i).append(
          "<p style=margin:0 padding:0><strong>" +
            data[i].category +
            "</strong><p>"
        );
        $("#gift-info-" + i).append(
          "<p><strong>Condition: <strong>" + data[i].condition + "</p>"
        );
        $("#gift-info-" + i).append("<img src=" + data[i].image + " />");
        $("#gift-info-" + i).append(
          "<i style=font-size:10px><strong>Detail: <strong>" +
            data[i].description +
            "</i>"
        );
        if (data[i].location !== "undefined*undefined*undefined") {
          markers.push({
            coords: { lat: parseFloat(pin[0]), lng: parseFloat(pin[1]) },
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
