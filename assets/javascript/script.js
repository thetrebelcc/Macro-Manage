//javascript for macro manager




$(document).ready(function() {


    var URL = "https://api.edamam.com/search?";
    var apiKey = "app_key=995949774bfd326ffc014061f6b2e523&";
    var appID = "app_id=11c5a69a&";
    var q = "q=chicken&";
    var carb = "nutrients[CHOCDF]=30-35";
    var queryURL = URL+apiKey+appID+q+carb;

    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
        //console.log(response.hits);
        for (var i = 0; i<response.hits.length; i++) {
        var carbAmt = response.hits[i].recipe.totalNutrients.CHOCDF.quantity;
        console.log(carbAmt);

        }

      });
});