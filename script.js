function showSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}
function addShadow(element) {
  element.querySelector('img').style.filter = 'brightness(70%)'; // Reduziert die Helligkeit des Bildes
  element.querySelector('.image-box::before').style.opacity = '1'; // Erhöht die Transparenz des Schattens
  element.querySelector('p').style.opacity = '1'; // Zeigt die Beschreibung
}

function removeShadow(element) {
  element.querySelector('img').style.filter = 'brightness(100%)'; // Stellt die Helligkeit des Bildes wieder her
  element.querySelector('.image-box::before').style.opacity = '0'; // Verringert die Transparenz des Schattens
  element.querySelector('p').style.opacity = '0'; // Verbirgt die Beschreibung
}

function toggleDescription(element) {
  var description = element.querySelector('.description');
  var isExpanded = description.classList.toggle('expanded');

  if (isExpanded) {
      description.style.height = description.scrollHeight + 'px'; // Erweitere das Textfeld auf die volle Höhe
  } else {
      description.style.height = '50px'; // Setze die Höhe des Textfeldes zurück
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var content = document.getElementById("content");
  var dynamicText = "<h2>Willkommen bei MuzPro.org!</h2>";

  content.innerHTML = dynamicText;
  updateContent();
  
  // Eventlistener für Änderungen der Bildschirmgröße
  window.addEventListener('resize', function(event){
    updateContent();
  });
});

