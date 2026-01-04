// Editable content toggle
const editBtn = document.getElementById('edit-btn');
let editMode = false;

editBtn.addEventListener('click', () => {
  editMode = !editMode;
  const editableElements = document.querySelectorAll('[contenteditable]');
  
  editableElements.forEach(el => {
    el.contentEditable = editMode;
    if (editMode) {
      el.style.border = '1px dashed #ffdd57';
      el.style.padding = '5px';
    } else {
      el.style.border = 'none';
      el.style.padding = '0';
      if(el.id) localStorage.setItem(el.id, el.innerHTML);
    }
  });

  editBtn.textContent = editMode ? 'Save' : 'Edit';
});

// Load saved content from localStorage
window.addEventListener('load', () => {
  const editableElements = document.querySelectorAll('[contenteditable]');
  editableElements.forEach(el => {
    if(el.id && localStorage.getItem(el.id)) {
      el.innerHTML = localStorage.getItem(el.id);
    }
  });
});

// Initialize particles.js background
particlesJS('particles-js', {
  "particles": {
    "number": { "value": 80 },
    "size": { "value": 3 },
    "move": { "speed": 2 },
    "line_linked": { "enable": true, "distance": 150, "opacity": 0.4 }
  },
  "interactivity": {
    "events": { "onhover": { "enable": true, "mode": "repulse" } }
  }
});
