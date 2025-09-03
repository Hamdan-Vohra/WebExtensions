function controlVideo(action) {
  const video = document.querySelector("video");
  if (!video) return;
  
  if (action === "play") {
    if (video.paused) video.play();
  } else if (action === "pause") {
    if (!video.paused) video.pause();
  }
}

// Listen for events from background.js
document.addEventListener("yt-visibility", (e) => {
  if (e.detail === "visible") {
    controlVideo("play");
  } else {
    controlVideo("pause");
  }
});
