document.addEventListener("DOMContentLoaded", function() {
    const cartoonBoxes = document.getElementsByClassName('cartoonBox');

    for (let f = 0; f < cartoonBoxes.length; f++) {
        cartoonBoxes[f].addEventListener("click", clickedOnCartoonBox);
    }

    function clickedOnCartoonBox(event) {
        const clickedBox = event.currentTarget;
        const url = clickedBox.getAttribute('data-url');
        if (url) {
            window.location.href = url;
        }
    }
});
