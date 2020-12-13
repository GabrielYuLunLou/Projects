var width = 200;
var height = 200;
var color;
var bgcolor;

$('#color').click(() => {
    color = prompt('Which colour do you want the square to be?');
    $('#sq').css('background-color', color);
})

$('#bgcolor').click(() => {
    bgcolor = prompt('Which colour do you want the background to be?');
    $('body').css('background-color', bgcolor);
})

$('#hide').click(() => {
    $('#sq').hide();
})

$('#show').click(() => {
    $('#sq').show();
})

$('#big').click(() => {
    width = width + 20;
    height = height + 20;
    $('#sq').css('width', width);
    $('#sq').css('height', height);
})

$('#small').click(() => {
    width = width - 20;
    height = height - 20;
    $('#sq').css('width', width);
    $('#sq').css('height', height);
})

$('#clear').click(() => {
    $('#sq').css('width', 200);
    $('#sq').css('height', 200);
    $('#sq').css('background-color', 'black');
    $('body').css('background-color', 'white');
})