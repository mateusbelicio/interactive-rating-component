'use strict';

const form = document.querySelector('.c-form');
const ratingCard = document.getElementById('rating-state');
const thanksCard = document.getElementById('thanks-state');
const userChoice = document.querySelector('.i-user-choice');

// Event handler
form.addEventListener('submit', (e) => {
  e.preventDefault();

  userChoice.textContent = form.querySelector('input[type="radio"]:checked').value;

  ratingCard.classList.add('hidden');
  thanksCard.classList.remove('hidden');
});
