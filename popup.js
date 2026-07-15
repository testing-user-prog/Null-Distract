function addwebsiteinpool() {
    let websitetextbox = document.getElementById('getwebsite');
    let urltoblock = websitetextbox.value.trim();
    console.log(urltoblock);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('addBtn').addEventListener('click', addwebsiteinpool);
});