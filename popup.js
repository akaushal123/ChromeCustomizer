document.addEventListener('load',display_ct(),false);


function display_c()
{
  var refresh=1000; // Refresh rate in milli seconds
  mytime=setTimeout(function(){display_ct()},refresh);
}

function display_ct()
{
  var d = new Date();
  var curr_hour = d.getHours();
  var curr_min = d.getMinutes();
  var curr_sec = d.getSeconds();
  if(curr_min >= '0' && curr_min <='9')
  {curr_min = '0' + curr_min;}

  if(curr_hour >= '0' && curr_hour <='9')
  {curr_hour = '0' + curr_hour;}

  if(curr_sec >= '0' && curr_sec <='9')
  {curr_sec = '0' + curr_sec;}
  document.getElementById("time").innerHTML = curr_hour +":" +curr_min + ":" + curr_sec;
  tt=display_c();
}
