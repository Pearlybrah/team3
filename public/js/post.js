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
            .append("<img src=" + data[i].image + " />")
            .attr("multipart/form-data");

          console.log(data[i]);
        }
      }
    });
  };

  $("#downers").hide();

  const showAll = () => {
    $("#downers").show();
  };

  $(".downward_arrow").on("click", showAll);

  getGifts();
});
