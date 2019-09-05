var n = 1;
window.setInterval(function(){ 
  n++;
  if (n > 5) {
  	n = 1;
  };
  console.log(n);
}, 5000);