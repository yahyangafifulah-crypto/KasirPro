function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "12345") {

        localStorage.setItem("login", "true");
        localStorage.setItem("user", username);

        window.location.href = "dashboard.html";

    } else {

        document.getElementById("pesan").innerHTML =
        "Username atau Password salah!";

    }

}
