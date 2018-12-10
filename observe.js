window.localStorage.clear();

var element = document.querySelector('div.mensaje_paywall2');
element.parentElement.removeChild(element);

window.addEventListener("load", main, false);

function main(evt) {
    var timer = setInterval(fade_check, 111);

    function fade_check() {
        if (document.querySelector("div.fade")) {
            clearInterval(timer);
            var element = document.querySelector('div.fade');
            element.classList.remove('fade');
        }
    }
}
