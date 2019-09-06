var n = 1;
switch(n) {
  case 1:
    jQuery("body").removeClass();
    jQuery("body").addClass("blue");
    break;
  case 2:
    jQuery("body").removeClass();
    jQuery("body").addClass("yellow");
    break;
  case 3:
    jQuery("body").removeClass();
    jQuery("body").addClass("green");
    break;
  case 4:
    jQuery("body").removeClass();
    jQuery("body").addClass("grey");
    break;
  case 5:
    jQuery("body").removeClass();
    jQuery("body").addClass("red");
    break;
  default:
    jQuery("body").removeClass();
    jQuery("body").addClass("purple");
  }
window.setInterval(function(){ 
  n++;
  if (n > 5) {
  	n = 1;
  };
  switch(n) {
  case 1:
    jQuery("body").removeClass();
    jQuery("body").addClass("blue");
    break;
  case 2:
    jQuery("body").removeClass();
    jQuery("body").addClass("yellow");
    break;
  case 3:
    jQuery("body").removeClass();
    jQuery("body").addClass("green");
    break;
  case 4:
    jQuery("body").removeClass();
    jQuery("body").addClass("grey");
    break;
  case 5:
    jQuery("body").removeClass();
    jQuery("body").addClass("red");
    break;
  default:
    jQuery("body").removeClass();
    jQuery("body").addClass("purple");
  }
}, 1000);

