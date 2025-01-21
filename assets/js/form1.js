/* ==================================================
    Contact Form Validations
================================================== */

$('.contact-form').each(function () {
    var formInstance = $(this);
    formInstance.submit(function (e) {
        e.preventDefault(); // Prevent the default form submission

        var action = $(this).attr('action');

        $("#alert-message").slideUp(750, function () {
            $('#alert-message').hide();

            $('#submit')
                .after('<img src="assets/imgs/ajax-loader.gif" class="loader" />')
                .attr('disabled', 'disabled');

            $.post(action, {
                    first_name: $('#first_name').val(),
                    last_name: $('#last_name').val(),
                    email: $('#email').val(),
                    phone_number: $('#phone_number').val(),
                    homeland: $('#homeland').val(),
                    privacy_policy_accept: $("#privacy_policy_accept").is(":checked") ? "1" : "0",
                    message: $('#message').val()
                },
                function (data) {
                    $('#alert-message').html(data); // Updated to set the inner HTML
                    $('#alert-message').slideDown('slow');
                    $('.contact-form img.loader').fadeOut('slow', function () {
                        $(this).remove();
                    });
                    $('#submit').removeAttr('disabled');
                }
            );
        });
    });
});
