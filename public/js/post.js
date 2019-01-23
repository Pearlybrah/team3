$(document).ready(function() {
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
          $("#gift-info-" + i).append("<span class='item-title'>" + data[i].title + "</span>");
          $("#gift-info-" + i).append("<span class='item-location'>" + data[i].location + "</span>");
          $("#gift-info-" + i).append("<img src=" + data[i].image + " + />");
        }
      }
    });
  };

  getGifts();
});
