
var power = document.getElementById('power');
var x = 2;
var y = 2;
power.innerHTML = x;
function square(){
  math.config({precision: 2000});
  var z = math.bignumber(Math.pow(x,y));
  y++;
  power.innerHTML = math.format(z, {notation: 'fixed'});
}
