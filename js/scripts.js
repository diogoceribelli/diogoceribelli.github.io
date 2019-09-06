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

}, 5000);

