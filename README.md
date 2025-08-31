<h1 align="center">Docs Reading Time Extension</h1>

<ol>
<li>We use content scripts attribute in manifest to run script on specified pages.</li><li>To add minimum time to each article showing on docs of any website.</li><li>Also, we provide a popup timer to view the elapsed read time.</li><li>You can view your time by clicking on the extension where you can pause,stop and restart the timer.</li>
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
