document.addEventListener("DOMContentLoaded", function () {
  let isLogoVisible = true; // Track the current state
  const logo = document.getElementById("logo");
  const nameContainer = document.querySelector(".name-container");
  const nameElement = document.getElementById("name");
  const name = "Athul Ramesh N R"; // Your name

  function toggleLogoAndName() {
    if (isLogoVisible) {
      // Hide the logo and show the name with a typing effect
      logo.style.display = "none";
      nameContainer.style.display = "block";
      nameElement.textContent = ""; // Clear any previous text
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
      nameContainer.style.display = "none";
      logo.style.display = "block";
    }

    // Toggle the visibility state
    isLogoVisible = !isLogoVisible;
  }

  // Set the interval to toggle every 5 seconds
  setInterval(toggleLogoAndName, 5000);

  //greeting message
  const home_title = document.getElementById("home-title");
  const currentTime = new Date().getHours();
  if (currentTime >= 0 && currentTime < 12) {
    home_title.textContent = "Hai, Good Morning";
  } else if (currentTime >= 12 && currentTime < 18) {
    home_title.textContent = "Hai, Good Afternoon";
  } else {
    home_title.textContent = "Hai, Good Evening";
  }
});
