/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  function showPrequel() {
    hideAll();
    document.querySelector('.prequel').style.display = 'block';
  }
  
  function showWeek1() {
    hideAll();
    document.querySelector('.week1').style.display = 'block';
  }
  
  function showWeek2() {
    hideAll();
    document.querySelector('.week2').style.display = 'block';
  }
  
  function showWeek3() {
    hideAll();
    document.querySelector('.week3').style.display = 'block';
  }
  
  function showSummary() {
    hideAll();
    document.querySelector('.summary').style.display = 'block';
  }
  
  function hideAll() {

    document.querySelector('.prequel').style.display = 'none';
    document.querySelector('.week1').style.display = 'none';
    document.querySelector('.week2').style.display = 'none';
    document.querySelector('.week3').style.display = 'none';
    document.querySelector('.summary').style.display = 'none';
    document.querySelector('.Info').style.display = 'none';
  }



// deay be gone

function showDay(day) {
  var dayInfo = "day"+day;
  var dayElement = document.getElementById(dayInfo);

  document.querySelector('.subcard').classList.toggle("shown");
  document.querySelector('.Close').classList.toggle("CloseAnim");
  document.querySelector('.Panel').classList.toggle("PanelAnim");
  var allDayElements = document.querySelectorAll(".day");
  allDayElements.forEach(function(element) {
    element.style.display = 'none';
  });

  dayElement.style.display = 'block';
}

function closeSub() {
  
  document.querySelector('.subcard').classList.remove("shown");
  document.querySelector('.Close').classList.remove("CloseAnim");
  document.querySelector('.Panel').classList.remove("PanelAnim");

  document.querySelector('.subcard').classList.add("hidden");
  document.querySelector('.Close').classList.add("CloseAnimEnd");
  document.querySelector('.Panel').classList.add("PanelAnimEnd");

  setTimeout(function() {
    document.querySelector('.subcard').classList.remove("hidden");
    document.querySelector('.Close').classList.remove("CloseAnimEnd");
    document.querySelector('.Panel').classList.remove("PanelAnimEnd");
  }, 1000); // wait for 1 second

  setTimeout(function() {
    var allDayElements = document.querySelectorAll(".day");
  allDayElements.forEach(function(element) {
    element.style.display = 'none';
  });
  }, 1000);

}

