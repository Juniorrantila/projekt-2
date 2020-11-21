document.addEventListener("DOMContentLoaded", () => {
    let bkg_img = document.getElementsByTagName("bkg-img");
    for (let i = 0; i<bkg_img.length; i++){
        bkg_img[i].className = "slide";
        bkg_img[i].style.backgroundImage = "url('"+bkg_img[i].getAttribute("src")+"')";
    }
});