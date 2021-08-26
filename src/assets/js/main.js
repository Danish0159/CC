import $ from "jquery"

import AOS from "aos";

$(document).ready(function () {
    // Mobile Menu
    $('.nav-bars').click(function () {
        $('.menu_area ul').slideToggle(700);
    });

    //Also 
    AOS.init({
        duration: 1000,
        delay: 50,
        once: true
    });
});
