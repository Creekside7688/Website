function loadURLContent() {
    var currentPath = window.location.pathname;
    document.getElementById('contentFrame').src = "https://team7688.weebly.com" + currentPath;
    window.history.replaceState({}, document.title, "/")

    console.log(document.getElementById('contentFrame').contentWindow.location.href);
}

window.onload = loadURLContent;