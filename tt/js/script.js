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

    //! AUTOCOMPLETE-OFF
    jQuery(".search-box input[type='text']").attr("autocomplete", "off");

    //! FORM PLACEHOLDER
    jQuery(".sing-up input[name='name']").focusin(function(){
        jQuery(this).attr('placeholder','');
    });
    jQuery(".sing-up input[name='name']").focusout(function(){
        jQuery(this).attr('placeholder', 'Name');
    });
    jQuery(".sing-up input[name='email']").focusin(function(){
        jQuery(this).attr('placeholder','');
    });
    jQuery(".sing-up input[name='email']").focusout(function(){
        jQuery(this).attr('placeholder', 'Email*');
    });
});

