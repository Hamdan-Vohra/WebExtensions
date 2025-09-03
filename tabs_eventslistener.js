chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tab = await chrome.tabs.get(activeInfo.tabId);
  if (tab.url && tab.url.includes("youtube.com")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => document.dispatchEvent(new CustomEvent("yt-visibility", { detail: "visible" }))
    });
  }
});

// When tab is updated (e.g., user switches away from YouTube)
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url?.includes("youtube.com")) {
    chrome.scripting.executeScript({
      target: { tabId },
      func: () => document.dispatchEvent(new CustomEvent("yt-visibility", { detail: "visible" }))
    });
  }
});

// Detect when window focus changes
chrome.windows.onFocusChanged.addListener(async (windowId) => {
  if (windowId === chrome.windows.WINDOW_ID_NONE) return; // all unfocused
  const [tab] = await chrome.tabs.query({ active: true, windowId });
  if (tab?.url?.includes("youtube.com")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => document.dispatchEvent(new CustomEvent("yt-visibility", { detail: "visible" }))
    });
  }
});

// Handle blur (when user leaves YouTube tab)
chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tabs = await chrome.tabs.query({});
  tabs.forEach((t) => {
    if (t.url?.includes("youtube.com") && t.id !== activeInfo.tabId) {
      chrome.scripting.executeScript({
        target: { tabId: t.id },
        func: () => document.dispatchEvent(new CustomEvent("yt-visibility", { detail: "hidden" }))
      });
    }
  });
});
