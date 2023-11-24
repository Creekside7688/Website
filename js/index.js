function loadURLContent() {
    var currentPath = window.location.pathname;
    document.getElementById('contentFrame').src = "https://team7688.weebly.com/" + currentPath;
}

window.onload = loadURLContent;