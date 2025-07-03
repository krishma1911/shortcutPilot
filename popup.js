document.addEventListener("DOMContentLoaded", () => {
  const url1 = document.getElementById("url1");
  const url2 = document.getElementById("url2");
  const url3 = document.getElementById("url3");
  const url4 = document.getElementById("url4");


  chrome.storage.sync.get(["shortcut1", "shortcut2","shortcut3", "shortcut4"], (data) => {
    url1.value = data.shortcut1 || "";
    url2.value = data.shortcut2 || "";
    url3.value = data.shortcut3 || "";
    url4.value = data.shortcut4 || "";
  });

  document.getElementById("save").addEventListener("click", () => {
    chrome.storage.sync.set({
      shortcut1: url1.value.trim(),
      shortcut2: url2.value.trim(),
      shortcut3: url3.value.trim(),
      shortcut4: url4.value.trim(),
  
    }, () => {
      alert("Shortcuts saved!");
    });
  });
});
