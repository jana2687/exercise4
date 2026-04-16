let popupkeys = document.querySelectorAll("#gallery .item i"),
    popupEle = document.querySelector(".popup"),
    popupBox = popupEle.querySelector(".box"),
    popupImg = popupEle.querySelector("img"),
    popupIndicators = popupEle.querySelectorAll(".indicators li"),
    imgsList = document.querySelectorAll("#gallery img"),
    nextPopup = popupEle.querySelector(".next"),
    prevPopup = popupEle.querySelector(".prev"),
    closePopup = popupEle.querySelector(".close"),
    currentImgIndex;

popupkeys.forEach(function (popupkey) {
    popupkey.addEventListener("click", function (e) {
        let currentImg = popupkey.parentElement.previousElementSibling,
            currentImgSrc = currentImg.getAttribute("src");
        currentImgIndex = currentImg.dataset.index;
        updateIndicators();
        popupImg.setAttribute("src", currentImgSrc);
        togglepopup();
    })
})
popupEle.addEventListener("click", togglepopup);
closePopup.addEventListener("click", togglepopup);
popupBox.addEventListener("click", function (e) {
    e.stopPropagation();
})
nextPopup.addEventListener("click", function (e) {
    currentImgIndex = (++currentImgIndex) % (imgsList.length);
    let nextImgIndex = currentImgIndex,
        nextImgEle = imgsList[nextImgIndex],
        nextImgSrc = nextImgEle.getAttribute("src");
    popupImg.setAttribute("src", nextImgSrc);
    updateIndicators();
})
prevPopup.addEventListener("click", function (e) {
    currentImgIndex = (--currentImgIndex < 0) ? (imgsList.length - 1) : (currentImgIndex);
    let prevImgIndex = currentImgIndex,
        prevImgEle = imgsList[prevImgIndex],
        prevImgSrc = prevImgEle.getAttribute("src");
    popupImg.setAttribute("src", prevImgSrc);
    updateIndicators();
})