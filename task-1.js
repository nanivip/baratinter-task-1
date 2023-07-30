let contentFormEl = document.getElementById("contentForm");
let titleEl = document.getElementById("title");
let contentEl = document.getElementById("content");
let imageEl = document.getElementById("image");
let videoEl = document.getElementById("video");
let savedContentEl = document.getElementById("savedContentValue");
let titleErrorEl = document.getElementById("titleError");
let contentErrorEl = document.getElementById("contentError");
let imageErrorEl = document.getElementById("imageError");
let videoErrorEl = document.getElementById("videoError");


function submitfiles() {

    let divEl = document.createElement("div");
    savedContentEl.appendChild(divEl)

    let h1El = document.createElement("h1");
    h1El.classList.add("savedContenth1");
    h1El.textContent = titleEl.value;
    divEl.appendChild(h1El);

    let pEl = document.createElement("p");
    pEl.classList.add("savedContentp");
    pEl.textContent = contentEl.value;
    divEl.appendChild(pEl);

    let imgEl = document.createElement("img");
    imgEl.classList.add("savedContentimg");
    imgEl.src = URL.createObjectURL(imageEl.files[0]);
    divEl.appendChild(imgEl);

    let vidEl = document.createElement("video");
    vidEl.classList.add("savedContentimg");
    vidEl.src = URL.createObjectURL(videoEl.files[0]);
    divEl.appendChild(vidEl);

}

contentFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    submitfiles();
});