function darkMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "Dark Mode is ON";
  }
  function lightMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "Dark Mode is OFF";
  }
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#Lab').addEventListener('click', myFunctionLab);
    document.querySelector('#Estudios').addEventListener('click', myFunctionestudios);
    document.querySelector('#skills').addEventListener('click', myFunctionskills);
  });
  
  
  function myFunctionLab() {
    var Lab = document.getElementById("toggleLab");
    var estudios = document.getElementById("toggleEstudios");
    var skills = document.getElementById("toggleskills");
    if (Lab.style.display !== "block") {
      Lab.style.display = "block";
      estudios.style.display = "none";
      skills.style.display = "none";
    }
  }
  
  function myFunctionestudios() {
    var Lab = document.getElementById("toggleLab");
    var estudios = document.getElementById("toggleEstudios");
    var skills = document.getElementById("toggleskills");
  
    if (estudios.style.display !== "block") {
      estudios.style.display = "block";
      Lab.style.display = "none";
      skills.style.display = "none";
    }
  }
  function myFunctionskills() {
    var Lab = document.getElementById("toggleLab");
    var estudios = document.getElementById("toggleEstudios");
    var skills = document.getElementById("toggleskills");
  
    if (skills.style.display !== "block") {
      skills.style.display = "block";
      estudios.style.display = "none";
      Lab.style.display = "none";
    }
  
  }