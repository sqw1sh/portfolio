const urlStr = window.location.href;
var url = new URL(urlStr);
var paramValue = url.searchParams.get("section");

let bodies = document.querySelectorAll(".card-body");
let items = document.querySelectorAll(".card-foot-item");

switch(paramValue) {
    case "1":
        switchActive(1, bodies, items);
        break;
    case "2":
        switchActive(2, bodies, items);
        break;
}

function switchActive(number, ...arg) {
    for(let i=0; i<arg.length; i++) {
        for(let j=0; j<arg[i].length; j++) {
            arg[i][j].classList.remove("active");
        }
    }
    arg[0][number-1].classList.add("active");
    arg[1][number-1].classList.add("active");
}