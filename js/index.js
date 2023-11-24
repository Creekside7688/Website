function loadURLContent() {
    var currentPath = window.location.pathname;
    console.log(currentPath);
    document.getElementById('contentFrame').src = "https://team7688.weebly.com" + currentPath;
    window.history.replaceState({}, document.title, window.location.hostname)
}

window.onload = loadURLContent;