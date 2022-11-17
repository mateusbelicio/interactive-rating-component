'use strict';

const options = [...document.querySelectorAll('.c-input-container input')];
const button = document.querySelector('.c-button');
const ratingCard = document.getElementById('rating-state');
const thanksCard = document.getElementById('thanks-state');
const userChoice = document.querySelector('.i-user-choice');

// Handler functions
button.addEventListener('click', (e) => {
  e.preventDefault();

  const isSelected = options.some((op) => op.checked === true);

  if (!isSelected) return;

  const optionSelected = options.find((op) => op.checked === true);
  userChoice.textContent = optionSelected.id.split('--')[1];

  ratingCard.classList.add('hidden');
  thanksCard.classList.remove('hidden');
});
