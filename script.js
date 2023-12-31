clicks = 0;
clicksleft = 1000000 - clicks;
var need = document.getElementById("need");
need.innerHTML = clicksleft  + " clicks you need";

function myfunc() {
    clicks++;
    clicksleft = 1000000 - clicks;    
    need.innerHTML = clicksleft  + " clicks you need";
}
