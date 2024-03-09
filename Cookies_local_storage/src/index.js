function setCookies() {
    var firstnameValue = document.getElementById('firstname').value;
    var emailValue = document.getElementById('email').value;

    document.cookie = `firstname=${firstnameValue};`;
    document.cookie = `email=${emailValue};`;
}

function showCookies() {
    var cookiesParagraph = document.createElement('p');
    cookiesParagraph.textContent = "Cookies: " + document.cookie;
    document.body.appendChild(cookiesParagraph);
}
