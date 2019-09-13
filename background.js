chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    return {redirectUrl: 'https://fmarier.org/?orig=' + info.url};
  },
  {urls: [
      "https://*.uphold.com/*",
      "https://*.brave.com/*",
    ], types: ["main_frame"]},
  ["blocking"]
);
