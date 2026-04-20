function togglepopup() {
    popupEle.classList.toggle("active");
}
function updateIndicators() {
    popupEle.querySelector(".indicators li.active").classList.remove("active")
    popupIndicators[currentImgIndex].classList.add("active");
}
function updatePopupEle(imgSrc) {
    popupImg.setAttribute("src", imgSrc);
}