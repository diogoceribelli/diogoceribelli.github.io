var n = 1;

switch(n) {
  case 1:
    console.log("azul");
    break;
  case 2:
    console.log("amarelo");
    break;
  case 3:
    console.log("verde");
    break;
  case 4:
    console.log("cinza");
    break;
  case 5:
    console.log("vermelho");
    break;
  default:
    console.log("roxo");
}

window.setInterval(function(){ 
  n++;
  if (n > 5) {
  	n = 1;
  };
  console.log(n);
<<<<<<< HEAD
}, 3000);
=======
>>>>>>> parent of 79cef3a... att script

  switch(n) {
  case 1:
    /*jQuery("body").removeClass();
    jQuery("body").addClass("blue");*/
    console.log(n + "foi");
    break;
  case 2:
    /*jQuery("body").removeClass();
    jQuery("body").addClass("yellow");*/
    console.log(n + "foi");
    break;
  case 3:
    /*jQuery("body").removeClass();
    jQuery("body").addClass("green")*/;
    console.log(n + "foi");
    break;
  case 4:
    /*jQuery("body").removeClass();
    jQuery("body").addClass("grey");*/
    console.log(n + "foi");
    break;
  case 5:
    /*jQuery("body").removeClass();
    jQuery("body").addClass("red");*/
    console.log(n + "foi");
    break;
  default:
    /*jQuery("body").removeClass();
    jQuery("body").addClass("purple");*/
    console.log(n + "foi");
  }

}, 5000);

