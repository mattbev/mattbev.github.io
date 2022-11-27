$(document).ready(function () {
    $('#togglemoreless').on('click', function () {
        var text = $('#togglemoreless').text();
        if (text == "More") {
            $(this).text('Less');
        } else if (text == "Less") {
            $(this).text('More');
        } else {
            $(this).text("error");
        }
    });
});

$(document).ready(function () {
    $('#togglepublicationtable').on('click', function () {
        var text = $('#togglepublicationtable').text();
        if (text == "Interact") {
            $(this).text('Don\'t Interact');
        } else if (text == 'Don\'t Interact') {
            $(this).text('Interact');
        } else {
            $(this).text("error");
        }
    });
});