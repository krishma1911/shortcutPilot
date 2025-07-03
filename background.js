chrome.commands.onCommand.addListener(async (command) => {
  const data = await chrome.storage.sync.get(["shortcut1", "shortcut2", "shortcut3", "shortcut4"]);
  if (command === "open_site_1" && data.shortcut1) {
    chrome.tabs.create({ url: data.shortcut1 });
  }
  if (command === "open_site_2" && data.shortcut2) {
    chrome.tabs.create({ url: data.shortcut2 });
  }
  if (command === "open_site_3" && data.shortcut3) {
    chrome.tabs.create({ url: data.shortcut3 });
  }
  if (command === "open_site_4" && data.shortcut4) {
    chrome.tabs.create({ url: data.shortcut4 });
  }
});
