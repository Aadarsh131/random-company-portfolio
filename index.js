$(document).ready(function () {
    var modal = $('.modal-overlay');

    var p1 = $('#project-1');
    var p2 = $('#project-2');
    var p3 = $('#project-3');
    var pimg1 = $('#project-image1');
    var pimg2 = $('#project-image2');
    var pimg3 = $('#project-image3');

    $('.open').on('click', function () {
        modal.show();
    })

    //on 'ESC' press close the modal
    $(document).on('keydown', function (event) {
        if (event.key === "Escape") {
            modal.hide()
        }
    });


    p1.click(function () {
        pimg1.show()
        $(this).css({ 'background-color': '#FF3147', 'color': '#FFFFFF' });
        p2.css({ 'background-color': '#F6F6F6', 'color': '#000000' });
        p3.css({ 'background-color': '#F6F6F6', 'color': '#000000' });
        pimg2.hide()
        pimg3.hide()
    })
    p2.click(function () {
        $(this).css({ 'background-color': '#FF3147', 'color': '#FFFFFF' });
        p1.css({ 'background-color': '#F6F6F6', 'color': '#000000' });
        p3.css({ 'background-color': '#F6F6F6', 'color': '#000000' });
        pimg1.hide()
        pimg2.show()
        pimg3.hide()
    })
    p3.click(function () {
        $(this).css({ 'background-color': '#FF3147', 'color': '#FFFFFF' });
        p1.css({ 'background-color': '#F6F6F6', 'color': '#000000' });
        p2.css({ 'background-color': '#F6F6F6', 'color': '#000000' });
        pimg1.hide()
        pimg2.hide()
        pimg3.show()
    })

    $('#contact-form').on('submit', function(event) {
                event.preventDefault();

                // Ensure all fields are filled
                const email = $('#email').val();
                const firstName = $('#firstName').val();
                const lastName = $('#lastName').val();
                const consentChecked = $('#consent-checkbox').is(':checked');

                if (email && firstName && lastName && consentChecked) {
                    // If all fields are valid, submit the form
                    this.submit();
                } else {
                    alert('Please fill in all fields and agree to the terms and conditions.');
                }
            });
});
