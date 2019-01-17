$(document).ready(function() {
  const getGifts = () => {
    $.get("/api/gifts", function(data) {
      for (let i = 0; i < data.length; i++) {
        let giftDiv = "<div>";
        giftDiv.addClass("gift");
        giftDiv.attr("id", "gift-info-" + i);
        $("#items").append(giftDiv);

        $("#gift-info-" + i).append("<h2>" + data[i].title + "</h2>");
        $("#gift-info-" + i).append("<h2>" + data[i].category + "</h2>");
        $("#gift-info-" + i).append("<h2>" + data[i].description + "</h2>");
        $("#gift-info-" + i).append("<h2>" + data[i].location + "</h2>");
        $("#gift-info-" + i).append("<h2>" + data[i].image + "</h2>");
      }
    });
  };

  $(".submit").on("click", function(event) {
    event.preventDefault();

    const validateInput = () => {
      var isValid = true;

      $("#gift-form").each(function() {
        if ($(this).val() === "") {
          isValid = false;
        }
        return isValid;
      });
    };

    if (validateInput()) {
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
    }
  });

  getGifts();
});
