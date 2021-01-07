const sheet = new CSSStyleSheet();
document.adoptedStyleSheets = [sheet];

window.onscroll = () => {
    let val = Math.abs(Math.sin(window.scrollY / window.innerHeight * Math.PI));

    sheet.replaceSync(
        "bkg-img {"+
            "filter: " + 
            `blur(${val}pt) ` +
            `hue-rotate(${val}rad) ` +
            `saturate(${100-val*50}%) `+
        "}"
    );
}