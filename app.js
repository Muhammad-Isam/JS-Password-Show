function btnStatus() {
    var btn = document.getElementById("btn");
    var pw = document.getElementById("pw");
        if (pw.type === "password") {
        btn.innerHTML = "Show";
    } else if (pw.type === "text") {
        btn.innerHTML = "Hide";
    }
}
var a = document.getElementsById(btn);
a.value="A";

function showHidePassword() {
    var pw = document.getElementById("pw");
    if (pw.type === "password") {
        pw.type = "text";
    }
    else if (pw.type === "text") {
        pw.type = "password";
    }
    btnStatus();
}