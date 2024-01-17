console.log('Started');

$("li.dropdown-toggle").on("click", function (e) {
    const jThis = $(this);
    const menu = $(".dropdown-menu")
    if (jThis.hasClass("active")) {
        jThis.toggleClass('active')
    }
    else {
        jThis.toggleClass('active')
    }
});