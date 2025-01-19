document.addEventListener("DOMContentLoaded", async () => {
    try {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        document.getElementById("url").textContent = tab.url
    }
    catch {
        document.getElementById("url").textContent = "ERROR"
    }
});