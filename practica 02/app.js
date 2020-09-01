// Objetivo 1 [Datos del hotel]
var hotel = {
  name: "Hawaii",
  location: "Playa Las Rocas",
  img:
    "https://lh3.googleusercontent.com/proxy/2l_FR00_-Y_SOw93k3TrBf2ur3oiB_5FuJ8EBwjJ6kkBzsz6XKtsHszJjS4IGab1ZxOdGb6VbwKW3AXHEor6G1RisWvCpKE",
};

document.getElementById("name-hotel").innerHTML = "Hotel " + hotel.name;
document.getElementById("location-hotel").innerHTML =
  "Ubicado en " + hotel.location;
document.getElementById("img-hotel").src = hotel.img;

// Objetivo 2 [Puntuación del hotel]
var rating = prompt("Puntuación: del 1 al 5");

document.getElementById("rating").innerHTML = rating + " estrellas";
