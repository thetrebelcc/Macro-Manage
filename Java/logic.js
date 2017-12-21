//intialze firebase





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
  var datebase = firebase.database();


  //intial Valiues 

var name ="";

var weight = 0;

var calories = 0;

var protein = 0;

var fats = 0;

//submit buttin starts function 

$("button").on("click"), function () {

  event.preventDefualt();

  name = $("#name").val().trim();
  weight = $("#weight").val().trim();
  calories = $("#calories").val().trim();
  proteins = $("proteins").val().trim();
  fats = $("fats").val().trim();

  database.ref().set({
    name: name,
    weight: weight,
    calories: calories,
    proteins: proteins,
    fats: fats,

  })

};




        console.log(snapshot.val().name);




