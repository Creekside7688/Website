function loadURLContent() {
    var currentPath = window.location.pathname;
    console.log(currentPath);
    document.getElementById('contentFrame').src = "https://team7688.weebly.com" + currentPath;
    document.title = document.getElementById('contentFrame').contentWindow.document.title;
    window.history.replaceState({}, document.title, "/")
}

window.onload = loadURLContent;