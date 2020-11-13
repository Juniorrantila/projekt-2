
var tag = document.getElementsByTagName("bkg-img");
for (var i = 0; i<tag.length; i++)
    tag[i].style.backgroundImage = tag[i].attributes.src.value;

