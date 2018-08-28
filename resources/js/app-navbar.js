/**
 * request and create the top navigation menu
 */
function loadNavbar() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementsByTagName("nav")[0].innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "templates/app-navbar.html", true);
    xhttp.send();
}