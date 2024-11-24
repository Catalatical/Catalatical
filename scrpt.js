/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

function prequel() {
  var infos = document.getElementsByClassName("Info");
  for (var i = 0; i < infos.length; i++) {
    infos[i].style.display = "none";
  }
  var prequels = document.getElementsByClassName("prequel");
  for (var i = 0; i < prequels.length; i++) {
    prequels[i].style.display = "block";
  }

}