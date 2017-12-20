//javascript for macro manager

$(document).ready(function() {


    var URL = "https://api.edamam.com/search%";
    var apiKey = "app_key=bb6760c1841801cc559cf31d43145900%";
    var appID = "app_id=6a2a24ba%";
    var q = "q=chicken";
    var queryURL = URL+apiKey+appID+q;

    $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
        console.log(response);

      });


console.log("test");

});