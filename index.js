const forward = document.getElementsByClassName("forward")[0];
// const forward = document.querySelector(".forward");
const backward = document.querySelector(".backward");
const imgSlider = document.querySelector(".imgSlider");
const imgCount = document.querySelectorAll("img");

console.log("heloo");
let currImg = 1;
let timeout
forward.addEventListener("click", () => {
    currImg++;
    clearTimeout(timeout);
    UpdateImg();
});
backward.addEventListener("click", () => {
    currImg--;
    clearTimeout(timeout);
    UpdateImg();
});

UpdateImg();

function UpdateImg() {
    if (currImg > imgCount.length) currImg = 1;
    else if (currImg < 1) currImg = imgCount.length;
    else imgSlider.style.transform = `translateX(-${(currImg-1)*700}px)`;
    timeout = setTimeout(() => {
        currImg++;
        UpdateImg();
    }, 3000)
}