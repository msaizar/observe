window.localStorage.clear();

var element = document.querySelector('div.mensaje_paywall2');
element.parentElement.removeChild(element);

var element = document.querySelector('div.cuerpo');
element.classList.remove("fade");