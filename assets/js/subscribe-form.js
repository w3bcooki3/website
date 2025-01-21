
/* ==================================================
    Contact Form Validations
================================================== */

$(document).ready(function() {
    $(".subscribe-form").submit(function(e) {
        e.preventDefault(); // Prevent the default form submission

        var formData = $(this).serialize();

        $("#alert-message-subscribe").slideUp(750, function () {
            $('#alert-message-subscribe').hide();
            $('#submit2')
                .after('<img src="assets/imgs/ajax-loader.gif" class="loader" />')
                .attr('disabled', 'disabled');

            $.post("assets/mail/subscribe.php", formData, function (data) {
                $('#alert-message-subscribe').html(data); // Set the response message
                $('#alert-message-subscribe').slideDown('slow');
                $('.subscribe-form img.loader').fadeOut('slow', function () {
                    $(this).remove();
                });
                $('#submit2').removeAttr('disabled');
            });
        });
    });
});
