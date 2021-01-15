let boldWords = document.querySelectorAll("b");
let paragraph = document.querySelector("p");

paragraph.onmouseover = function() {
    boldWords.forEach(function(el){
        el.style.color = "red";
    });
};

paragraph.onmouseout = function() {
    boldWords.forEach(function(el){
        el.style.color = "";
    });
};




