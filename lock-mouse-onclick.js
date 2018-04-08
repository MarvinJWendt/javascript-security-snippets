var canvas = document.createElement('canvas');

canvas.width = 10;
canvas.height = 10;
canvas.style.position = "absolute";

var body = document.getElementsByTagName("body")[0];
body.appendChild(canvas);

document.onmousemove = function (e) {
    canvas.style.left = e.pageX;
    canvas.style.top = e.pageY;
};

canvas.requestPointerLock = canvas.requestPointerLock ||
    canvas.mozRequestPointerLock;

document.exitPointerLock = document.exitPointerLock ||
    document.mozExitPointerLock;

canvas.onclick = function () {
    canvas.requestPointerLock();
};

document.addEventListener('pointerlockchange', lockChange, false);
document.addEventListener('mozpointerlockchange', lockChange, false);

function lockChange() {
    if (document.pointerLockElement === canvas ||
        document.mozPointerLockElement === canvas) {
        document.addEventListener("mousemove", function () {}, false);
    } else {
        document.removeEventListener("mousemove", function () {}, false);
    }
}