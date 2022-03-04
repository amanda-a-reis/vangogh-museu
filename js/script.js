// let botao = document.getElementById('botao4');
// let img = document.getElementById('img');

// function revelaImagem() {
//     img.style.opacity =  1;

// }

// function desligaImagem() {
//     img.style.opacity = 0;
// }

$(document).ready(function () {
  $(".open_div").click(function () {
    $(this).toggleClass("active").next().slideUp("slow");
    $(".flex2").hide("slow");
    $(".flex3").hide("slow");
    $(".flex4").hide("slow");
    $(".flex5").hide("slow");
    return false;
  });
  $(".open_div").mouseleave(function () {
    $(this).toggleClass("active").next().slideDown("slow");
    $(".flex2").show("slow");
    $(".flex3").show("slow");
    $(".flex4").show("slow");
    $(".flex5").show("slow");
  });
   
});

let i = 0;
let myImg = document.getElementById("img2");

function alternarImagens() {
  let img = [];
  img[0] = "img/vangogh.jpg";
  img[1] = "img/vangogh4.jpg";
  img[2] = "img/vangogh2.jpg";
  img[3] = "img/vangogh3.jpg";

  myImg.src = img[i];

  myImg.animate(
    [
      // keyframes
      { transform: "translateY(0px)" },
      { transform: "translateY(50px)" },
    ],
    {
      // timing options
      duration: 5000,
      iterations: Infinity,
    }
  );

  i += 1;

  if (i > 3) {
    i = 0;
  }
}

function Temporizador(initiate) {
  if (initiate !== true) {
    alternarImagens();
  }
  setTimeout(Temporizador, 3000);
}

Temporizador(true);
let textoZoom = document.getElementById("info");

let caixa = document.querySelector(".info");

function animarLetra() {
  textoZoom.style.color = "white";
  caixa.style.background = "black";
}

function voltarLetra() {
  textoZoom.style.color = "black";
  caixa.style.background = "white";
}
