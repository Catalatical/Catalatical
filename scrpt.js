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

