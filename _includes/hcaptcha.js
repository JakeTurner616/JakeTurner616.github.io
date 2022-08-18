// this file is not sourced in a script tag.
// success callback
var onSuccess = function(response) {
    var errorDivs = document.getElementsByClassName("hcaptcha-error");
    if (errorDivs.length) {
        errorDivs[0].className = "";
    }
    var errorMsgs = document.getElementsByClassName("hcaptcha-error-message");
    if (errorMsgs.length) {
        errorMsgs[0].parentNode.removeChild(errorMsgs[0]);
    }

    var logEl = document.querySelector(".hcaptcha-success");
    logEl.innerHTML = "Challenge Success!"
  // page is for humans only, the source url below has its own bot negation:
    window.location.replace("https://files.serverboi.org/s/upload");
};

var onExpire = function(response) {
    var logEl = document.querySelector(".hcaptcha-success");
    logEl.innerHTML = "Token expired."
};

function addEventHandler(object, szEvent, cbCallback) {
    if (!!object.addEventListener) { // for modern browsers or IE9+
        return object.addEventListener(szEvent, cbCallback);
    }
    if (!!object.attachEvent) { // for IE <=8
        return object.attachEvent(szEvent, cbCallback);
    }
}
// Ex: triggers pageview beacon
addEventHandler(window, 'load', function() {
    b();
});
// Ex: triggers event beacon without pageview
addEventHandler(window, 'load', function() {
    b({
        "vt": "e",
        "ec": "test_cat",
        "ea": "test_action"
    });
});
