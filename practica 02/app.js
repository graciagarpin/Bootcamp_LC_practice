// Objetivo 1 [Datos del hotel]
var hotel = {
  name: "Hawaii",
  location: "Playa Las Rocas",
  img: 
    "https://lh3.googleusercontent.com/proxy/V9OvNSAp_5VlKFKlmBS199FU5vIbwmBkZi_m5p2XyEojwyE4iGrPf6jHHTt4t1qlwSJKQTo7Qi-cW5x1Kc4HhzHsmIN2t_Y"
};

document.getElementById("name-hotel").innerHTML = "Hotel " + hotel.name;
document.getElementById("location-hotel").innerHTML =
  "Ubicado en " + hotel.location;
document.getElementById("img-hotel.Hawaii").src = hotel.img;

// Objetivo 2 [Puntuación del hotel]
var rating = prompt("Puntuación: del 1 al 5");

document.getElementById("rating").innerHTML = rating + " estrellas";
