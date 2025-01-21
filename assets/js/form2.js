/* ==================================================
    Contact Form Validations
================================================== */

$(document).ready(function() {
    $(".contact-form").submit(function(e) {
        e.preventDefault(); // Prevent the default form submission

       var formData = $(this).serialize();

       $("#alert-message").slideUp(750, function () {
            $('#alert-message').hide();
            $('#submit')
                .after('<img src="assets/imgs/ajax-loader.gif" class="loader" />')
                .attr('disabled', 'disabled');


           $.post("assets/mail/contact2.php", formData, function (data) {
                $('#alert-message').html(data); // Set the response message
                $('#alert-message').slideDown('slow');
                $('.contact-form img.loader').fadeOut('slow', function () {
                    $(this).remove();
                });
                $('#submit').removeAttr('disabled');
            });
        });
    });
});
