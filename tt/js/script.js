jQuery(document).ready(function() {
    jQuery('.search-form').hide();
    jQuery(".social-icon-search").addClass("up-arrow");
    jQuery( ".social-icon-search" ).click(function() {
        jQuery("html, body").animate({ scrollTop: 0 }, 500);
        jQuery('.search-form').slideToggle(500);
        return false;
    });
});

