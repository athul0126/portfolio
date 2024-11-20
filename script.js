let isLogoVisible = true; // Track the current state
const logo = document.getElementById('logo');
const nameContainer = document.querySelector('.name-container');
const nameElement = document.getElementById('name');
const name = "Athul Ramesh N R"; // Your name

function toggleLogoAndName() {
  if (isLogoVisible) {
    // Hide the logo and show the name with a typing effect
    logo.style.display = 'none';
    nameContainer.style.display = 'block';
    nameElement.textContent = ''; // Clear any previous text
    let index = 0;

    // Typing effect
    const typingInterval = setInterval(() => {
      if (index < name.length) {
        nameElement.textContent += name[index];
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150); // Typing speed
  } else {
    // Hide the name and show the logo
    nameContainer.style.display = 'none';
    logo.style.display = 'block';
  }

  // Toggle the visibility state
  isLogoVisible = !isLogoVisible;
}

// Set the interval to toggle every 5 seconds
setInterval(toggleLogoAndName, 5000);
