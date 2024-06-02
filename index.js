$(document).ready(function () {
    // $("#project-image2").hide()
    // $("#project-image3").hide()
    $('#project-1').click(function () {
        $("#project-image1").show()
        $(this).css({'background-color': '#FF3147', 'color': '#FFFFFF'});
        $('#project-2').css({'background-color': '#F6F6F6', 'color': '#000000'});
        $('#project-3').css({'background-color': '#F6F6F6', 'color': '#000000'});
        $("#project-image2").hide()
        $("#project-image3").hide()
    })
    $('#project-2').click(function () {
        $(this).css({'background-color': '#FF3147', 'color': '#FFFFFF'});
        $('#project-1').css({'background-color': '#F6F6F6', 'color': '#000000'});
        $('#project-3').css({'background-color': '#F6F6F6', 'color': '#000000'});
        $("#project-image1").hide()
        $("#project-image2").show()
        $("#project-image3").hide()
    })
    $('#project-3').click(function () {
        $(this).css({'background-color': '#FF3147', 'color': '#FFFFFF'});
        $('#project-1').css({'background-color': '#F6F6F6', 'color': '#000000'});
        $('#project-2').css({'background-color': '#F6F6F6', 'color': '#000000'});
        $("#project-image1").hide()
        $("#project-image2").hide()
        $("#project-image3").show()
    })
});
