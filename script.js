//your JS code here. If required.
// Function to play the sound corresponding to a key
function playSound(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`button[data-key="${keyCode}"]`);
  
  if (!audio) return; // Exit if no audio element found
  
  audio.currentTime = 0; // Rewind the audio to the start
  audio.play(); // Play the audio
  
  // Add a class to highlight the pressed key
  key.classList.add('playing');
}

// Function to handle the keydown event
function handleKeyDown(event) {
  playSound(event.keyCode);
}

// Function to remove the highlighting after the transition ends
function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  
  this.classList.remove('playing');
}

// Add event listeners
window.addEventListener('keydown', handleKeyDown);

const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
