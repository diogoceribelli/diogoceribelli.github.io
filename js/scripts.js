var n = 1;

window.setInterval(function(){ 
  n++;
  if (n > 5) {
  	n = 1;
  };
  console.log(n);
}, 3000);

jQuery(n).change(function() {
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
});

