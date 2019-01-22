$(document).ready(function() {
  const getGifts = () => {
    $.get("/api", function(data) {
      if (!data || !data.length) {
        alert("there is nothing to give away yet, start posting!");
      } else {
        for (let i = 0; i < data.length; i++) {
          var giftSection = $("<div>");
          giftSection.attr("id", "gift-info-" + i);
          $("#items").append(giftSection);

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
        }
      }
    });
  };
  //refresh the div -- in progress ---
  function refreshDiv() {
    app.get("/api", function(data) {
      for (let i = 0; i < data.length; i++) {
        var giftSection = $("<div>");
        giftSection.attr("id", "gift-info-" + i);
        $("#items").append(giftSection);

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
      }
    });
  }

  var refresh = $("#refresh");
  refresh.addEventListener("click", refreshDiv, true);

  getGifts();
});
