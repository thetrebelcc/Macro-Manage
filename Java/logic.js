function displayRecipies(){
  var URL = "https://api.edamam.com/search?";
    var apiKey = "app_key=995949774bfd326ffc014061f6b2e523&";
    var appID = "app_id=11c5a69a&";
    var q = "q=chicken&";
    var carb = "nutrients[FIBTG]=30-50";
    var queryURL = URL+apiKey+appID+q+carb;

    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
        console.log(response);
        for (var i = 0; i<response.hits.length; i++) {
        var carbAmt = response.hits[i].recipe.totalNutrients.FIBTG.quantity;
        console.log(carbAmt);

        }

      });
}



//intialze firebase



$(function(){

var config = {
    apiKey: "AIzaSyCniYS4oBy2IDE6UAq80fgX0JDJqElXcQ4",
    authDomain: "macro-55f85.firebaseapp.com",
    databaseURL: "https://macro-55f85.firebaseio.com",
    projectId: "macro-55f85",
    storageBucket: "macro-55f85.appspot.com",
    messagingSenderId: "441697999780"
  };
  firebase.initializeApp(config);

//variabler for the databasse 
  var database = firebase.database();


  //intial Valiues 


//submit buttin starts function 

$('.button1').on("click", function (event) {

  console.log("clicked");

  event.preventDefault();

var name = $("#user-name").val().trim();
var calories = $("#calorie-input").val().trim();
var carbs = $("#carb-input").val().trim();
var fats = $("#fat-input").val().trim();
var proteins = $("#protein-input").val().trim();



  database.ref().set({
    name: name,
    carbs: carbs,
    calories: calories,
    proteins: proteins,
    fats: fats

  });

});

});

$(document).on("click", ".button-1", displayRecipies);


 // database.on("value")
 //    database.ref().on("value", function(snapshot) {

 //      // Log everything that's coming out of snapshot
 //      console.log(snapshot.val());
 //      console.log(snapshot.val().name);
 //      console.log(snapshot.val().weight);
 //      console.log(snapshot.val().calories);
 //      console.log(snapshot.val().proteins);
 //      console.log(snapshot.val().fats);

    
 //      // Handle the errors
 //    }, function(errorObject) {
 //      console.log("Errors handled: " + errorObject.code);
 //    });


