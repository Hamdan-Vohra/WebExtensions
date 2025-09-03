function controlVideo(action) {
  const video = document.querySelector("video");
  if (!video) return;

  if (action === "play" && video.paused) {
    video.play();
  } else if (action === "pause" && !video.paused) {
    video.pause();
  }
}

// Listen for messages from background.js
chrome.runtime.onMessage.addListener((message) => {
  if (message.action) {
    controlVideo(message.action);
  }
});
