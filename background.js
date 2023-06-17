chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request);
    console.log(sender);
    if(request.action === "createTab") {
        chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
            const currentTab = tabs[0];
            const newIndex = currentTab.index + 1;
            chrome.tabs.create({ url: request.url, index: newIndex });
          });
    }
});

    