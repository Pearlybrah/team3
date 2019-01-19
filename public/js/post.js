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
          $("#gift-info-" + i)
            .append("<img />")
            .attr("src", data[i].image);

          console.log(data[i]);
        }
      }
    });
  };

  const clearTableGifts = () => {
    $.ajax({ url: "/api/clear", method: "POST" }).then(function() {
      $("#items").empty();
    });
  };

  $("#downward_arrow").on("click", clearTableGifts);

  $(".submit").on("click", function(event) {
    event.preventDefault();

    let giftData = {
      title: $("#gift-name")
        .val()
        .trim(),
      category: $("#gift-category")
        .val()
        .trim(),
      description: $("#gift-description")
        .val()
        .trim(),
      condition: $("#gift-condition")
        .val()
        .trim(),
      location: $("#gift-location")
        .val()
        .trim(),
      image: $("#gift-image")
        .val()
        .trim()
    };
    console.log(giftData);

    $.post("/api/gifts", giftData).then(function(data) {
      console.log(data);
    });
    $("#gift-name")
      .val()
      .trim(),
      $("#gift-category")
        .val()
        .trim(),
      $("#gift-description")
        .val()
        .trim(),
      $("#gift-condition")
        .val()
        .trim(),
      $("#gift-location")
        .val()
        .trim(),
      $("#gift-image")
        .val()
        .trim();
  });

  getGifts();
});
