// // Objetivo 1 [Datos del hotel]
// var hotel1 = {
//   name: "Hawaii",
//   location: "Playa Las Rocas",
//   img: 
//     "https://lh3.googleusercontent.com/proxy/V9OvNSAp_5VlKFKlmBS199FU5vIbwmBkZi_m5p2XyEojwyE4iGrPf6jHHTt4t1qlwSJKQTo7Qi-cW5x1Kc4HhzHsmIN2t_Y"
// };


// // // Objetivo 2 [Puntuación del hotel]
// // var rating = prompt("Puntuación: del 1 al 5");

// // document.getElementById("rating").innerHTML = rating + " estrellas";

// // // Objetivo 3 [Usuario anónimo]
// // var anonymous = confirm("¿Quiere que la reseña sea anónima?");

// // document.getElementById("anonymous").checked = anonymous;


var hoteles = {
 
  Royal: {
    name: "Royal",
    location: "Suiza",
    img:"https://www.tendenciashoy.com/wp-content/uploads/2020/07/savoy-fachada_16_643x397.jpeg"
  },
  Cleopatra: {
    name: "Cleopatra",
    location: "El Cairo",
    img:"https://thumbs.dreamstime.com/b/sharm-el-sheikh-egipto-noche-en-las-butacas-vac%C3%ADas-de-la-piscina-aguamarina-del-hotel-pa-barra-120833717.jpg"
  }
};

var selectedHotel = prompt(
  "Indica el nombre del hotel: Royal o Cleopatra");


document.getElementById("name-hotel").innerHTML = hoteles[selectedHotel].name;
document.getElementById("location-hotel").innerHTML = hoteles[selectedHotel]["location"];
document.getElementById("img-hotel").src = hoteles[selectedHotel].img;

var stars = {
  una:
    "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  dos:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  tres:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
  cuatro:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
  cinco:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};

var rating = prompt("¿Cuántas estrellas?: una, dos tres, cuatro o cinco");

document.getElementById("rating").innerHTML = stars[rating];