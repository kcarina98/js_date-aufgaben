let today1 = new Date().toLocaleDateString().split(".").join("-");
let today2 = new Date().toLocaleDateString().split(".").join("/");

document.querySelector(".output").innerHTML = `${today1} <br>`;
document.querySelector(".output").innerHTML += today2;
