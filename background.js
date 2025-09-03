// When a tab becomes active
chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tab = await chrome.tabs.get(activeInfo.tabId);
  if (tab.url?.includes("youtube.com")) {
    chrome.tabs.sendMessage(tab.id, { action: "play" }).catch(() => {});
  }

  // Pause all other YouTube tabs
  const tabs = await chrome.tabs.query({ url: "*://www.youtube.com/*" });
  for (const t of tabs) {
    if (t.id !== activeInfo.tabId) {
      chrome.tabs.sendMessage(t.id, { action: "pause" }).catch(() => {});
    }
  }
});

chrome.windows.onFocusChanged.addListener(async (windowId) => {
  if (windowId === chrome.windows.WINDOW_ID_NONE) {
    const tabs = await chrome.tabs.query({ url: "*://www.youtube.com/*" });
    console.log(tabs);
    for (const t of tabs) {
      chrome.tabs.sendMessage(t.id, { action: "pause" }).catch(() => {});
    }
    return;
  }

  const [tab] = await chrome.tabs.query({ active: true, windowId });
  console.log(tab);
  if (tab?.url?.includes("youtube.com")) {
    chrome.tabs.sendMessage(tab.id, { action: "play" }).catch(() => {});
  }
});
