var trigger = null;
var count = 0;
var startX = 0;
var startY = 0;
var curX = 0;
var curY = 0;
var deltaX = 0;
var deltaY= 0;
var horizon = 0;
var vertical = 0;
var minLength = 130;
var swipeLength = 0;
var swipeAngle = null;
var swipeDirection = null;

function pointStart(e, point) {
count = e.touches.length;
if(count == 1) {
startX = e.touches[0].pageX;
startY = e.touches[0].pageY;
trigger = point;
} else {
pointCancel(e);
}
}

function pointMove(e) {
if(e.touches.length == 1) {
curX = e.touches[0].pageX;
curY = e.touches[0].pageY;
}else {
pointCancel(e);
}
}

function pointEnd(e) {
if(count == 1 && curX != 0) {
swipeLength = Math.round(Math.sqrt(Math.pow(curX - startX, 2) + Math.pow(curY -startY, 2)));
if(swipeLength >= minLength) {
calculateAngle();
swiped();
router();
pointCancel(e);
}else{
pointCancel(e);
}
}else{
pointCancel(e);
}
}

function pointCancel(e) {
count = 0;
startX = 0;
curX = 0;
curY = 0;
deltaX = 0
deltaY = 0;
horizon = 0;
vertical = 0;
swipeLength =0;
swipeAngle = null;
swipeDirection = null;
trigger = null;
}

function calculateAngle() {
var X = startX - curX;
var Y = curY - startY;
var Z Math.round(Math.sqrt(Math.pow(X, 2) + Math.pow(Y, 2)));
var T = Math.atan2(Y, X);
swipeAngle = Math.round(T * 180 / Math.PI);

if(swipeAngle < 0) {
swipeAngle = 360 - Math.abs(swipeAngle);
}
}

function swiped() {
if((swipeAngle< 10) && (swipeAngle >= 0)) {
swipeDirection = 'left';
}elseif((swipeAngle <= 360) && (swipeAngle >= 350)) {
swipeDirection = 'left';
}elseif((swipeAngle >= 170) && (swipeANgle <= 190)) {
swipeDirection = 'right';
}
}

function router() {
var swipedid = document.getElementById(trigger);
if(swipeDirection == 'left') {
window.location = "#"; //Next Page
}elseif(swipeDirection == 'right') {
window.location = "#" //Previous Page
}
}
