let links = document.querySelectorAll("header li a");
links.forEach(link => {
    link.onmouseover = function () { link.classList.add("active") };
    link.onmouseout = function () { link.classList.remove("active") };
});

document.getElementById("livebtn").onclick = function () {
    document.getElementById("livesupport").classList.toggle("text-nowrap")
}
document.getElementById("managebtn").onclick = function () {
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
