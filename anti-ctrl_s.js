document.onkeydown = function (e) {
    var key;
    var isCtrl;

    if (window.event) {
        key = window.event.keyCode;
        if (window.event.ctrlKey)
            isCtrl = true;
        else
            isCtrl = false;
    } else {
        key = e.which;
        if (e.ctrlKey)
            isCtrl = true;
        else
            isCtrl = false;
    }

    if (isCtrl) {
        if ("s" == String.fromCharCode(key).toLowerCase()) {
            return false;
        }

    }
};