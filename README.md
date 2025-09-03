<h1 align="center">Youtube Auto Play/Pause</h1>

<h3>Purpose and Work</h3>
<ol>
  <li>This extension mainly focuses on communication between background and content_script.</li>
  <li>This extension is used for auto pause and auto play the youtube video, when the tab or window changes.</li>
  <li>It always play the active tab video if it is Youtube video</li>
  <li>This extension also includes background.js handling tabs and widows' events.</li>
</ol>

<h3>Important Guide</h3>
  <ol>
    <li>background.js → handles tab/window events.</li>
    <li>content_script.js → talks to background, manipulates DOM, and optionally dispatches events.</li>
    <li>page_injected.js → lives inside the YouTube page’s JS world, catches those events if you need to touch window.ytplayer or other page variables.<b>But I didn't use it in this extension</b></li>
  </ol>

<h5>🔹 Download Folder</h5>

<p>Download the zip file from <i>Code</i> dropdown. Go to your <b>Downloads</b> folder and extract the folder named with [Repo Name] - [BranchName]</p>

<h5>🔹 Load in Chrome</h5>
<ol style="font-size:15px;">
  <li>Open <b>Chrome</b> and go to <code>chrome://extensions/</code></li>
  <li>Enable <b>Developer mode</b> (top right)</li>
  <li>Click <b>Load unpacked</b> and select the project folder</li>
  <li>Extension will appear in your list 🎉</li>
</ol>

<h5>🔹 Usage</h5>
<ul style="font-size:15px;">
  <li>Click on the extension icon in the toolbar</li>
  <li>Access its features directly</li>
  <li>(Optional) Customize settings from the options page</li>
</ul>

<h5>🔹 About Learining</h5>
<ul style="font-size:15px;">
  <li>This extension includes the implementation of content_script</li>
  <li>Content Script: Normal js file, but got power through manifest configuration, allowing the js file to mount on the current tab script, meaning that it will have an acess to DOM of the current opened tab code</li>
  <li>Content Script will run only the specified tabs accoring to match criteria</li>
  <li>Not all js file are content_scripts unless we configured it thorugh manifest file like below</li>
  <li>
  "content_scripts": [
    {
      "js": ["scripts/content.js"],
      //this is the matching criteria
      "matches": [
        "https://*/docs/*",
        "https://*/blogs/*",
        "https://developer.chrome.com/docs/webstore/*"
      ]
    }
  ]</li>
</ul>
