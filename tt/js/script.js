jQuery(document).ready(function() {

    //! slideToogle 
    jQuery( ".social-icon-search" ).click(function() {
        jQuery('.search-form').slideToggle(500);
    });

    //! Focus In/ Out
    jQuery(".search-box-btn").css("pointer-events", "none");
    jQuery(".search-box-input").focusin(function() {
        jQuery(".search-box-btn").css("pointer-events", "auto");
    });
    jQuery(".search-box-input").focusout(function() {
        jQuery(".search-box-btn").css("pointer-events", "none");
    });
});

