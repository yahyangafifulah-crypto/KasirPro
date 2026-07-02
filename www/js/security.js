if (localStorage.getItem("login") !== "true") {
    if (!location.href.includes("index.html")) {
        window.location.href = "index.html";
    }
}
