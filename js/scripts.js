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
    jQuery("body").css({
    	'background-color':'blue'
    });
    break;
  case 2:
    jQuery("body").css({
    	'background-color':'yellow'
    });
    break;
  case 3:
    jQuery("body").css({
    	'background-color':'green'
    });
    break;
  case 4:
    jQuery("body").css({
    	'background-color':'grey'
    });
    break;
  case 5:
    jQuery("body").css({
    	'background-color':'red'
    });
    break;
  default:
    jQuery("body").css({
    	'background-color':'purple'
    });
  }
});

