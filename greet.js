var date = new Date();
var d = date.getHours();
if(d >= 4 && d < 12)
document.getElementById('greet').innerHTML = 'Good Morning'.fontsize('200px') ;
else if(d >= 12 && d < 17)
  document.getElementById('greet').innerHTML = 'Good Afternoon'.fontsize('200px');
else if((d >= 17 && d <= 23) || (d > 0 && d < 4))
document.getElementById('greet').innerHTML = 'Good Evening'.fontsize('200px');
