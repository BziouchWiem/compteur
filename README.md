# 🧮 Compteur Kawaii

Un compteur interactif avec design mignon et animations.

![Demo](demo.gif)

## 🌟 Fonctionnalités
- Incrémentation/Décrémentation
- Bouton Reset avec effet spécial
- Affichage en temps réel
- Thème pastel animé

## 🧠 Concepts Clés
```javascript
// Gestion d'état
let count = 0;

// Écouteurs d'événements
incrementBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
});
