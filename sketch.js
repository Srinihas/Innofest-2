var videos, studentsOnline;
var allowChangeScreen;
var form, red;

function preload() {
    videos = [];
    studentsOnline = 0;
    allowChangeScreen = false;
}

function setup() {
    createCanvas(windowWidth, 1000000);
    form = new Form();
}

function draw() {
    background('red');
    if (allowChangeScreen === true) {
        form.hide();
    } else {
        form.start();
    }
    drawSprites();
}