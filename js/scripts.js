var n = 1;



window.setInterval(function(){ 
  n++;
  if (n > 5) {
  	n = 1;
  };
  console.log(n);
}, 5000);

jQuery(n).change(function() {
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
});

