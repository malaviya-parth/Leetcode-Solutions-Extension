const addBtn = document.querySelector('#add');

addBtn.addEventListener('click', () => {
    chrome.tabs.create({url: 'vscode://'}, (tab) => {
        chrome.windows.update(tab.windowId, {focused: true, state: 'maximized'});
    });
});