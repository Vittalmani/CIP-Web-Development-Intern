// Auto Typing Animation
const roles = ["A UI/UX Designer", "A Frontend Web Developer"];
let currentRoleIndex = 0;
let currentRole = "";

function autoType() {
  if (currentRoleIndex >= roles.length) {
    currentRoleIndex = 0;
  }
  currentRole = roles[currentRoleIndex];
  document.getElementById("role").textContent = "";
  typeCharacter();
}

function typeCharacter() {
  if (currentRole.length > 0) {
    document.getElementById("role").textContent += currentRole.charAt(0);
    currentRole = currentRole.slice(1);
    setTimeout(typeCharacter, 100);
  } else {
    setTimeout(autoType, 2000); // Pause before typing next role
    currentRoleIndex++;
  }
}

// Start the auto typing animation
autoType();





