
// Runs inside the page
(function() {
  const bodyText = document.body.innerText.toLowerCase();
  
  // Rule 1: Phishing Keywords
  const phrases = ["verify your account", "confirm password", "unusual sign-in"];
  if (phrases.some(p => bodyText.includes(p))) {
     // Send blocking request to background
     chrome.runtime.sendMessage({ type: 'BLOCK_PAGE', reason: "Phishing Text Detected" });
  }
})();
