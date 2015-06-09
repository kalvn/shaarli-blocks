$(document).ready(function(){
    $('.qrcode').on('click', function(){
        var url = $(this).attr('href');
        var $imagePopup = $('#image-popup').first();
        var $overlay = $('#overlay').first();
        if(url && $imagePopup && $overlay){
            $imagePopup.html('<img src="' + url + '" alt="QR Code" />').fadeIn();
            $overlay.fadeIn();
        }

        // Disable original click event.
        return false;
    });
    $('#overlay,#image-popup').on('click', function(){
        $('#image-popup').fadeOut();
        $('#overlay').fadeOut();
    });
});
