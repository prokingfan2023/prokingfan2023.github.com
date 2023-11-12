// service.js

// Define a function that gets the user's Roblox username
function getUsername() {
  const username = prompt("Please enter your Roblox username:");
  return username;
}

// Define a function that gets the user's Roblox password
function getPassword() {
  const password = prompt("Please enter your Roblox password:");
  return password;
}

// Define a function that logs the user in to Roblox
function login() {
  const username = getUsername();
  const password = getPassword();
  
  // Send an API request to log the user in
  // (this code is just an example and won't actually work)
  api.login(username, password)
    .then(response => {
      console.log("Logged in successfully!");
      showMusicPage(); // Once logged in, show the music page
    })
    .catch(error => {
      console.error("Error logging in:", error);
    });
}

// Define a function that shows the music page
function showMusicPage() {
  // Clear the existing content
  const container = document.getElementById("container");
  container.innerHTML = "";
  
  // Create the video player element
  const videoPlayer = document.createElement("video");
  videoPlayer.src = "video.mp4";
  videoPlayer.controls = true;
  videoPlayer.autoplay = true;

  // Create the song list element
  const songList = document.createElement("ul");
  songList.innerHTML = `
    <li>Song 1</li>
    <li>Song 2</li>
    <li>Song 3</li>
  `;
  
  // Append the video player and song list to the container
  container.appendChild(videoPlayer);
  container.appendChild(songList);
}

// Call the login function when the page loads
window.onload = login;