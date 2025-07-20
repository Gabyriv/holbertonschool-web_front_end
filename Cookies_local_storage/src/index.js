function setCookies() {
    const firstname = document.getElementById("firstname").value;
    const email = document.getElementById("email").value;

    document.cookie = `firstname=${firstname}`
    document.cookie = `email=${email}`
}

function showCookies() {
    const cookies = document.cookie;

    const p = document.createElement("p");
    p.textContent = `Cookies: ${cookies}`;
    document.body.appendChild(p);
}
