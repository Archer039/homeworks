function getAttributes () {
    let linkHref = document.querySelector("#link").getAttribute("href");
    let linkHreflang = document.querySelector("#link").getAttribute("hreflang");
    let linkRel = document.querySelector("#link").getAttribute("rel");
    let linkTarget = document.querySelector("#link").getAttribute("target");
    let linkType = document.querySelector("#link").getAttribute("type");
    alert("href: " + linkHref + "\n" + "hreflang: " + linkHreflang + "\n" + "rel: " + linkRel + "\n" + "target: " + linkTarget + "\n" + "type: " + linkType);
};

var a = [4, 5, 6];
var b = [4, 5, 6];
console.log(a != b)