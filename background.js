chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    return {redirectUrl: 'https://brave.com/?orig=' + info.url};
  },
  {urls: ["https://*.uphold.com/*"], types: ["main_frame"]},
  ["blocking"]
);
