$(document).ready(function() {
    $('#time').click(function() {
        $.get('/api/time', function(data) {
            $('#timeResult').html(data.timeNow);
        })
    })
})