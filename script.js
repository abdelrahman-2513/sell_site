let links = document.querySelectorAll("header li a");
links.forEach(link => {
    link.onmouseover = function () { link.classList.add("active") };
    link.onmouseout = function () { link.classList.remove("active") };
});

let liveBtn = document.getElementById("livebtn");
let manageBtn = document.getElementById("managebtn");


liveBtn.onclick = function () {
    document.getElementById("livesupport").classList.toggle("text-nowrap")
    if (liveBtn.innerText === "Continue reading")
        liveBtn.innerText = "Hide";
    else
        liveBtn.innerText = "Continue reading";
}
document.getElementById("managebtn").onclick = function () {
    if (manageBtn.innerText === "Continue reading")
        manageBtn.innerText = "Hide";
    else
        manageBtn.innerText = "Continue reading";
    document.getElementById("managemopile").classList.toggle("text-nowrap")
}

let joinBtn = document.querySelectorAll(".getstarted");
joinBtn.forEach(Btn => {
    Btn.addEventListener("click", function () {
        document.querySelector(".loginForm").classList.remove("d-none");
    })
})
let closeBtn = document.querySelector(".btn-close");

closeBtn.addEventListener("click", function () {
    document.querySelector(".loginForm").classList.add("d-none");
})
