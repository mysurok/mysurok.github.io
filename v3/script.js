$('#img1').on('click', function() {
    alert('hello');
});

var mytop = 200,
    myleft = 450;

$('#up').on('click', function() {
    if (mytop > 110) {
        mytop = mytop - 10;
        $('#smile').css('top', mytop + 'px');
    }
});

$('#down').on('click', function() {
    if (mytop < 360) {
        mytop = mytop + 10;
        $('#smile').css('top', mytop + 'px');
    }
});
$('#right').on('click', function() {
    if (myleft < 750) {
        myleft = myleft + 10;
        $('#smile').css('left', myleft + 'px');
    }
});
$('#left').on('click', function() {
    if (myleft > 110) {
        myleft = myleft - 10;
        $('#smile').css('left', myleft + 'px');
    }
});








Настройки доступа
