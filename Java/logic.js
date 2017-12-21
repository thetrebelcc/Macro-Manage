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

var name ="";

var calories = 0;

var carbs = 0;

var fats = 0;

var proteins = 0;

//submit buttin starts function 

$('.button-1').on("click", function (event) {

  console.log("clicked");

  event.preventDefault();

name = $("#user-name").val().trim();
calories = $("#calories").val().trim();
carbs = $("#carb-input").val().trim();
fats = $("fats").val().trim();
proteins = $("proteins").val().trim();



  database.ref().set({
    name: name,
    weight: weight,
    calories: calories,
    proteins: proteins,
    fats: fats

  });

});

});


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


