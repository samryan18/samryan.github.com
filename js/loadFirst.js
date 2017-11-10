// Loads the whole document with a white screen then shows screen once loaded

document.getElementById("hideAll").style.display = "block";
window.onload = function() { 
  document.getElementById("hideAll").style.display = "none"; 
} 