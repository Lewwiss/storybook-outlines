chrome.action.onClicked.addListener(async () => {
    const [ tab ] = await chrome.tabs.query({ active: true, currentWindow: true });
    const { active } = await chrome.storage.local.get('active');

    const message = { active };
    const icon = active ? "icons/not-active.png" : "icons/active.png";

    if (tab.url.includes("chrome://")) return;
    await chrome.tabs.sendMessage(tab.id, message);
    await chrome.action.setIcon({ path: icon });
});
