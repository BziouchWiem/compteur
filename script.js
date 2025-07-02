document.addEventListener('DOMContentLoaded', function() {
  // Éléments du DOM
  const counterElement = document.getElementById('counter');
  const incrementBtn = document.getElementById('incrementBtn');
  const decrementBtn = document.getElementById('decrementBtn');
  const resetBtn = document.getElementById('resetBtn');
  
  // Valeur initiale du compteur
  let count = 0;
  
  // Fonction pour mettre à jour l'affichage
  function updateCounter() {
      counterElement.textContent = count;
      // Ajoute une animation
      counterElement.classList.add('pop-animation');
      setTimeout(() => {
          counterElement.classList.remove('pop-animation');
      }, 300);
  }
  
  // Incrémenter
  incrementBtn.addEventListener('click', function() {
      count++;
      updateCounter();
  });
  
  // Décrémenter
  decrementBtn.addEventListener('click', function() {
      count--;
      updateCounter();
  });
  
  // Reset
  resetBtn.addEventListener('click', function() {
      count = 0;
      updateCounter();
      // Animation spéciale pour le reset
      counterElement.style.animation = 'none';
      void counterElement.offsetWidth; // Déclenche un reflow
      counterElement.style.animation = 'pop 0.5s ease 2';
  });
  
  // Initialisation
  updateCounter();
});